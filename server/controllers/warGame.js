const warGameService = require('../services/warGameService')
const _ = require('lodash')
const { USER_INFO, ACCOUNT_ID, REGION } = require('../../constants/session')

const getAccountId = async (req, res) => {
  try {
    const { meta, data } = await warGameService.getAccountId(req)
    if (meta.count > 0) {
      const { region } = req.body
      _.set(req.session, USER_INFO, { [ACCOUNT_ID]: data[0]['account_id'], [REGION]: region })
    }
    return res.status(200).json(data)
  } catch (err) {
    throw new Error('Fail to get account id', err)
  }
}

const getSummary = async (req, res) => {
  try {
    const { data } = await warGameService.getSummary(req)
    return res.status(200).json(data)
  } catch (err) {
    throw new Error('Fail to get summary', err)
  }
}

const getProfileStatic = async (req, res) => {
  try {
    const result = await warGameService.getProfileStatic(req)
    return res.status(200).json(result)
  } catch (err) {
    throw new Error('Fail to get profile static', err)
  }
}

const getClanBattle = async (req, res) => {
  try {
    const result = await warGameService.getClanBattle(req)
    return res.status(200).json(result)
  } catch (err) {
    throw new Error('Fail to get clan battle', err)
  }
}

const getVehicleStatic = async (req, res) => {
  try {
    const result = await warGameService.getVehicleStatic(req)
    return res.status(200).json(result)
  } catch (err) {
    throw new Error('Fail to get vehicle static', err)
  }
}

module.exports = {
  getAccountId,
  getSummary,
  getProfileStatic,
  getClanBattle,
  getVehicleStatic
}
