import { getDb, initDb } from '../lib/db.js'

let ready = false
async function ensureDb() {
  if (!ready) { await initDb(); ready = true }
}

export default async function handler(req, res) {
  await ensureDb()
  const db = await getDb()
  const { rows } = await db.execute(`
    SELECT name, module_title, score, total, percent, date
    FROM results ORDER BY name, timestamp DESC
  `)
  const header = ['Jméno', 'Modul', 'Skóre', 'Procent', 'Datum']
  const lines = rows.map(r =>
    [r.name, r.module_title, `${r.score}/${r.total}`, `${r.percent}%`, r.date]
      .map(c => `"${String(c).replace(/"/g, '""')}"`)
      .join(';')
  )
  const csv = '﻿' + [header.map(h => `"${h}"`).join(';'), ...lines].join('\n')
  const filename = `flamengo_vysledky_${new Date().toISOString().split('T')[0]}.csv`
  res.setHeader('Content-Type', 'text/csv; charset=utf-8')
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
  res.send(csv)
}
