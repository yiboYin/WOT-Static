import { useCallback, useRef } from 'react'
import { useAnimate } from 'react-simple-animate';

interface IOptions {
    start?: Record<string, any>
    end?: Record<string, any>
    name: string
}



export default function useGenerateAnimation(options: IOptions[] = []) {
    const ref = useRef<(props:any)=>void>(useAnimate)
    const animationGeneration = useCallback(() => {
        const obj: Record<string, any> = {}
        for (let i = 0; i < options.length; i++) {
            const { name, ...restOptions } = options[i]
            obj[name] = ref.current.apply(null,[restOptions])
        }
        return obj
    }, [options])
    return animationGeneration()
}
