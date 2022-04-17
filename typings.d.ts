declare module 'http' {
  import * as originHttp from 'http'
  interface IncomingMessage extends originHttp.IncomingMessage {
    session?: any
  }
}

declare module 'Shared/crypto' {
  import forge from 'node-forge'
  type rsaKeyTypes = forge.pki.rsa.PublicKey | forge.pki.rsa.PrivateKey
  type rsaEncryptFunc = (data: string, key: rsaKeyTypes) => string
  export const encryptRSA: rsaEncryptFunc
  export const convertPemPublicKey: importKeyFunc
}

declare module 'Shared/logger' {
  type logFun = (...msg: any[]) => void
  export const log: logFun
  export const info: logFun
  export const warn: logFun
  export const error: logFun
}
