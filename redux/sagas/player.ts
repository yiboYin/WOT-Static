import { call, put } from 'redux-saga/effects'
import { createClient } from '../../lib/apiClient'
import { getSummaryInfo } from '../actions'

export function* getSummary({ req }: any): any {
  try {
    const { data } = yield createClient(req).get('/wg/summary')
    yield put(getSummaryInfo.success(data))
  } catch (error) {
    yield put(getSummaryInfo.failure(error))
  }
}

export function* updatePlayerData({ req }: any): any {
  try {
    yield call(getSummary, { req })
  } catch (e) {
    // TODO
  }
}
