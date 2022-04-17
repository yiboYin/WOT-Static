const { handleBffError } = require('./handleBffError')
// const handleCsrfError = require('./handleCsrfError')  //TODO
// const handlePageError = require('./handlePageError')  //TODO

module.exports = () => (err, req, res, next) => {
  if (res.statusCode === 403 && err.message.startsWith('CSRF token')) {
    // return handleCsrfError(err, req, res, next)
  } else if (/^\/(bff|m)(\/|$)/i.test(req.url)) {
    return handleBffError(err, req, res, next)
  } else {
    // return handlePageError(err, req, res, next)
  }
}
