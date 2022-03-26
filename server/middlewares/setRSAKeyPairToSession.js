const _ = require('lodash')
const { isNextInternalRequest } = require('../utils/req')
const { RSA_STORE, PRIVATE_KEY, PUBLIC_KEY } = require('../../constants/session')
const { generateRSAKeyPair } = require('../../shared/crypto')
const logger = require('../lib/logger')

async function getRSAKeyPair() {
  try {
    const forgeKeyPair = await generateRSAKeyPair()
    return { ...forgeKeyPair }
  } catch (error) {
    throw new Error(`Fail to generate RSA key pair, due to: ${error.message}`)
  }
}

async function setRSAKeyPairToSession(req, res, next) {
  if (
    isNextInternalRequest(req) ||
    (_.has(req.session, `${RSA_STORE}.${PUBLIC_KEY}`) && _.has(req.session, `${RSA_STORE}.${PRIVATE_KEY}`))
  ) {
    return next()
  }
  const { publicKey, privateKey } = await getRSAKeyPair()
  logger.info('RSA key pair created')
  _.set(req.session, RSA_STORE, { [PUBLIC_KEY]: publicKey, [PRIVATE_KEY]: privateKey })
  return next()
}

module.exports = setRSAKeyPairToSession
