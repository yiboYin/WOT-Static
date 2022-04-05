const warGameService = require('../services/warGameService')

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
  getSummary,
  getProfileStatic,
  getClanBattle,
  getVehicleStatic
}
