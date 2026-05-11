import { db, initDb } from '../lib/db.js'

let ready = false
async function ensureDb() {
  if (!ready) { await initDb(); ready = true }
}

export default async function handler(req, res) {
  await ensureDb()

  if (req.method === 'GET') {
    const { rows } = await db.execute(`
      SELECT name, module_id AS moduleId, module_title AS moduleTitle,
             score, total, percent, date, timestamp
      FROM results ORDER BY name, timestamp DESC
    `)
    return res.json(rows)
  }

  if (req.method === 'POST') {
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
    return res.json({ ok: true })
  }

  res.status(405).end()
}
