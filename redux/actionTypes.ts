export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

function createRequestTypes(base: any) {
  if (!base) {
    throw new Error("cannot create request type with base = '' or base = null")
  }
  return [REQUEST, SUCCESS, FAILURE].reduce((acc: any, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export const actionTypes = {
  LOAD_SECRET: 'LOAD_SECRET',
  LOAD_SECRET_SUCCESS: 'LOAD_SECRET_SUCCESS',
  INIT_APP: 'INIT_APP',
  LOAD_PLAYER: 'LOAD_PLAYER',
  GET_SUMMARY_INFO: createRequestTypes('GET_SUMMARY_INFO'),
  GET_PROFILE_STATIC: createRequestTypes('GET_PROFILE_STATIC'),
  GET_VEHICLE_STATIC: createRequestTypes('GET_VEHICLE_STATIC')
}
