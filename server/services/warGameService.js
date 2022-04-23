const warGameClient = require('../lib/fetch')
const {
  WARGAME_API_BASE_URL,
  WARGAME_BASE_URL,
  WOT_STATISITCS_APP_ID,
  WOT_STATISITCS_API
} = require('../../constants/wotStatisticsReqInfo')
const _ = require('lodash')
const { USER_INFO } = require('../../constants/session')

const getAccountId = async (req, payload) => {
  const { region, accountName } = req.body
  const reqUrl = `${WARGAME_API_BASE_URL}.${region}${WOT_STATISITCS_API['getAccountId']}?application_id=${WOT_STATISITCS_APP_ID}&search=${accountName}&type=exact`
  const { data } = await warGameClient.get(reqUrl, {})
  return data
}

const getSummary = async (req, payload) => {
  const userInfo = _.get(req.session, USER_INFO)
  const { region, accountId } = userInfo
  const reqUrl = `${WARGAME_BASE_URL}.${region}${WOT_STATISITCS_API['getSummary']}?spa_id=${accountId}&battle_type=random`
  const { data } = await warGameClient.get(reqUrl, {})
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
  getAccountId,
  getSummary,
  getProfileStatic,
  getClanBattle,
  getVehicleStatic
}
