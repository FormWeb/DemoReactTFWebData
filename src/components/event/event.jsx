import { useEffect, useState } from "react"

const Event = () => {

    function handleClick() {
        console.log("Click")
    }

    function handleChange(e) {
        e.preventDefault()
        console.log(e.target.value)
    }

    return ( 
        <>
            <input onChange={handleChange}></input>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => console.log("Click 2")}>Click me</button>
        </>
    )
}

export default Event