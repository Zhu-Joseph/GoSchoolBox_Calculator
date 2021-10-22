import React, {useState, useEffect, useRef} from 'react'
import useKey from "../useKey"
import "./Calculator.css"

export default function Calculator(props) {
    const {number, index} = props

    //USED TO CREATE AN ARRAY OF FUNCTIONS TO HANDLE KEYPRESS
    const functionArr = []

    function handleKey(number) {
        return function() {
            console.log(number)
        }
    }

    //USED TO CREATE AN ARRAY TO LATER LOOP THROUGH AND CREATE BUTTONS AND FUNCTIONS
    const numbers = Array.from(Array(10).keys()).reverse()
    
    const listNumbers = numbers.map((number, index) => {
        functionArr[functionArr.length] = handleKey(index)
        return <button>{number}</button> 
    })   

    return (
        <>
        <form>
            <button>{number}</button>
            <div className="functions">
                {/* <button onKeyPress={handleKeyPress}>1</button> */}
    
            </div>
            {/* <div className="numpad">
                {listNumbers}
            </div> */}
        </form>  
        </>
    )
}
