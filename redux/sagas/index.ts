import { all, takeLatest } from 'redux-saga/effects'
import { actionTypes } from '../actionTypes'
import { initSecret } from './init'

// import es6promise from 'es6-promise'

// es6promise.polyfill()


function * rootSaga() {
  yield all([
    takeLatest(actionTypes.LOAD_SECRET, initSecret),
  ])
}

export default rootSaga