const request = require('request')
const _ = require('lodash')
const { USER_INFO, ACCOUNT_ID } = require('../../constants/session')
const {
  WOT_STATISITCS_URL,
  WOT_STATISITCS_APP_ID,
  WOT_STATISITCS_API
} = require('../../constants/wotStatisticsReqInfo')

exports.getAccountId = () => async (req, res) => {
  const {
    body: { region, accountName }
  } = req
  let reqUrl =
    WOT_STATISITCS_URL +
    '.' +
    region +
    WOT_STATISITCS_API['getAccountId'] +
    '?' +
    'application_id=' +
    WOT_STATISITCS_APP_ID +
    '&search=' +
    accountName
  let Code = 'failed'
  let Msg = 'Fail to request to wot-statistics'
  request(
    {
      url: reqUrl,
      method: 'GET',
      headers: { 'Content-Type': 'text/json' }
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const resData = JSON.parse(body)
        const {
          meta: { count = 0 },
          data
        } = resData
        if (count > 0) {
          Code = 'success'
          Msg = `Welcome, ${accountName}`
          _.set(req.session, USER_INFO, { [ACCOUNT_ID]: data[0][ACCOUNT_ID] })
        } else {
          Msg = `There is no matching account found in ${region}`
        }
      }
      return res.status(200).json({ Code, Msg })
    }
  )
}
