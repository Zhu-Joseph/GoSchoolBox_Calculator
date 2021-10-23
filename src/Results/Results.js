import React, {useState} from 'react'
import useKey from '../useKey'
import Calculator from '../Calculator/Calculator'
import Memory from '../Memory/Memory'


export default function Results() {
    const [results, setResults] = useState(null)
    const [calculations, setCalculations] = useState("")
    const [memory, setMemory] = useState([])
    //USED TO CREATE AN ARRAY OF FUNCTIONS TO HANDLE KEYPRESS
    const functionArr = []

    function handleKey(number) {
        return function() {
            setCalculations(calculations.concat(number))
        }
    }

    function handleClick ({target}) {
        setCalculations(calculations.concat(target.value))
    }

    const listMemory = memory.map((mem, index) => {
        return (
            <Memory mem={mem} index={index}/>
        )
    })

    console.log(memory)

    //USED TO CREATE AN ARRAY TO LATER LOOP THROUGH AND CREATE BUTTONS AND FUNCTIONS
    const numbers = Array.from(Array(10).keys()).reverse()
    
    const listNumbers = numbers.map((number, index) => {
        functionArr[index] = handleKey(index)
        return (
        <Calculator 
        number={number}
        index={index}
        handleClick={handleClick}/>
        ) 
    })

    function handleClear() {
        setCalculations("")
    }

    function handleBackspace() {
        setCalculations(calculations.slice(0, -1))
    }

    const handleEquations = (event) => {
        
        const symbols = ["+", "-", "*", "/"]
        if(event.target.value) {
            if(symbols.some(letter => calculations.includes(letter))) {
                setCalculations(calculations.slice(0, -1).concat(event.target.value))
                }
                else {
                    setCalculations(calculations.concat(event.target.value))
                }
        } 

        else {
            if(symbols.some(letter => calculations.includes(letter))) {
                setCalculations(calculations.slice(0, -1).concat(event.key))
            }
            else {
                setCalculations(calculations.concat(event.key))
            }
        }
    }

    const handleEnter = (event) => {
        let answer = null

        if(calculations.includes("*")) {
            let temp = calculations.split("*")
            answer = Number(temp[0]) * Number(temp[1])
        }

        else if(calculations.includes("/")) {
            let temp = calculations.split("/")
            answer = Number(temp[0]) / Number(temp[1])
        }

        else if(calculations.includes("+")) {
            let temp = calculations.split("+")
            answer = Number(temp[0]) + Number(temp[1])
        }
        
        else if(calculations.includes("-")) {
            let temp = calculations.split("-")
            answer = Number(temp[0]) - Number(temp[1])
        }

        else {
            answer = Number(calculations)
        }

        setMemory(memory.concat(`${calculations} = ${answer}`))

        console.log(memory)
        setResults(answer)
        setCalculations("")
    }

    const handleDecimal = (event) => {        
        if(event.target.value) {
            if(calculations.includes(".")) {
                window.alert("Number is already in decimal format")
                }
                else {
                    setCalculations(calculations.concat(event.target.value))
                }
        } 

        else {
            if(calculations.includes(".")) {
                window.alert("Number is already in decimal format")
            }
            else {
                setCalculations(calculations.concat(event.key))
            }
        }
    }

    const handleSqr = (event) => {
        const answer = Number(calculations**2)
        setMemory(memory.concat(`${calculations}^2 = ${answer}`))

        setResults(answer)
        setCalculations("")
    }

    const handleSqrRoot = (event) => {
        const answer = Number(calculations**.5)
        setMemory(memory.concat(`${calculations}^2 = ${answer}`))

        setResults(answer)
        setCalculations("")
    }

    //HANDLE KEYBOARD FOR NUMBERS
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
    
    //HANDLE KEYBOARD FOR ARITHMETIC
    useKey("-", handleEquations)
    useKey("+", handleEquations)
    useKey("*", handleEquations)
    useKey("/", handleEquations)
    
    //HANDLE KEYBOARD FOR DECIMAL AND ENTER
    useKey(".", handleDecimal)
    useKey("=", handleEnter)
    useKey("Enter", handleEnter)

    //HANDLE DELETE AND BACKSPACES
    useKey("Delete", handleBackspace)
    useKey("Backspace", handleBackspace)




    return (
        <>
            <h1>Answer: {results}</h1>
            <input type="text" value={calculations} />
            <br/>
            <div>
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleBackspace}>C</button>  
                <button onClick={handleSqr}  value="&#178;">x&#178;</button>     
                <button onClick={handleSqrRoot} value="&#8730;">&#8730;</button>  
            </div>

            <button onClick={handleEquations} value="/">&divide;</button>
            <button onClick={handleEquations} value="*">&times;</button>                
            <button onClick={handleEquations} value="-">-</button>                
            <button onClick={handleEquations} value="+">+</button>                
            <button onClick={handleEnter}>=</button>
            <button onClick={handleEnter}>Enter</button>
            <button onClick={handleDecimal} value=".">.</button>


            <div className="numbers">
                {listNumbers}
            </div>  
            <h2>History</h2>
            <div>
                {listMemory}
            </div>         
        </>
    )
}
