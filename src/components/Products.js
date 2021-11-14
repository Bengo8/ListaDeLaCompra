import OrderButton from "./OrderButton"
import Product from "./Product"

const Products = ({products, onDelete, onToggle, onOrder}) => {
    return (
        <>
            <OrderButton orderAction={onOrder}></OrderButton>
            <p className="advice">Doble click para marcar como comprado</p>
            {products.map((product, index) => (
                <Product key={index} product={product} onDelete={onDelete} onToggle={onToggle}></Product>
            ))}
        </>
    )
}

export default Products