const isNextInternalRequest = (req) => {
  const { path } = req
  return path && (path.startsWith('/_next/') || path.startsWith('/_nextjs_'))
}

module.exports = {
  isNextInternalRequest
}
