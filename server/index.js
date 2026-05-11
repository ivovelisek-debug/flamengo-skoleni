import express from 'express'
import cors from 'cors'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { getDb, initDb } from '../lib/db.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.post('/api/results', async (req, res) => {
  const db = await getDb()
  const { name, moduleId, moduleTitle, score, total, percent, date, timestamp } = req.body
  if (!name || moduleId == null) return res.status(400).json({ error: 'Chybí povinná pole' })
  await db.execute({
    sql: `INSERT INTO results (name, module_id, module_title, score, total, percent, date, timestamp)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(name, module_id) DO UPDATE SET
            module_title = excluded.module_title,
            score        = CASE WHEN excluded.score >= score THEN excluded.score ELSE score END,
            total        = excluded.total,
            percent      = CASE WHEN excluded.score >= score THEN excluded.percent ELSE percent END,
            date         = CASE WHEN excluded.score >= score THEN excluded.date ELSE date END,
            timestamp    = CASE WHEN excluded.score >= score THEN excluded.timestamp ELSE timestamp END`,
    args: [name, moduleId, moduleTitle, score, total, percent, date, timestamp],
  })
  res.json({ ok: true })
})

app.get('/api/results', async (_req, res) => {
  const db = await getDb()
  const { rows } = await db.execute(`
    SELECT name, module_id AS moduleId, module_title AS moduleTitle,
           score, total, percent, date, timestamp
    FROM results ORDER BY name, timestamp DESC
  `)
  res.json(rows)
})

app.get('/api/export', async (_req, res) => {
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
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../dist')))
  app.get('*', (_req, res) => res.sendFile(join(__dirname, '../dist/index.html')))
}

await initDb()
app.listen(PORT, () => console.log(`Flamengo server běží na portu ${PORT}`))
