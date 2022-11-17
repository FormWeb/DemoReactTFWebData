const CounterButton = (props) => {

    const { incr } = props
    const { onIncrement, onReset } = props

    const handleIncrement = () => {
        onIncrement(incr)
    }

    const handleReset = () => {
        onReset()
    }

    return (
        <>
            <button onClick={handleIncrement}>+ {incr}</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default CounterButton