import { useRef, useCallback } from 'react'

import useSafeState from './useSafeState'

export default function useAsync(func: (...args: any[]) => any, handleError?: (e: any) => any) {
  const [data, setData] = useSafeState<any>(null)
  const [loading, setLoading] = useSafeState<boolean>(false)
  const [error, setError] = useSafeState<null | Error>(null)
  const funcRef = useRef(func)
  funcRef.current = func
  const handleErrorRef = useRef(handleError)
  handleErrorRef.current = handleError

  const run = useCallback(async (...params: any[]) => {
    setError(null)
    setLoading(true)

    try {
      const data = await funcRef.current(...params)
      setData(data)
      return data
    } catch (e) {
      setError(e as Error)
      if (handleErrorRef.current) {
        handleErrorRef.current(e)
      }
    } finally {
      setLoading(false)
    }
  }, [])

  const reset = useCallback(() => {
    setData(null)
    setLoading(false)
    setError(null)
  }, [])

  return {
    run,
    loading,
    error,
    data,
    reset
  }
}
