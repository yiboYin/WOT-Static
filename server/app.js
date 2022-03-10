const next = require('next')
const dev = process.env.NODE_ENV === 'development'
const app = next({ dev, customServer: true })

module.exports = app