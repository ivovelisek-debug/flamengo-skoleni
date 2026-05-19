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
       OR name = 'Hacker Test'
       OR name = 'Test'
  `)

  const after = await db.execute('SELECT COUNT(*) AS n FROM results')

  res.json({
    deleted: rowsAffected ?? 0,
    before: Number(before.rows[0].n),
    after: Number(after.rows[0].n),
  })
}
