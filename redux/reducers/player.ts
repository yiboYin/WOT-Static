import { AnyAction } from 'redux'
import { actionTypes, SUCCESS } from '../actionTypes'

const reducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.GET_SUMMARY_INFO[SUCCESS]:
      return {
        ...state,
        ...{ summary: action.data }
      }
    case actionTypes.GET_PROFILE_STATIC[SUCCESS]:
      return {
        ...state,
        ...{ profileStatic: action.data }
      }
    case actionTypes.GET_VEHICLE_STATIC[SUCCESS]:
      return {
        ...state,
        ...{ vehicleStatic: action.data }
      }
    default:
      return state
  }
}

export default reducer
