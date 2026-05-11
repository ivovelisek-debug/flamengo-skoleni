import { useState } from 'react'

export default function LoginView({ onLogin }) {
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = name.trim()
    if (trimmed.length < 2) return
    onLogin(trimmed)
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

        <form onSubmit={handleSubmit} className="login-form">
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
        </form>

        <p className="login-note">Tvoje jméno se použije pro evidenci výsledků.</p>
      </div>
    </div>
  )
}
