// One-shot DB cleanup endpoint. Requires admin password.
// Deletes records matching known junk/security-probe patterns.
import { getDb, initDb } from '../lib/db.js'

const ADMIN_PASSWORD = 'flamengo1'

let ready = false
async function ensureDb() {
  if (!ready) { await initDb(); ready = true }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  if (req.headers['x-admin-password'] !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  await ensureDb()
  const db = await getDb()

  // Snapshot pre-cleanup count
  const before = await db.execute('SELECT COUNT(*) AS n FROM results')

  // Delete junk: too long, suspicious chars, known probe names
  let totalDeleted = 0
  const { rowsAffected } = await db.execute(`
    DELETE FROM results
    WHERE LENGTH(name) > 60
       OR name LIKE '%<%'
       OR name LIKE '%>%'
       OR name LIKE '%[object%'
       OR name LIKE '%script%'
       OR name LIKE '%alert%'
       OR name LIKE '%{%'
       OR name LIKE '%}%'
       OR name LIKE 'RateTest%'
       OR name LIKE 'Test Florista%'
       OR name LIKE 'Testovací%'
       OR name = 'Hacker Test'
       OR name = 'Test'
  `)
  totalDeleted += Number(rowsAffected ?? 0)

  // Optional: delete by specific names from request body { names: [...] }
  const names = Array.isArray(req.body?.names) ? req.body.names.filter(n => typeof n === 'string' && n.length > 0 && n.length <= 60) : []
  for (const n of names) {
    const result = await db.execute({ sql: 'DELETE FROM results WHERE name = ?', args: [n] })
    totalDeleted += Number(result.rowsAffected ?? 0)
  }

  const after = await db.execute('SELECT COUNT(*) AS n FROM results')

  res.json({
    deleted: totalDeleted,
    before: Number(before.rows[0].n),
    after: Number(after.rows[0].n),
  })
}
