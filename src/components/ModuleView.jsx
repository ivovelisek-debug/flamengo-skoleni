import { useState } from 'react'

function Block({ block }) {
  switch (block.type) {
    case 'text':
      return <p className="block-text">{block.text}</p>

    case 'quote':
      return (
        <blockquote className="block-quote">
          <em>{block.text}</em>
        </blockquote>
      )

    case 'callout':
      return (
        <div className="block-callout">
          {block.text}
        </div>
      )

    case 'alert':
      return (
        <div className="block-alert">
          ⚠️ {block.text}
        </div>
      )

    case 'alert-red':
      return (
        <div className="block-alert-red">
          🚫 {block.text}
        </div>
      )

    case 'list':
      return (
        <div className="block-list">
          {block.title && <div className="block-list-title">{block.title}</div>}
          <ul>
            {block.items.map((item, i) => (
              <li key={i}>
                {item.bold && <strong>{item.bold}</strong>}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      )

    case 'numbered':
      return (
        <ol className="block-numbered">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      )

    case 'donts':
      return (
        <ul className="block-donts">
          {block.items.map((item, i) => (
            <li key={i}>
              <span className="dont-x">✗</span>
              {item}
            </li>
          ))}
        </ul>
      )

    case 'steps':
      return (
        <div className="block-steps">
          {block.items.map((step) => (
            <div key={step.step} className="step-item">
              <div className="step-num">{step.step}</div>
              <div className="step-body">
                <div className="step-title">{step.title}</div>
                <div className="step-text">{step.text}</div>
              </div>
            </div>
          ))}
        </div>
      )

    case 'rules-cards':
      return (
        <div className="block-rules">
          {block.items.map((item, i) => (
            <div key={i} className="rule-card">
              <div className="rule-num">{item.num}</div>
              <div className="rule-body">
                <div className="rule-title">{item.title}</div>
                <div className="rule-text">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      )

    case 'two-col':
      return (
        <div className="block-two-col">
          <div className={`two-col-side ${block.left.positive ? 'two-col-positive' : 'two-col-negative'}`}>
            <div className="two-col-title">{block.left.title}</div>
            <ul>
              {block.left.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className={`two-col-side ${block.right.positive ? 'two-col-positive' : 'two-col-negative'}`}>
            <div className="two-col-title">{block.right.title}</div>
            <ul>
              {block.right.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      )

    case 'sizes':
      return (
        <div className="block-sizes">
          {block.items.map((size) => (
            <div key={size.size} className="size-card">
              <div className="size-badge">{size.size}</div>
              <div className="size-name">{size.name}</div>
              <div className="size-detail">{size.length} · {size.wrap}</div>
              <div className="size-price">{size.price}</div>
              <div className="size-flowers">{size.flowers}</div>
            </div>
          ))}
        </div>
      )

    case 'table':
      return (
        <div className="block-table-wrap">
          <table className="block-table">
            <thead>
              <tr>
                {block.headers.map((h, i) => <th key={i}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className={block.highlight?.includes(i) ? 'table-row-highlight' : ''}>
                  {row.map((cell, j) => <td key={j}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'stats':
      return (
        <div className="block-stats">
          {block.items.map((stat, i) => (
            <div key={i} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      )

    case 'kpi-cards':
      return (
        <div className="block-kpi">
          {block.items.map((kpi, i) => (
            <div key={i} className="kpi-card">
              <div className="kpi-icon">{kpi.icon}</div>
              <div className="kpi-title">{kpi.title}</div>
              <div className="kpi-text">{kpi.text}</div>
              <div className="kpi-goal">{kpi.goal}</div>
            </div>
          ))}
        </div>
      )

    case 'role-card':
      return (
        <div className="block-role-card">
          <div className="role-title">{block.title}</div>
          <ul>
            {block.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )

    case 'checklist-display':
      return (
        <div className="block-checklist-display">
          {block.title && <div className="block-list-title">{block.title}</div>}
          <ul>
            {block.items.map((item, i) => (
              <li key={i}>
                <span className="check-icon">☐</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )

    default:
      return null
  }
}

function Section({ section }) {
  return (
    <div className="module-section">
      <h3 className="section-heading">{section.title}</h3>
      {section.blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  )
}

export default function ModuleView({ module, progress, onComplete, onStartQuiz, onBack }) {
  const [currentSection, setCurrentSection] = useState(0)
  const totalSections = module.sections.length
  const isLastSection = currentSection === totalSections - 1

  function handleNext() {
    if (isLastSection) {
      onComplete()
    } else {
      setCurrentSection(s => s + 1)
      window.scrollTo(0, 0)
    }
  }

  function handlePrev() {
    setCurrentSection(s => s - 1)
    window.scrollTo(0, 0)
  }

  const alreadyDone = progress.quizDone

  return (
    <div className="module-view">
      <div className="module-topbar" style={{ background: module.accentColor }}>
        <button className="back-btn" onClick={onBack}>← Zpět</button>
        <div className="module-topbar-title">
          <span>{module.emoji}</span> {module.title}
        </div>
        <div className="section-counter">{currentSection + 1}/{totalSections}</div>
      </div>

      <div className="progress-bar-wrap">
        <div
          className="progress-bar-fill"
          style={{
            width: `${((currentSection + 1) / totalSections) * 100}%`,
            background: module.accentColor,
          }}
        />
      </div>

      <div className="module-content">
        <Section section={module.sections[currentSection]} />

        <div className="section-nav">
          {currentSection > 0 && (
            <button className="btn btn-ghost" onClick={handlePrev}>← Předchozí</button>
          )}
          <div style={{ flex: 1 }} />
          {isLastSection ? (
            <div className="final-actions">
              <button
                className="btn btn-accent"
                onClick={() => { onComplete(); onStartQuiz() }}
              >
                ✏️ Jít na kvíz →
              </button>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={handleNext}>Další →</button>
          )}
        </div>

        {alreadyDone && (
          <div className="already-done-notice">
            ✓ Kvíz dokončen ({progress.quizScore}/{progress.quizTotal}) ·{' '}
            <button className="link-btn" onClick={onStartQuiz}>Zkusit znovu</button>
          </div>
        )}
      </div>
    </div>
  )
}
