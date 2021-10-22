import React, {useState} from 'react'
import useKey from '../useKey'
import Calculator from '../Calculator/Calculator'


export default function Results() {
    const initialCalc = { "number": 0 }
    const [calculations, setCalculations] = useState({...initialCalc})
    
    //USED TO CREATE AN ARRAY OF FUNCTIONS TO HANDLE KEYPRESS
    const functionArr = []

    function handleKey(number) {
        return function() {
            setCalculations({
                ...calculations,
                "number": number
                
            })
        }
    }
    console.log(calculations)

    //USED TO CREATE AN ARRAY TO LATER LOOP THROUGH AND CREATE BUTTONS AND FUNCTIONS
    const numbers = Array.from(Array(10).keys()).reverse()
    
    const listNumbers = numbers.map((number, index) => {
        functionArr[functionArr.length] = handleKey(index)
        return (
        <Calculator 
        number={number}
        index={index}/>
        ) 
    })

    console.log(calculations)

    useKey("0", functionArr[0])
    useKey("1", functionArr[1])
    useKey("2", functionArr[2])
    useKey("3", functionArr[3])
    useKey("4", functionArr[4])
    useKey("5", functionArr[5])
    useKey("6", functionArr[6])
    useKey("7", functionArr[7])
    useKey("8", functionArr[8])
    useKey("9", functionArr[9])

    return (
        <>
            <input type="number" value={calculations.number} />
            <br/>
            <button>Clear</button>
            <button>C</button>                
            <button>&divide;</button>
            <button>&times;</button>                
            <button>-</button>                
            <button>+</button>                
            <button>=</button>
            <button>x<sup>2</sup></button>     
            <button>&#8730;</button>           
            {listNumbers}
        </>
    )
}
