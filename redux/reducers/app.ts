import { AnyAction } from 'redux'
import { actionTypes } from '../actionTypes'


const reducer = (state: any = {}, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.LOAD_SECRET_SUCCESS:
            return {
                ...state,
                ...{ secret: action.data }
            }
        default:
            return state
    }
}

export default reducer


