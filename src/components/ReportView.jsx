import { useState, useEffect } from 'react'

export default function ReportView({ onBack }) {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/results')
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json() })
      .then(data => { setReports(data); setLoading(false) })
      .catch(e => { setError(e.message); setLoading(false) })
  }, [])

  // Group by name, sort alphabetically
  const byName = {}
  reports.forEach(r => {
    if (!byName[r.name]) byName[r.name] = []
    byName[r.name].push(r)
  })
  const names = Object.keys(byName).sort()

  return (
    <div className="report-view">
      <div className="checklist-topbar">
        <button className="back-btn" onClick={onBack}>← Zpět</button>
        <div className="checklist-topbar-title">📊 Výsledky školení</div>
        {reports.length > 0 && (
          <a className="export-btn" href="/api/export" download>⬇ CSV</a>
        )}
      </div>

      <div className="report-content">
        {loading && (
          <div className="report-empty">
            <div className="report-empty-icon">⏳</div>
            <div className="report-empty-text">Načítám výsledky…</div>
          </div>
        )}

        {error && (
          <div className="report-empty">
            <div className="report-empty-icon">⚠️</div>
            <div className="report-empty-text">Nelze načíst výsledky</div>
            <div className="report-empty-sub">Server není dostupný ({error})</div>
          </div>
        )}

        {!loading && !error && reports.length === 0 && (
          <div className="report-empty">
            <div className="report-empty-icon">📋</div>
            <div className="report-empty-text">Žádné výsledky zatím.</div>
            <div className="report-empty-sub">Výsledky se ukládají automaticky po dokončení kvízu.</div>
          </div>
        )}

        {!loading && !error && reports.length > 0 && (
          <>
            <div className="report-summary">
              <div className="report-summary-item">
                <div className="rs-value">{names.length}</div>
                <div className="rs-label">floristek</div>
              </div>
              <div className="report-summary-item">
                <div className="rs-value">{reports.length}</div>
                <div className="rs-label">kvízů splněno</div>
              </div>
              <div className="report-summary-item">
                <div className="rs-value">
                  {Math.round(reports.reduce((s, r) => s + r.percent, 0) / reports.length)} %
                </div>
                <div className="rs-label">průměr</div>
              </div>
            </div>

            {names.map(name => {
              const results = byName[name]
              const passed = results.filter(r => r.percent >= 80).length
              const avg = Math.round(results.reduce((s, r) => s + r.percent, 0) / results.length)
              return (
                <div key={name} className="report-person">
                  <div className="report-person-header">
                    <span className="report-person-name">👤 {name}</span>
                    <span className="report-person-stats">
                      {passed}/{results.length} splněno · ø {avg} %
                    </span>
                  </div>
                  <div className="report-table-wrap">
                    <table className="report-table">
                      <thead>
                        <tr><th>Modul</th><th>Skóre</th><th>%</th><th>Datum</th></tr>
                      </thead>
                      <tbody>
                        {results.map((r, i) => (
                          <tr key={i} className={r.percent >= 80 ? 'row-pass' : 'row-fail'}>
                            <td>{r.moduleTitle}</td>
                            <td>{r.score}/{r.total}</td>
                            <td>
                              <span className={`score-badge ${r.percent >= 80 ? 'badge-pass' : 'badge-fail'}`}>
                                {r.percent} %
                              </span>
                            </td>
                            <td>{r.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            })}
          </>
        )}
      </div>
    </div>
  )
}
