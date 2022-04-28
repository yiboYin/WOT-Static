const express = require('express')
const { decryptRSAFields } = require('../middlewares/asymmetricDecryptFields')

const router = express.Router()
const publicRouter = express.Router()
const privateRouter = express.Router()
const warGameController = require('../controllers/warGame')
// const request=require('request');

router.use(publicRouter)
router.use(privateRouter)
require('./warGame')(publicRouter, privateRouter)

publicRouter.post('/signin', decryptRSAFields(['accountName']), warGameController.getAccountId)

// publicRouter.post('/signin', decryptRSAFields(['accountName']), async (req, res) => {
//   // TODO
//   return res.status(200).json({ data: 'success' })
// })

// Handle no route match under /bff
router.use((req, res) => {
  return res.status(404).end()
})

module.exports = router
