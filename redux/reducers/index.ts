import _ from 'lodash'
import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import appReducer from './app'


const combinedReducer = combineReducers({
  app: appReducer,
})

export type RootState = ReturnType<typeof combinedReducer>

const rootReducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ..._.get(action, 'payload')
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}
export default rootReducer
