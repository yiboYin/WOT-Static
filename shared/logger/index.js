/**
 * logger for both client and server
 */

const _log = () => {}

// by default logger logs nothing
let logger = {
  log: _log,
  error: _log,
  warn: _log,
  info: _log
}

if (process.env.NODE_ENV === 'development') {
  logger = console
}

// on sever side, logger is server/lib/logger
if (typeof window === 'undefined') {
  logger = require('../../server/lib/logger')
}

module.exports = logger
