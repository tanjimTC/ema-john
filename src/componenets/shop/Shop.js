import React, { useState } from "react";
import fakeData from "../../fakeData/";
import "./Shop.css";
import Product from "../Product/Product";

const Shop = () => {
  const firstTen = fakeData.slice(0, 10);

  const [products, setProduts] = useState(firstTen);

  return (
    <div className="shop-container">
      <div className="product-container">
        {
            products.map((x) =><Product product={x}></Product>)
        }
      </div>
      <div className="cart-container">
        <h5>I am cart</h5>
      </div>
    </div>
  );
};

export default Shop;
