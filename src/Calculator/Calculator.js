import React, {useState, useEffect, useRef} from 'react'
import useKey from "../useKey"


export default function Calculator() {
    
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
        <form>
            <div className="numpad">
                {/* <button onKeyPress={handleKeyPress}>1</button> */}
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
            </div>
        </form>  
        </>
    )
}
