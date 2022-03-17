import { all, call, put, select } from 'redux-saga/effects'
import { loadSecretSuccess } from '../actions'


export function* initSecret({ req }: any) {
    const demoSecret = "123"
    yield put(loadSecretSuccess(demoSecret))
}