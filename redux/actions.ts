import { actionTypes, REQUEST, SUCCESS, FAILURE } from './actionTypes'

export const initApp = (data: any) => ({ type: actionTypes.INIT_APP, data })

export const loadPlayer = (req: any) => ({ type: actionTypes.LOAD_PLAYER, req })

export const getSummaryInfo = {
  request: (req?: any) => ({ type: actionTypes.GET_SUMMARY_INFO[REQUEST], req }),
  success: (data: any) => ({ type: actionTypes.GET_SUMMARY_INFO[SUCCESS], data }),
  failure: (error?: any) => ({ type: actionTypes.GET_SUMMARY_INFO[FAILURE], error })
}

export const getProfileStaticInfo = {
  request: (req?: any) => ({ type: actionTypes.GET_PROFILE_STATIC[REQUEST], req }),
  success: (data: any) => ({ type: actionTypes.GET_PROFILE_STATIC[SUCCESS], data }),
  failure: (error?: any) => ({ type: actionTypes.GET_PROFILE_STATIC[FAILURE], error })
}

export const getVehicleStaticInfo = {
  request: (req?: any) => ({ type: actionTypes.GET_VEHICLE_STATIC[REQUEST], req }),
  success: (data: any) => ({ type: actionTypes.GET_VEHICLE_STATIC[SUCCESS], data }),
  failure: (error?: any) => ({ type: actionTypes.GET_VEHICLE_STATIC[FAILURE], error })
}
