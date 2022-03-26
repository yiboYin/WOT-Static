const _ = require('lodash')
const { decryptRSADataByFields, convertPemPrivateKey } = require('../../shared/crypto')
const { PRIVATE_KEY, RSA_STORE } = require('../../constants/session')

exports.decryptRSAFields = (fields) => async (req, res, next) => {
  try {
    const { body } = req
    const privateKey = convertPemPrivateKey(_.get(req.session, `${RSA_STORE}.${PRIVATE_KEY}`))
    req.body = decryptRSADataByFields(body, fields, privateKey)
    return next()
  } catch (error) {
    throw new Error('Fail to decrypt', error)
  }
}
