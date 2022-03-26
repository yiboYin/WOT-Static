import { useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import { IReduxState } from '../../redux/types'
import { convertPemPublicKey, encryptRSA } from 'Shared/crypto'

function useRSAEncrypt() {
  const rsaPublicKey = useSelector((state: IReduxState) => state.app.rsaPublicKey)
  const decodedRSAPublicKey = useMemo(() => {
    if (!rsaPublicKey) {
      return null
    }
    return convertPemPublicKey(rsaPublicKey)
  }, [rsaPublicKey])

  const rsaEncryptData = useCallback(
    (data?: string) => {
      if (_.isNil(data)) {
        return data
      }
      return decodedRSAPublicKey ? encryptRSA(data, decodedRSAPublicKey) : data
    },
    [decodedRSAPublicKey]
  )

  return { rsaEncryptData, rsaPublicKey: decodedRSAPublicKey }
}

export default useRSAEncrypt
