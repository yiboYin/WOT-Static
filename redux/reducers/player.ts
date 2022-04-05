import { AnyAction } from 'redux'
import { actionTypes, SUCCESS } from '../actionTypes'

const reducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.GET_SUMMARY_INFO[SUCCESS]:
      return {
        ...state,
        ...{ summary: action.data }
      }
    default:
      return state
  }
}

export default reducer
