import { useState } from 'react'

const ADMIN_PASSWORD = 'flamengo1'

// Allow Czech/Slovak letters, spaces, dashes, periods, apostrophes
const NAME_RE = /^[\p{L}\p{M}\s\-.']+$/u
const STORE_RE = /^[A-Za-z0-9\-]*$/

export default function LoginView({ onLogin }) {
  const [mode, setMode] = useState('choice')
  const [name, setName] = useState('')
  const [storeId, setStoreId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const nameTrim = name.trim()
  const storeTrim = storeId.trim()
  const nameValid = nameTrim.length >= 2 && nameTrim.length <= 60 && NAME_RE.test(nameTrim)
  const storeValid = storeTrim.length === 0 || (storeTrim.length <= 10 && STORE_RE.test(storeTrim))
  const participantReady = nameValid && storeValid && storeTrim.length > 0

  function handleParticipant(e) {
    e.preventDefault()
    if (!nameValid) {
      setError('Jméno: 2–60 znaků, písmena a mezery.')
      return
    }
    if (storeTrim.length === 0) {
      setError('Zadej číslo pobočky.')
      return
    }
    if (!storeValid) {
      setError('Číslo pobočky: písmena, číslice a pomlčka (max 10 znaků).')
      return
    }
    onLogin({ name: nameTrim, storeId: storeTrim, role: 'participant' })
  }

  function handleAdmin(e) {
    e.preventDefault()
    if (password !== ADMIN_PASSWORD) {
      setError('Nesprávné heslo.')
      return
    }
    onLogin({ name: 'Administrator', storeId: null, role: 'admin' })
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
            <button className="btn btn-primary login-btn" onClick={() => { setMode('participant'); setError('') }}>
              👤 Účastník školení
            </button>
            <button className="btn btn-ghost login-btn" onClick={() => { setMode('admin'); setError('') }}>
              🔒 Administrator
            </button>
            <p className="login-note">Vyber, jak se chceš přihlásit.</p>
          </div>
        )}

        {mode === 'participant' && (
          <form onSubmit={handleParticipant} className="login-form">
            <label className="login-label">Jméno a příjmení</label>
            <input
              type="text"
              className="login-input"
              placeholder="Např. Anna Nováková"
              value={name}
              onChange={e => { setName(e.target.value); setError('') }}
              autoFocus
              autoComplete="name"
              maxLength={60}
            />

            <label className="login-label" style={{ marginTop: '8px' }}>Číslo pobočky</label>
            <input
              type="text"
              className="login-input"
              placeholder="Např. 245"
              value={storeId}
              onChange={e => { setStoreId(e.target.value); setError('') }}
              autoComplete="off"
              inputMode="numeric"
              maxLength={10}
            />

            {error && <div className="login-error">{error}</div>}

            <button
              type="submit"
              className="btn btn-primary login-btn"
              disabled={!participantReady}
            >
              Začít školení →
            </button>
            <button type="button" className="login-back" onClick={() => { setMode('choice'); setError('') }}>
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
