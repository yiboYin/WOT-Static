const warGameClient = require('../lib/fetch')

const getSummary = async (req, payload) => {
  const { data } = await warGameClient.get('/summary/?spa_id=586819105&battle_type=random', {})
  return data
}

const getProfileStatic = async (req, payload) => {
  // const { body } = await onboardServClient.customer.activateEmail(req, { payload })
  // return body
}

const getClanBattle = async (req, payload) => {
  // const { body } = await onboardServClient.customer.activateEmail(req, { payload })
  // return body
}

const getVehicleStatic = async (req, payload) => {
  // const { body } = await onboardServClient.customer.activateEmail(req, { payload })
  // return body
}

module.exports = {
  getSummary,
  getProfileStatic,
  getClanBattle,
  getVehicleStatic
}
