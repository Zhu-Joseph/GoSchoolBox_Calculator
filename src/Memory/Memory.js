import React from 'react'

export default function Memory(props) {
    const {mem, index} = props


    return (
        <div key={index}>
            {mem}
        </div>
    )
}
