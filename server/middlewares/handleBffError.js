const logger = require('../lib/logger')

exports.handleBffError = (err, req, res, next) => {
  logger.error(err.message || err.log, err)
  const status = err.status || 500
  const resData = {
    code: '9999',
    message: err.message
  }
  return res.status(status).json(resData)
}
