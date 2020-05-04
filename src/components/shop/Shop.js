import React, { useState } from "react";
import fakeData from "../../fakeData/";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";


const Shop = () => {
  const firstTen = fakeData.slice(0, 10);

  const [products, setProducts] = useState(firstTen);

  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };



  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((x) => (
          <Product
            key={Math.floor(Math.random() * 1000)}
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
