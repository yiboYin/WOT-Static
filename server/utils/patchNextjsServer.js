const logger = require('../lib/logger')

function patchNextjsServer(app) {
  const server = app.server
  if (server) {
    const _renderErrorToResponse = server.renderErrorToResponse.bind(server)
    server.renderErrorToResponse = (context, err) => {
      if (err) {
        logger.error('next_render_error', err)
      }

      return _renderErrorToResponse(context, err)
    }
  } else {
    logger.warn(
      'next_render_error',
      'Failed to patch renderErrorToResponse for Next.JS, as app.server does not exist at this moment'
    )
  }

  return app
}

module.exports = patchNextjsServer