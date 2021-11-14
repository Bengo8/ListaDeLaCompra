import { FaTimes } from 'react-icons/fa'

const Product = ({ product, onDelete, onToggle }) => {
    return (
        <div className={`product ${product.bought ? 'bought' : 'not-bought'}`} onDoubleClick= {() => onToggle(product.id)}>
            <h3>{product.text} 
                <FaTimes style={{ color: 'red', cursor: 'pointer' }} 
                onClick={() => onDelete(product.id)}></FaTimes>
            </h3>
            <p>{product.cat}</p>
        </div>
    )
}

export default Product;