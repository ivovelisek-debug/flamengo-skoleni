import express from 'express'
import cors from 'cors'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import ExcelJS from 'exceljs'
import { getDb, initDb } from '../lib/db.js'
import { validateResult, normalizeResult } from '../lib/validation.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.post('/api/results', async (req, res) => {
  const errors = validateResult(req.body)
  if (errors.length > 0) {
    return res.status(400).json({ error: 'Neplatná data', details: errors })
  }
  const data = normalizeResult(req.body)
  const db = await getDb()
  await db.execute({
    sql: `INSERT INTO results (name, store_id, module_id, module_title, score, total, percent, date, timestamp)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(name, module_id) DO UPDATE SET
            store_id     = COALESCE(excluded.store_id, store_id),
            module_title = excluded.module_title,
            score        = CASE WHEN excluded.score >= score THEN excluded.score ELSE score END,
            total        = excluded.total,
            percent      = CASE WHEN excluded.score >= score THEN excluded.percent ELSE percent END,
            date         = CASE WHEN excluded.score >= score THEN excluded.date ELSE date END,
            timestamp    = CASE WHEN excluded.score >= score THEN excluded.timestamp ELSE timestamp END`,
    args: [data.name, data.storeId, data.moduleId, data.moduleTitle, data.score, data.total, data.percent, data.date, data.timestamp],
  })
  res.json({ ok: true })
})

app.get('/api/results', async (_req, res) => {
  const db = await getDb()
  const { rows } = await db.execute(`
    SELECT name, store_id AS storeId, module_id AS moduleId, module_title AS moduleTitle,
           score, total, percent, date, timestamp
    FROM results ORDER BY name, timestamp DESC
  `)
  res.json(rows)
})

app.get('/api/export', async (_req, res) => {
  const db = await getDb()
  const { rows } = await db.execute(`
    SELECT name, store_id AS storeId, module_title, score, total, percent, date
    FROM results ORDER BY store_id, name, timestamp DESC
  `)
  const header = ['Pobočka', 'Jméno', 'Modul', 'Skóre', 'Procent', 'Datum']
  const lines = rows.map(r =>
    [r.storeId || '', r.name, r.module_title, `${r.score}/${r.total}`, `${r.percent}%`, r.date]
      .map(c => `"${String(c).replace(/"/g, '""')}"`)
      .join(';')
  )
  const csv = '﻿' + [header.map(h => `"${h}"`).join(';'), ...lines].join('\r\n')
  const filename = `flamengo_vysledky_${new Date().toISOString().split('T')[0]}.csv`
  res.setHeader('Content-Type', 'text/csv; charset=utf-8')
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
  res.send(csv)
})

app.get('/api/export-xlsx', async (_req, res) => {
  const db = await getDb()
  const { rows } = await db.execute(`
    SELECT name, store_id AS storeId, module_title AS moduleTitle,
           score, total, percent, date, timestamp
    FROM results ORDER BY store_id, name, timestamp DESC
  `)

  const wb = new ExcelJS.Workbook()
  const ws = wb.addWorksheet('Detail', { views: [{ state: 'frozen', ySplit: 1 }] })
  ws.columns = [
    { header: 'Pobočka', key: 'storeId', width: 12 },
    { header: 'Jméno', key: 'name', width: 28 },
    { header: 'Modul', key: 'moduleTitle', width: 28 },
    { header: 'Skóre', key: 'score', width: 10 },
    { header: 'Procent', key: 'percent', width: 12 },
    { header: 'Datum', key: 'date', width: 14 },
  ]
  ws.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } }
  ws.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1A3028' } }
  ws.getRow(1).height = 22

  for (const r of rows) {
    const row = ws.addRow({
      storeId: r.storeId || '',
      name: r.name,
      moduleTitle: r.moduleTitle,
      score: `${r.score}/${r.total}`,
      percent: r.percent / 100,
      date: r.date,
    })
    const cell = row.getCell('percent')
    cell.numFmt = '0%'
    if (r.percent >= 80) cell.font = { color: { argb: 'FF27AE60' }, bold: true }
    else if (r.percent >= 50) cell.font = { color: { argb: 'FFE67E22' }, bold: true }
    else cell.font = { color: { argb: 'FFC0392B' }, bold: true }
  }
  ws.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: 6 } }

  const buffer = await wb.xlsx.writeBuffer()
  const filename = `flamengo_vysledky_${new Date().toISOString().split('T')[0]}.xlsx`
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
  res.send(Buffer.from(buffer))
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../dist')))
  app.get('*', (_req, res) => res.sendFile(join(__dirname, '../dist/index.html')))
}

await initDb()
app.listen(PORT, () => console.log(`Flamengo server běží na portu ${PORT}`))
