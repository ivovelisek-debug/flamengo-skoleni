export default function Dashboard({ modules, progress, userName, storeId, role, onOpenModule, onOpenQuiz, onOpenChecklist, onOpenReport, onResetProgress, onLogout }) {
  const isAdmin = role === 'admin'
  const completedModules = modules.filter(m => progress[m.id]?.quizDone).length
  const totalModules = modules.length
  const overallPercent = Math.round((completedModules / totalModules) * 100)

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="dashboard-logo">
          <span className="logo-icon">🌹</span>
          <div>
            <div className="logo-title">Flamengo</div>
            <div className="logo-subtitle">Školení floristek 2026</div>
          </div>
        </div>
        <div className="dashboard-progress-summary">
          <div className="progress-ring">
            <svg width="56" height="56" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
              <circle
                cx="28" cy="28" r="22"
                fill="none"
                stroke="#C4963A"
                strokeWidth="4"
                strokeDasharray={`${2 * Math.PI * 22}`}
                strokeDashoffset={`${2 * Math.PI * 22 * (1 - overallPercent / 100)}`}
                strokeLinecap="round"
                transform="rotate(-90 28 28)"
              />
            </svg>
            <span className="progress-ring-label">{overallPercent}%</span>
          </div>
          <div className="progress-text">
            <span className="progress-fraction">{completedModules}/{totalModules}</span>
            <span className="progress-label">modulů</span>
          </div>
        </div>
      </header>

      <div className="user-bar">
        <span className="user-bar-name">
          {isAdmin ? '🔒 ' : '👤 '}{userName}
          {isAdmin && <span className="user-bar-role"> · administrátor</span>}
          {!isAdmin && storeId && <span className="user-bar-store">📍 pobočka {storeId}</span>}
        </span>
        <button className="user-bar-logout" onClick={onLogout}>Odhlásit</button>
      </div>

      <div className="dashboard-content">
        <h2 className="section-title">Výukové moduly</h2>
        <p className="section-subtitle">Každý modul obsahuje výukový obsah a závěrečný kvíz.</p>

        <div className="modules-grid">
          {modules.map((mod) => {
            const p = progress[mod.id] || {}
            const isRead = p.read || p.quizDone
            const quizDone = p.quizDone
            const quizScore = p.quizScore
            const quizTotal = p.quizTotal

            let statusLabel = 'Nezačato'
            let statusClass = 'status-new'
            if (quizDone) {
              statusLabel = `Hotovo · ${quizScore}/${quizTotal}`
              statusClass = quizScore === quizTotal ? 'status-perfect' : quizScore >= quizTotal * 0.8 ? 'status-done' : 'status-retry'
            } else if (isRead) {
              statusLabel = 'Přečteno · kvíz čeká'
              statusClass = 'status-read'
            }

            return (
              <div key={mod.id} className={`module-card ${quizDone ? 'module-card--done' : ''}`}>
                <div className="module-card-top" style={{ background: mod.accentColor }}>
                  <span className="module-emoji">{mod.emoji}</span>
                  <div className="module-meta">
                    <span className="module-time">⏱ {mod.estimatedMinutes} min</span>
                    <span className={`module-status ${statusClass}`}>{statusLabel}</span>
                  </div>
                </div>
                <div className="module-card-body">
                  <div className="module-num">Modul {mod.id}</div>
                  <h3 className="module-title">{mod.title}</h3>
                  <p className="module-subtitle">{mod.subtitle}</p>
                  <div className="module-sections">
                    {mod.sections.map((s, i) => (
                      <span key={i} className="module-section-tag">{s.title}</span>
                    ))}
                  </div>
                </div>
                <div className="module-card-actions">
                  <button className="btn btn-primary" onClick={() => onOpenModule(mod.id)}>
                    {isRead ? '📖 Opakovat' : '📖 Začít číst'}
                  </button>
                  {isRead && (
                    <button
                      className={`btn ${quizDone ? 'btn-ghost' : 'btn-accent'}`}
                      onClick={() => onOpenQuiz(mod.id)}
                    >
                      {quizDone ? '🔄 Zkusit znovu' : '✏️ Kvíz'}
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="bottom-actions">
          <button className="btn-checklist" onClick={onOpenChecklist}>
            <span>✓</span>
            <div>
              <div className="checklist-btn-title">Denní kontrolní list</div>
              <div className="checklist-btn-sub">Zkontroluj prodejnu dnes</div>
            </div>
          </button>
          <button className="btn-report" onClick={onOpenReport}>
            <span>📊</span>
            <div>
              <div className="checklist-btn-title">{isAdmin ? 'Výsledky školení' : 'Moje výsledky'}</div>
              <div className="checklist-btn-sub">
                {isAdmin ? 'Kdo vyplnil a s jakým skóre' : 'Tvé dokončené kvízy a skóre'}
              </div>
            </div>
          </button>
        </div>

        {Object.keys(progress).length > 0 && (
          <div className="reset-area">
            <button className="btn-reset" onClick={onResetProgress}>Smazat postup</button>
          </div>
        )}
      </div>
    </div>
  )
}
