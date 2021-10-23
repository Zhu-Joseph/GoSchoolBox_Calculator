import React from 'react'

export default function Calculator(props) {
    const {number, index, handleClick} = props

    //TO REMOVE EXTRA BUTTON BEING PRODUCED
    if(number === undefined) return null 

    return (
        <button key={index} onClick={handleClick} value={number}>{number}</button>
    )
}
