import React, {useEffect, useRef} from 'react'

export default function useKey(key, eventKey) {
    const ref = useRef(eventKey)
    useEffect(() => {
        ref.current = eventKey
    })

    useEffect(() => {
        
        function handle(event) {
            if(event.key === key) {
                ref.current(event)
            }
        }
        document.addEventListener("keypress", handle)
        return () => document.removeEventListener("keypress", handle)
    }, [key])
}
