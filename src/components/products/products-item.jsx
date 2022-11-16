const ProductsItem = (props) => {

    const { id, name } = props

    return (
        <li>
            <h2>{id}</h2>
            <h3>{name}</h3>
        </li>
    )
}

export default ProductsItem