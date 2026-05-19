import { getDb, initDb } from '../lib/db.js'
import { validateResult, normalizeResult } from '../lib/validation.js'

let ready = false
async function ensureDb() {
  if (!ready) { await initDb(); ready = true }
}

// Best-effort in-memory rate limit per cold-start container.
// 30 POSTs / minute / IP. Won't fully stop a determined attacker
// across many warm containers but blocks naive abuse.
const RL_WINDOW_MS = 60_000
const RL_MAX = 30
const rateBucket = new Map()

function rateLimit(ip) {
  if (!ip) return true
  const now = Date.now()
  const arr = (rateBucket.get(ip) || []).filter(t => now - t < RL_WINDOW_MS)
  if (arr.length >= RL_MAX) {
    rateBucket.set(ip, arr)
    return false
  }
  arr.push(now)
  rateBucket.set(ip, arr)
  return true
}

export default async function handler(req, res) {
  await ensureDb()
  const db = await getDb()

  if (req.method === 'GET') {
    const { rows } = await db.execute(`
      SELECT name, store_id AS storeId, module_id AS moduleId, module_title AS moduleTitle,
             score, total, percent, date, timestamp
      FROM results ORDER BY name, timestamp DESC
    `)
    return res.json(rows)
  }

  if (req.method === 'POST') {
    const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket?.remoteAddress
    if (!rateLimit(ip)) {
      return res.status(429).json({ error: 'Příliš mnoho požadavků. Zkuste to za chvíli.' })
    }

    const errors = validateResult(req.body)
    if (errors.length > 0) {
      return res.status(400).json({ error: 'Neplatná data', details: errors })
    }
    const data = normalizeResult(req.body)

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
    return res.json({ ok: true })
  }

  res.status(405).end()
}
