import React, {useState} from 'react'

export default function Results() {
    const [calculations, setCalculations] = useState(0)
    return (
        <input type="number" value={calculations} />
    )
}
