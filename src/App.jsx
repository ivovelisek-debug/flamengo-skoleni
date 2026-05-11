import { useState, useEffect } from 'react'
import { modules } from './data/modules'
import LoginView from './components/LoginView'
import Dashboard from './components/Dashboard'
import ModuleView from './components/ModuleView'
import QuizView from './components/QuizView'
import ChecklistView from './components/ChecklistView'
import ReportView from './components/ReportView'

function loadUserName() {
  try { return localStorage.getItem('flamengo_user') || null } catch { return null }
}

function loadRole() {
  try { return localStorage.getItem('flamengo_role') || null } catch { return null }
}

function saveAuth(name, role) {
  try {
    localStorage.setItem('flamengo_user', name)
    localStorage.setItem('flamengo_role', role)
  } catch {}
}

function progressKey(name) {
  return `flamengo_progress_${name}`
}

function loadProgress(name) {
  try {
    const stored = localStorage.getItem(progressKey(name))
    return stored ? JSON.parse(stored) : {}
  } catch { return {} }
}

function saveProgress(name, progress) {
  try { localStorage.setItem(progressKey(name), JSON.stringify(progress)) } catch {}
}

async function postResult(entry) {
  await fetch('/api/results', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  })
}

export default function App() {
  const [userName, setUserName] = useState(loadUserName)
  const [role, setRole] = useState(loadRole)
  const [view, setView] = useState('dashboard')
  const [activeModuleId, setActiveModuleId] = useState(null)
  const [progress, setProgress] = useState(() => userName ? loadProgress(userName) : {})

  useEffect(() => {
    if (userName) saveProgress(userName, progress)
  }, [progress, userName])

  const activeModule = modules.find(m => m.id === activeModuleId)

  function handleLogin({ name, role }) {
    saveAuth(name, role)
    setUserName(name)
    setRole(role)
    setProgress(loadProgress(name))
    setView('dashboard')
  }

  function logout() {
    if (!window.confirm('Odhlásit se?')) return
    setUserName(null)
    setRole(null)
    setProgress({})
    setView('dashboard')
    localStorage.removeItem('flamengo_user')
    localStorage.removeItem('flamengo_role')
  }

  function openModule(id) {
    setActiveModuleId(id)
    setView('module')
    window.scrollTo(0, 0)
  }

  function openQuiz(id) {
    setActiveModuleId(id)
    setView('quiz')
    window.scrollTo(0, 0)
  }

  function completeModule(id) {
    setProgress(prev => ({ ...prev, [id]: { ...prev[id], read: true } }))
  }

  function completeQuiz(id, score, total) {
    setProgress(prev => ({ ...prev, [id]: { ...prev[id], quizScore: score, quizTotal: total, quizDone: true } }))
    const mod = modules.find(m => m.id === id)
    postResult({
      name: userName,
      moduleId: id,
      moduleTitle: mod?.title || `Modul ${id}`,
      score,
      total,
      percent: Math.round((score / total) * 100),
      date: new Date().toLocaleDateString('cs-CZ'),
      timestamp: Date.now(),
    }).catch(console.error)
  }

  function resetProgress() {
    if (!window.confirm('Opravdu smazat postup?')) return
    setProgress({})
    localStorage.removeItem(progressKey(userName))
  }

  function goHome() {
    setView('dashboard')
    setActiveModuleId(null)
    window.scrollTo(0, 0)
  }

  if (!userName) {
    return <LoginView onLogin={handleLogin} />
  }

  return (
    <div className="app">
      {view === 'dashboard' && (
        <Dashboard
          modules={modules}
          progress={progress}
          userName={userName}
          role={role}
          onOpenModule={openModule}
          onOpenQuiz={openQuiz}
          onOpenChecklist={() => setView('checklist')}
          onOpenReport={() => setView('report')}
          onResetProgress={resetProgress}
          onLogout={logout}
        />
      )}
      {view === 'module' && activeModule && (
        <ModuleView
          module={activeModule}
          progress={progress[activeModuleId] || {}}
          onComplete={() => completeModule(activeModuleId)}
          onStartQuiz={() => openQuiz(activeModuleId)}
          onBack={goHome}
        />
      )}
      {view === 'quiz' && activeModule && (
        <QuizView
          module={activeModule}
          progress={progress[activeModuleId] || {}}
          onComplete={(score, total) => completeQuiz(activeModuleId, score, total)}
          onBack={() => openModule(activeModuleId)}
          onHome={goHome}
        />
      )}
      {view === 'checklist' && (
        <ChecklistView onBack={goHome} />
      )}
      {view === 'report' && (
        <ReportView onBack={goHome} userName={userName} role={role} />
      )}
    </div>
  )
}
