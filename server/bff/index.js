const express = require('express')
const { decryptRSAFields } = require('../middlewares/asymmetricDecryptFields')
const { getAccountIdController } = require('../controllers/getAccountIdController')

const router = express.Router()
const publicRouter = express.Router()
const privateRouter = express.Router()
// const request=require('request');

router.use(publicRouter)
router.use(privateRouter)

publicRouter.post('/signin', decryptRSAFields(['accountName']), getAccountIdController())

// Handle no route match under /bff
router.use((req, res) => {
  return res.status(404).end()
})

module.exports = router
