const express = require('express')
const pageRouter = require('./router')

const appRouter = express.Router()

appRouter.use(express.urlencoded({ limit: '30mb', extended: true }))
appRouter.use(express.json({ limit: '30mb' }))

// appRouter.use('/', requestLog)  

// appRouter.use('/bff', bffRouter)

// appRouter.use('/m', mobileRouter)

appRouter.use(pageRouter)

module.exports = () => appRouter