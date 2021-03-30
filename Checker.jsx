import React from 'react'

function Checker({name}) {
    if(name==="Krishna"){
        throw new Error("Plz check your name")
    }
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Checker
