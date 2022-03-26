import axios, { AxiosInstance, AxiosResponse } from 'axios'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const { bffBaseUrl } = publicRuntimeConfig

const BFF_BASE_URL: string = bffBaseUrl || '/bff'
// const DEFAULT_TIMEOUT = 30 * 1000 // 30 seconds
const client = axios.create({
  baseURL: BFF_BASE_URL,
  withCredentials: true
  // timeout: DEFAULT_TIMEOUT
})

client.interceptors.request.use(function (config) {
  const headers = Object.assign({}, config.headers)
  // do some logic if you want
  return { ...config, headers }
})
function responseInterceptor<T>(response: AxiosResponse<T>) {
  // do some logic if you want
  return response
}

client.interceptors.response.use(responseInterceptor, function (error) {
  if (error.isAxiosError) {
    if (error.response?.status === 401) {
      //   window.location.href = '/signin?error=sessionTimeout'   logout function
    }
    return Promise.reject(error)
  }
})

export const createClient = (req?: any): AxiosInstance => {
  if (req) {
    let headers: any = {}
    if (req.headers) {
      headers = Object.assign(headers, req.headers)
    }
    const axiosInstance = axios.create({
      baseURL: `http://localhost:8000${BFF_BASE_URL}`,
      withCredentials: true,
      // timeout: DEFAULT_TIMEOUT,
      headers
    })
    axiosInstance.interceptors.response.use(responseInterceptor, (error) => {
      return Promise.reject(error)
    })
    return axiosInstance
  } else {
    return client
  }
}

export default client
