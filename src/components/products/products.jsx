import ProductsItem from "./products-item"

const Products = (props) => {

    const { products } = props

    const productsJSX = products.map(
        //(elem) => <ProductsItem key={elem.id} id={elem.id} name={elem.name}/>
        (elem) => <ProductsItem key={elem.id} {...elem}/>
    )

    return (
        <ul>
            {productsJSX}
        </ul>
    )
}

export default Products