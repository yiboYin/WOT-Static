const _ = require('lodash')
const { USER_INFO, ACCOUNT_ID } = require('../../constants/session')
const { getAccountId } = require('../services/requestToWotStatistics')

exports.getAccountIdController = async (req, res) => {
  try {
    let Code = 'failed'
    let Msg = 'Fail to request to wot-statistics'
    const { region, accountName } = req.body
    const respData = await getAccountId(req)
    const {
      meta: { count = 0 },
      data
    } = respData
    if (count > 0) {
      Code = 'success'
      Msg = `Welcome, ${accountName}`
      _.set(req.session, USER_INFO, { [ACCOUNT_ID]: data[0][ACCOUNT_ID] })
    } else {
      Msg = `There is no matching account found in ${region}!`
    }
    return res.status(200).json({ Code, Msg })
  } catch (error) {
    throw new Error('Fail to get account id', error)
  }
}
