import { actionTypes } from './actionTypes'

export const initApp = (data: any) => ({ type: actionTypes.INIT_APP, data })

export const loadSecret = (req: any) => ({ type: actionTypes.LOAD_SECRET, req })

export const loadSecretSuccess = (data: any) => ({ type: actionTypes.LOAD_SECRET_SUCCESS, data })
