const { pki, util: forgeUtil } = require('node-forge')
const { promisify } = require('util')
const flatten = require('flat')
const _ = require('lodash')

const rsa = pki.rsa
const promisifyGenerateKeyPair = promisify(rsa.generateKeyPair)

async function generateRSAKeyPair() {
  const originKeyPair = await promisifyGenerateKeyPair({ bits: 2048, workers: 2 })
  return {
    publicKey: pki.publicKeyToRSAPublicKeyPem(originKeyPair.publicKey),
    privateKey: pki.privateKeyToPem(originKeyPair.privateKey)
  }
}

function convertPemPublicKey(publicKeyPermFormat) {
  try {
    return pki.publicKeyFromPem(publicKeyPermFormat)
  } catch (error) {
    throw new Error(`Fail to convert RSA public key, due to: ${error.message}`)
  }
}

function encryptRSA(messageToEncrypted, publicKey) {
  try {
    const encryptedMessage = publicKey.encrypt(forgeUtil.encodeUtf8(messageToEncrypted), 'RSA-OAEP')
    return forgeUtil.encode64(encryptedMessage)
  } catch (error) {
    throw new Error(`Fail to encrypt, due to: ${error.message}`)
  }
}

function getHandlePaths(data = {}, fields) {
  const flattenPath = Object.keys(flatten(data))
  return _.filter(flattenPath, (value) => fields.some((field) => _.endsWith(value, field)))
}

const sharedHandleDataPatten = (fn) => (payload, fields, secret) => {
  if (_.isNil(payload)) {
    return payload
  }
  const data = _.cloneDeep(payload)
  const pathResult = getHandlePaths(data, fields)
  pathResult.forEach((field) => !_.isNil(_.get(data, field)) && _.update(data, field, (val) => fn(val, secret)))
  return data
}

function convertPemPrivateKey(privateKeyPermFormat) {
  try {
    return pki.privateKeyFromPem(privateKeyPermFormat)
  } catch (error) {
    throw new Error(`Fail to convert RSA private key, due to: ${error.message}`)
  }
}

function decryptRSA(encryptedText, privateKey) {
  try {
    const decryptedMessage = privateKey.decrypt(forgeUtil.decode64(encryptedText), 'RSA-OAEP')
    return forgeUtil.decodeUtf8(decryptedMessage)
  } catch (error) {
    throw new Error(`Fail to decrypt, due to: ${error.message}`)
  }
}

const decryptRSADataByFields = sharedHandleDataPatten(decryptRSA)

module.exports = {
  generateRSAKeyPair,
  convertPemPublicKey,
  convertPemPrivateKey,
  encryptRSA,
  decryptRSADataByFields
}
