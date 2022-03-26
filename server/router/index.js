const express = require('express')
const app = require('../app')
const setRSAKeyPairToSession = require('../middlewares/setRSAKeyPairToSession')

const router = express.Router()
const handleNextJSRequest = app.getRequestHandler()

router.use(setRSAKeyPairToSession)

router.get('/signin', async (req, res) => {
  app.render(req, res, '/demo')
})

router.get('*', (req, res) => {
  return handleNextJSRequest(req, res)
})

module.exports = router
