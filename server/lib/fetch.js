const axios = require('axios')
const WARGAME_BASE_URL = 'http://worldoftanks.eu/wotup/profile'

const client = axios.create({
  baseURL: WARGAME_BASE_URL,
  withCredentials: true,
  timeout: 30 * 1000
})

client.interceptors.request.use(function (config) {
  const headers = Object.assign({}, config.headers)
  return { ...config, headers }
})

client.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.isAxiosError) {
      return Promise.reject(error)
    }
  }
)

module.exports = client
