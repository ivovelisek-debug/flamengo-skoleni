import { useState } from 'react'
import { checklistSections, weeklyItems } from '../data/checklist'

function getTodayKey() {
  return new Date().toISOString().split('T')[0]
}

function loadChecklist() {
  try {
    const key = `flamengo_checklist_${getTodayKey()}`
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

function saveChecklist(state) {
  try {
    const key = `flamengo_checklist_${getTodayKey()}`
    localStorage.setItem(key, JSON.stringify(state))
  } catch {}
}

export default function ChecklistView({ onBack }) {
  const [checked, setChecked] = useState(loadChecklist)
  const [storeIndex, setStoreIndex] = useState(checked._storeIndex || null)
  const [notes, setNotes] = useState(checked._notes || '')

  const today = new Date().toLocaleDateString('cs-CZ', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  function toggle(id) {
    const next = { ...checked, [id]: !checked[id] }
    setChecked(next)
    saveChecklist(next)
  }

  function setIndex(val) {
    setStoreIndex(val)
    const next = { ...checked, _storeIndex: val }
    setChecked(next)
    saveChecklist(next)
  }

  function updateNotes(val) {
    setNotes(val)
    const next = { ...checked, _notes: val }
    setChecked(next)
    saveChecklist(next)
  }

  const allItems = checklistSections.flatMap(s => s.items)
  const checkedCount = allItems.filter(i => checked[i.id]).length
  const totalCount = allItems.length
  const progressPercent = Math.round((checkedCount / totalCount) * 100)

  const storeIndexColors = {
    1: '#e74c3c', 2: '#e74c3c',
    3: '#f39c12',
    4: '#27ae60',
    5: '#C4963A',
  }

  return (
    <div className="checklist-view">
      <div className="checklist-topbar">
        <button className="back-btn" onClick={onBack}>← Zpět</button>
        <div className="checklist-topbar-title">✓ Kontrolní list</div>
        <div className="checklist-date-badge">{checkedCount}/{totalCount}</div>
      </div>

      <div className="checklist-content">
        <div className="checklist-header">
          <div className="checklist-date">{today}</div>
          <div className="checklist-progress-bar">
            <div
              className="checklist-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="checklist-progress-label">{progressPercent} % dokončeno</div>
        </div>

        {checklistSections.map(section => {
          const sectionChecked = section.items.filter(i => checked[i.id]).length
          return (
            <div key={section.id} className="checklist-section">
              <div className="checklist-section-header">
                <span className="checklist-section-emoji">{section.emoji}</span>
                <span className="checklist-section-title">{section.title}</span>
                <span className="checklist-section-count">{sectionChecked}/{section.items.length}</span>
              </div>
              <div className="checklist-items">
                {section.items.map(item => (
                  <label key={item.id} className={`checklist-item ${checked[item.id] ? 'checklist-item--done' : ''}`}>
                    <input
                      type="checkbox"
                      checked={!!checked[item.id]}
                      onChange={() => toggle(item.id)}
                    />
                    <span className="checklist-checkbox">
                      {checked[item.id] ? '✓' : ''}
                    </span>
                    <span className="checklist-item-text">
                      {item.important && <span className="item-important">!</span>}
                      {item.text}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )
        })}

        <div className="checklist-section">
          <div className="checklist-section-header">
            <span className="checklist-section-emoji">⭐</span>
            <span className="checklist-section-title">Store Index — hodnocení dne</span>
          </div>
          <div className="store-index-grid">
            {[1, 2, 3, 4, 5].map(val => (
              <button
                key={val}
                className={`store-index-btn ${storeIndex === val ? 'store-index-btn--active' : ''}`}
                style={storeIndex === val ? { background: storeIndexColors[val], borderColor: storeIndexColors[val] } : {}}
                onClick={() => setIndex(val)}
              >
                <div className="si-num">{val}</div>
                <div className="si-label">
                  {val === 1 ? 'Kritické' : val === 2 ? 'Slabé' : val === 3 ? 'Průměr' : val === 4 ? 'Dobré' : 'Výborné'}
                </div>
              </button>
            ))}
          </div>
          {storeIndex && (
            <div className="store-index-desc">
              {storeIndex <= 2 && '🔴 Nedoplněno, špína, chybí cenovky. Okamžitá náprava nutná.'}
              {storeIndex === 3 && '🟡 Průměr, doplněno ~75 %. Zákazník nakoupí, ale nevrátí se.'}
              {storeIndex === 4 && '🟢 Doplněno, čisto, dobrý dojem. Zákazník se rád vrátí.'}
              {storeIndex === 5 && '⭐ Nadstandard! 15+ kytic, profesionální. Zákazník nadšen.'}
            </div>
          )}
        </div>

        <div className="checklist-section">
          <div className="checklist-section-header">
            <span className="checklist-section-emoji">📋</span>
            <span className="checklist-section-title">Týdenní rychlokontrola</span>
          </div>
          <div className="checklist-items">
            {weeklyItems.map(item => (
              <label key={item.id} className={`checklist-item ${checked[item.id] ? 'checklist-item--done' : ''}`}>
                <input
                  type="checkbox"
                  checked={!!checked[item.id]}
                  onChange={() => toggle(item.id)}
                />
                <span className="checklist-checkbox">{checked[item.id] ? '✓' : ''}</span>
                <span className="checklist-item-text">{item.text}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="checklist-section">
          <div className="checklist-section-header">
            <span className="checklist-section-emoji">📝</span>
            <span className="checklist-section-title">Poznámky a mimořádnosti</span>
          </div>
          <textarea
            className="notes-textarea"
            placeholder="Zapiš mimořádnosti, problémy, požadavky..."
            value={notes}
            onChange={e => updateNotes(e.target.value)}
            rows={4}
          />
        </div>

        <div className="checklist-footer">
          <p>Kontrolní list se automaticky ukládá. Každý den začíná nový list.</p>
        </div>
      </div>
    </div>
  )
}
