import { all, takeLatest } from 'redux-saga/effects'
import { actionTypes } from '../actionTypes'
import { updatePlayerData } from './player'

// import es6promise from 'es6-promise'

// es6promise.polyfill()

function* rootSaga() {
  yield all([takeLatest(actionTypes.LOAD_PLAYER, updatePlayerData)])
}

export default rootSaga
