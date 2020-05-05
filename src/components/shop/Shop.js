import React, { useState } from "react";
import fakeData from "../../fakeData/";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart } from "../../utilities/databaseManager";


const Shop = () => {
  const firstTen = fakeData.slice(0, 10);

  const [products, setProducts] = useState(firstTen);

  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    const sameProduct = newCart.filter(x=> x.key === product.key);
    const sameProductLength = sameProduct.length;
    addToDatabaseCart(product.key,sameProductLength);
  };



  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((x) => (
          <Product
            key={x.key}
            product={x}
            handleAddProduct={handleAddProduct}
            showAddToCart={true}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}/>
      </div>
    </div>
  );
};

export default Shop;
