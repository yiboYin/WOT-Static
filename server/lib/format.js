const stringify = require('safe-stable-stringify')

const stringifyError = (err) => stringify(err, Object.getOwnPropertyNames(err))

const format = (msg) => {
  try {
    if (msg instanceof Error) {
      return stringifyError(msg)
    } else {
      return stringify(msg)
    }
  } catch (err) {
    return `Failed to format msg: ${err}`
  }
}

module.exports = format
