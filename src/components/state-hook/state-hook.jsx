import { useState } from "react"

const StateHook = () => {

    const [message, setMessage] = useState("Bonjour")

    function handleClick() {
        if (message === "Bonjour") {
            setMessage("Au revoir")
        }
        else {
            setMessage("Bonjour")
        }
    }

    function handleAdd() {
        setMessage(currentValue => currentValue + "a")
    }

    return (
        <>
            <h3>{message}</h3>
            <button onClick={handleClick}>Change me !</button>
            <button onClick={handleAdd}>Add "a"</button>
        </>
    )
}

export default StateHook