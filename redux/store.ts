import { applyMiddleware, createStore, Store } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'
import rootReducer, { RootState } from './reducers'
import rootSaga from './sagas'

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export type RootStore = Store<RootState>

export const wrapper = createWrapper<RootStore>(makeStore, {
  debug: false,
  serializeState: (state) => JSON.stringify(state),
  deserializeState: (state) => JSON.parse(state)
})
