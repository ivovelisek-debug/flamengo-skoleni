// True .xlsx export using ExcelJS with formatting (header, conditional row colors).
import { getDb, initDb } from '../lib/db.js'
import ExcelJS from 'exceljs'

let ready = false
async function ensureDb() {
  if (!ready) { await initDb(); ready = true }
}

export default async function handler(req, res) {
  await ensureDb()
  const db = await getDb()
  const { rows } = await db.execute(`
    SELECT name, store_id AS storeId, module_id AS moduleId, module_title AS moduleTitle,
           score, total, percent, date, timestamp
    FROM results ORDER BY store_id, name, timestamp DESC
  `)

  const wb = new ExcelJS.Workbook()
  wb.creator = 'Flamengo Školení'
  wb.created = new Date()

  // Sheet 1: Detail (all results)
  const detail = wb.addWorksheet('Detail', {
    views: [{ state: 'frozen', ySplit: 1 }],
  })
  detail.columns = [
    { header: 'Pobočka', key: 'storeId', width: 12 },
    { header: 'Jméno', key: 'name', width: 28 },
    { header: 'Modul', key: 'moduleTitle', width: 28 },
    { header: 'Skóre', key: 'score', width: 10 },
    { header: 'Procent', key: 'percent', width: 12 },
    { header: 'Datum', key: 'date', width: 14 },
  ]
  // Header row styling
  const headerRow = detail.getRow(1)
  headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } }
  headerRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1A3028' } }
  headerRow.alignment = { vertical: 'middle', horizontal: 'left' }
  headerRow.height = 22

  for (const r of rows) {
    const row = detail.addRow({
      storeId: r.storeId || '',
      name: r.name,
      moduleTitle: r.moduleTitle,
      score: `${r.score}/${r.total}`,
      percent: r.percent / 100,
      date: r.date,
    })
    // Color-code percent cell: green ≥ 80, orange 50-79, red < 50
    const percentCell = row.getCell('percent')
    percentCell.numFmt = '0%'
    if (r.percent >= 80) {
      percentCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE8F8EE' } }
      percentCell.font = { color: { argb: 'FF27AE60' }, bold: true }
    } else if (r.percent >= 50) {
      percentCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFF4E6' } }
      percentCell.font = { color: { argb: 'FFE67E22' }, bold: true }
    } else {
      percentCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFDECEA' } }
      percentCell.font = { color: { argb: 'FFC0392B' }, bold: true }
    }
  }
  detail.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: 6 } }

  // Sheet 2: Souhrn (summary per person)
  const summary = wb.addWorksheet('Souhrn', {
    views: [{ state: 'frozen', ySplit: 1 }],
  })
  summary.columns = [
    { header: 'Pobočka', key: 'storeId', width: 12 },
    { header: 'Jméno', key: 'name', width: 28 },
    { header: 'Modulů splněno', key: 'count', width: 16 },
    { header: 'Modulů ≥80 %', key: 'passed', width: 16 },
    { header: 'Průměr', key: 'avg', width: 12 },
  ]
  const sHeader = summary.getRow(1)
  sHeader.font = { bold: true, color: { argb: 'FFFFFFFF' } }
  sHeader.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1A3028' } }
  sHeader.height = 22

  const byName = {}
  for (const r of rows) {
    const key = r.name
    if (!byName[key]) byName[key] = { storeId: r.storeId || '', name: r.name, results: [] }
    byName[key].results.push(r)
    if (r.storeId) byName[key].storeId = r.storeId
  }
  const names = Object.keys(byName).sort((a, b) => {
    const sa = byName[a].storeId || ''
    const sb = byName[b].storeId || ''
    if (sa !== sb) return sa.localeCompare(sb, 'cs')
    return a.localeCompare(b, 'cs')
  })
  for (const n of names) {
    const p = byName[n]
    const count = p.results.length
    const passed = p.results.filter(r => r.percent >= 80).length
    const avg = p.results.reduce((s, r) => s + r.percent, 0) / count / 100
    const row = summary.addRow({
      storeId: p.storeId,
      name: p.name,
      count,
      passed,
      avg,
    })
    row.getCell('avg').numFmt = '0%'
  }
  summary.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: 5 } }

  const buffer = await wb.xlsx.writeBuffer()
  const filename = `flamengo_vysledky_${new Date().toISOString().split('T')[0]}.xlsx`
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
  res.send(Buffer.from(buffer))
}
