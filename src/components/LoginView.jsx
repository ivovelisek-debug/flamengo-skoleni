import { useState } from 'react'

const ADMIN_PASSWORD = 'flamengo1'

export default function LoginView({ onLogin }) {
  const [mode, setMode] = useState('choice')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleParticipant(e) {
    e.preventDefault()
    const trimmed = name.trim()
    if (trimmed.length < 2) return
    onLogin({ name: trimmed, role: 'participant' })
  }

  function handleAdmin(e) {
    e.preventDefault()
    if (password !== ADMIN_PASSWORD) {
      setError('Nesprávné heslo.')
      return
    }
    onLogin({ name: 'Administrator', role: 'admin' })
  }

  return (
    <div className="login-view">
      <div className="login-card">
        <div className="login-logo">
          <span className="login-rose">🌹</span>
          <div>
            <div className="login-brand">Flamengo</div>
            <div className="login-brand-sub">Školení floristek 2026</div>
          </div>
        </div>

        {mode === 'choice' && (
          <div className="login-choice">
            <button className="btn btn-primary login-btn" onClick={() => setMode('participant')}>
              👤 Účastník školení
            </button>
            <button className="btn btn-ghost login-btn" onClick={() => setMode('admin')}>
              🔒 Administrator
            </button>
            <p className="login-note">Vyber, jak se chceš přihlásit.</p>
          </div>
        )}

        {mode === 'participant' && (
          <form onSubmit={handleParticipant} className="login-form">
            <label className="login-label">Zadej své jméno</label>
            <input
              type="text"
              className="login-input"
              placeholder="Jméno a příjmení"
              value={name}
              onChange={e => setName(e.target.value)}
              autoFocus
              autoComplete="name"
            />
            <button
              type="submit"
              className="btn btn-primary login-btn"
              disabled={name.trim().length < 2}
            >
              Začít školení →
            </button>
            <button type="button" className="login-back" onClick={() => setMode('choice')}>
              ← Zpět
            </button>
          </form>
        )}

        {mode === 'admin' && (
          <form onSubmit={handleAdmin} className="login-form">
            <label className="login-label">Heslo administrátora</label>
            <input
              type="password"
              className="login-input"
              placeholder="Heslo"
              value={password}
              onChange={e => { setPassword(e.target.value); setError('') }}
              autoFocus
              autoComplete="current-password"
            />
            {error && <div className="login-error">{error}</div>}
            <button
              type="submit"
              className="btn btn-primary login-btn"
              disabled={password.length === 0}
            >
              Přihlásit →
            </button>
            <button type="button" className="login-back" onClick={() => { setMode('choice'); setPassword(''); setError('') }}>
              ← Zpět
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
