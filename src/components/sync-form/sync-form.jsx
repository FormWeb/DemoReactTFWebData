import { useState } from "react"

const SyncForm = () => {

    const [input, setInput] = useState("")
    const [message, setMessage] = useState("bonjour")
    const [description, setDescription] = useState("")
    const [result, setResult] = useState("")

    const handleClick = (e) => {
        e.preventDefault()
        console.log(input)
        console.log(message)
        setResult("Resultat")

        // const salameche = {
        //     nom: "Salameche",
        //     type: "Feu",
        //     niveau: 12
        // }

        // const salameche2 = {
        //     nom: salameche.nom,
        //     type: salameche.type,
        //     niveau: 15
        // }

        // const sT = "secondType"

        // const salameche3 = {
        //     ...salameche,
        //     niveau: 16,
        //     [sT] : "Plante"
        // }

        // console.log(salameche)
        // console.log(salameche2)
        // console.log(salameche3)
    }

    return (
        <form>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
            <select value={message} onChange={(e) => setMessage(e.target.value)}>
                <option value="bonjour">Bonjour</option>
                <option value="aurevoir">Au revoir</option>
            </select>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <input type="text" value={result} readOnly></input>
            <button onClick={handleClick}>Click me</button>
        </form>
    )
}

export default SyncForm