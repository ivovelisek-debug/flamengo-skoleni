// Strict input validation for /api/results POST.
// Returns an array of error strings, empty if input is valid.

// Allow Czech/Slovak letters, spaces, dashes, periods, apostrophes
const NAME_RE = /^[\p{L}\p{M}\s\-.']+$/u
// Store IDs: digits, letters, dash (e.g. "245", "245-A")
const STORE_RE = /^[A-Za-z0-9\-]+$/

export function validateResult(body) {
  const errors = []
  if (!body || typeof body !== 'object') return ['body must be an object']

  // name
  if (typeof body.name !== 'string') {
    errors.push('name must be string')
  } else {
    const name = body.name.trim()
    if (name.length < 2) errors.push('name too short')
    else if (name.length > 60) errors.push('name too long (max 60)')
    else if (!NAME_RE.test(name)) errors.push('name contains invalid characters')
  }

  // storeId (optional, but if present must be valid)
  if (body.storeId != null && body.storeId !== '') {
    if (typeof body.storeId !== 'string' && typeof body.storeId !== 'number') {
      errors.push('storeId must be string')
    } else {
      const sid = String(body.storeId).trim()
      if (sid.length > 10) errors.push('storeId too long (max 10)')
      else if (!STORE_RE.test(sid)) errors.push('storeId invalid format')
    }
  }

  // moduleId
  if (!Number.isInteger(body.moduleId) || body.moduleId < 1 || body.moduleId > 1000) {
    errors.push('moduleId must be int 1-1000')
  }

  // moduleTitle
  if (typeof body.moduleTitle !== 'string' || body.moduleTitle.length === 0 || body.moduleTitle.length > 100) {
    errors.push('moduleTitle must be string 1-100 chars')
  }

  // score
  if (!Number.isInteger(body.score) || body.score < 0 || body.score > 1000) {
    errors.push('score must be int 0-1000')
  }

  // total
  if (!Number.isInteger(body.total) || body.total < 1 || body.total > 1000) {
    errors.push('total must be int 1-1000')
  }

  // percent
  if (!Number.isInteger(body.percent) || body.percent < 0 || body.percent > 100) {
    errors.push('percent must be int 0-100')
  }

  // score <= total
  if (Number.isInteger(body.score) && Number.isInteger(body.total) && body.score > body.total) {
    errors.push('score cannot exceed total')
  }

  // date
  if (typeof body.date !== 'string' || body.date.length === 0 || body.date.length > 20) {
    errors.push('date must be string 1-20 chars')
  }

  // timestamp
  if (!Number.isInteger(body.timestamp) || body.timestamp < 1700000000000 || body.timestamp > 9999999999999) {
    errors.push('timestamp must be valid epoch ms')
  }

  return errors
}

// Normalize input after validation (trim, default values)
export function normalizeResult(body) {
  return {
    name: body.name.trim(),
    storeId: body.storeId ? String(body.storeId).trim() : null,
    moduleId: body.moduleId,
    moduleTitle: body.moduleTitle.trim(),
    score: body.score,
    total: body.total,
    percent: body.percent,
    date: body.date,
    timestamp: body.timestamp,
  }
}
