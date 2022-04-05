import { useState, Dispatch, SetStateAction, useCallback } from 'react'
import useUnmountedRef from './useUnmountedRef'

function useSafeState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>]

// eslint-disable-next-line no-redeclare
function useSafeState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>]

// eslint-disable-next-line no-redeclare
function useSafeState(initialState?: any) {
  const unmountedRef = useUnmountedRef()
  const [state, setState] = useState(initialState)
  const setCurrentState = useCallback((currentState: any) => {
    if (unmountedRef.current) return
    setState(currentState)
  }, [])

  return [state, setCurrentState]
}

export default useSafeState
