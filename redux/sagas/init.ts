import { put } from 'redux-saga/effects'
import { loadSecretSuccess } from '../actions'

export function* initSecret({ req }: any) {
  const demoSecret = '123'
  yield put(loadSecretSuccess(demoSecret))
}
