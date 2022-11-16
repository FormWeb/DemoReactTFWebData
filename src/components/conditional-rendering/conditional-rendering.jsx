const ConditionalRendering = (props) => {

    const { msg, error } = props

    // if (error) {
    //     return <h3>Erreur</h3>
    // }

    return (
        <>
            {
            msg === "" ? (
                <h3>Pas de message</h3>
            ) : (
                <h3>{msg} {error && "Erreur"}</h3>
            )
            }
        </>
    )

}

export default ConditionalRendering