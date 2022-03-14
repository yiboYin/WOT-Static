process.env.PORT = parseInt(process.env.PORT, 10) || 8000
// three party modules
require('ignore-styles')
require('express-async-errors')
const cookieParser = require('cookie-parser')
// lib modules
const logger = require('./lib/logger')
// main modules
const app = require('./app')
const patchNextjsServer = require('./utils/patchNextjsServer')
//root router
const appRouter = require('./appRouter')

async function startServer(server) {
    try {
        await app.prepare()

        // Patch Next.js server
        patchNextjsServer(app)

        // Hide server info for security.
        server.disable('x-powered-by')
        server.set('trust proxy', true)

        server.use(cookieParser())
        server.use(appRouter())
        server.use((req, res, next) => {
            const isHealthcheck = req.url.indexOf('/health') > -1
            if (isHealthcheck) {
                res.status(200).send('ok')
            } else {
                next()
            }
        })

        const port = process.env.PORT
        return server.listen(port, (err) => {
            if (err) throw err
            logger.info(`>>> Ready on http://localhost:${port}`)
        })
    } catch (error) {
        logger.error('Exit with 500', error)
        process.exit(1)
    }
}

module.exports = startServer
