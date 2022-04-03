const {
  WOT_STATISITCS_URL,
  WOT_STATISITCS_APP_ID,
  WOT_STATISITCS_API
} = require('../../constants/wotStatisticsReqInfo')
const { myFetch } = require('../utils/fetch')

const getAccountId = async (req, payload) => {
  const {
    body: { region, accountName }
  } = req
  const reqUrl = `${WOT_STATISITCS_URL}.${region}${WOT_STATISITCS_API['getAccountId']}?application_id=${WOT_STATISITCS_APP_ID}&search=${accountName}&type=exact`
  const response = await myFetch(reqUrl)
  return response
}

module.exports = {
  getAccountId
}
