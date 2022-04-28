import { call, put } from 'redux-saga/effects'
import { createClient } from '../../lib/apiClient'
import { getSummaryInfo, getProfileStaticInfo, getVehicleStaticInfo } from '../actions'

export function* getSummary({ req }: any): any {
  try {
    const { data } = yield createClient(req).get('/wg/summary')
    yield put(getSummaryInfo.success(data))
  } catch (error) {
    yield put(getSummaryInfo.failure(error))
  }
}

export function* getProfileStatic({ req }: any): any {
  try {
    const { data } = yield createClient(req).get('/wg/profile-static')
    yield put(getProfileStaticInfo.success(data))
  } catch (error) {
    yield put(getProfileStaticInfo.failure(error))
  }
}

export function* getVehicleStatic({ req }: any): any {
  try {
    const { data } = yield createClient(req).get('/wg/profile-static')
    yield put(getVehicleStaticInfo.success(data))
  } catch (error) {
    yield put(getVehicleStaticInfo.failure(error))
  }
}

export function* updatePlayerData({ req }: any): any {
  try {
    yield call(getSummary, { req })
    yield call(getProfileStatic, { req })
    yield call(getVehicleStatic, { req })
  } catch (e) {
    // TODO
  }
}
