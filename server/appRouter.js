const express = require('express')
const pageRouter = require('./router')
const bffRouter = require('./bff')
const handleError = require('./middlewares/handleError')

const appRouter = express.Router()

appRouter.use(express.urlencoded({ limit: '30mb', extended: true }))
appRouter.use(express.json({ limit: '30mb' }))

// appRouter.use('/', requestLog) //TODO

appRouter.use('/bff', bffRouter)

// appRouter.use('/m', mobileRouter) //TODO

appRouter.use(pageRouter)

appRouter.use(handleError())

module.exports = () => appRouter
