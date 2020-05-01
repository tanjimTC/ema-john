import React, { useState } from "react";
import fakeData from "../../fakeData/";
import "./Shop.css";
import Product from "../Product/Product";

const Shop = () => {
  const firstTen = fakeData.slice(0, 10);

  const [products, setProduts] = useState(firstTen);

  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    console.log("add clicked", product);
    const newCart = [...cart ,product ];
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
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h3>This is cart</h3>
        <h4>
          Order summary :<i class="fas fa-shopping-cart"></i> {cart.length}
        </h4>
      </div>
    </div>
  );
};

export default Shop;
