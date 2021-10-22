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
        document.addEventListener("keydown", handle)
        return () => document.removeEventListener("keydown", handle)
    }, [key])
}

//USING KEYPRESS INSTEAD OF KEYDOWN WILL NOT WORK FOR BACKSPACE AND DELETE