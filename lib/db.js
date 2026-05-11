import { createClient } from '@libsql/client'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

function makeClient() {
  if (process.env.TURSO_DATABASE_URL) {
    // Vercel serverless potřebuje https://, ne libsql:// (WebSocket)
    const url = process.env.TURSO_DATABASE_URL.replace(/^libsql:\/\//, 'https://')
    return createClient({ url, authToken: process.env.TURSO_AUTH_TOKEN })
  }
  const __dirname = dirname(fileURLToPath(import.meta.url))
  return createClient({ url: `file:${join(__dirname, '../data/results.db')}` })
}

export const db = makeClient()

export async function initDb() {
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
