import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div className="product-image">
            <img src={img} alt="" />
      </div>
      <div className="product-desc">
            <h4 className="product-name">{name}</h4>
            <br />
            <p>
            <small>{seller}</small>
            </p>
            <p>${price}</p>
            <p>only {stock} left in stock - order soon</p>
      </div>
    </div>
  );
};

export default Product;
