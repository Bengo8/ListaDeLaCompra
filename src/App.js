import Header from "./components/Header";
import Products from "./components/Products";
import { useState } from "react"
import { AddProduct } from "./components/AddProduct";
import ProductsService from "./services/ProductsService";


const productsSrvc = new ProductsService();
function App() {
  
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState(productsSrvc.getProducts())

  // Add Product
  const addProduct = (prod) => {
    const newProd = productsSrvc.addNewProduct(prod)
    setProducts([...newProd]);
  };
  
  // Delete Product
  const deleteProduct = (id) => {
    const newProducstList = productsSrvc.deleteProduct(id)
    setProducts([...newProducstList]);
  };

  // Toggle bought
  const toggleBought = (id) => {
    const newProducts = productsSrvc.toggleBought(id);
    setProducts([...newProducts])
  }

  // Order Products
  const orderProducts = (order) => {
    let productsOrdered = productsSrvc.orderProducts(order);

    if (productsOrdered !== null && productsOrdered !== undefined) {
      setProducts([...productsOrdered]);
    }
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddProduct(!showAddProduct)} active={showAddProduct}></Header>
      {showAddProduct && <AddProduct onAdd={addProduct}></AddProduct>}
      {products.length > 0 ? (
        <Products products={products}
        onDelete={deleteProduct}
        onToggle={toggleBought}
        onOrder={orderProducts}></Products>
        ) : (
          'No hay poductos para mostrar'
        )}
      
    </div>
  );
}

export default App;
