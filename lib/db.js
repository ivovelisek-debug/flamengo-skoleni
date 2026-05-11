import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

// @libsql/client/web = pure JS/fetch, žádné nativní .node moduly → funguje na Vercel (Linux)
// @libsql/client     = nativní modul → jen pro lokální SQLite soubor
async function makeClient() {
  if (process.env.TURSO_DATABASE_URL) {
    const { createClient } = await import('@libsql/client/web')
    const url = process.env.TURSO_DATABASE_URL.trim().replace(/^libsql:\/\//, 'https://')
    return createClient({ url, authToken: process.env.TURSO_AUTH_TOKEN })
  }
  const { createClient } = await import('@libsql/client')
  const __dirname = dirname(fileURLToPath(import.meta.url))
  return createClient({ url: `file:${join(__dirname, '../data/results.db')}` })
}

let _db = null
export async function getDb() {
  if (!_db) _db = await makeClient()
  return _db
}

export async function initDb() {
  const db = await getDb()
  await db.execute(`
    CREATE TABLE IF NOT EXISTS results (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      name         TEXT    NOT NULL,
      module_id    INTEGER NOT NULL,
      module_title TEXT    NOT NULL,
      score        INTEGER NOT NULL,
      total        INTEGER NOT NULL,
      percent      INTEGER NOT NULL,
      date         TEXT    NOT NULL,
      timestamp    INTEGER NOT NULL,
      created_at   TEXT    DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(name, module_id)
    )
  `)
}
