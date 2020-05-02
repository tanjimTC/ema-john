import React from "react";
import "./Product.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, img, seller, price, stock } = props.product;
  console.log('sdslds',stock);
  return (
    <div className="product">
      <div className="product-image">
        <img src={img} alt="" />
      </div>
      <div className="product-desc">
        <h4 className="product-name">{name}</h4>
        <p>
          <b> Seller</b> :<small> {seller}</small>
        </p>
        <p>
          <b>Price</b> : ${price}
        </p>
        <p>
          only <b>{stock}</b> left in stock - order soon
        </p>
        <button
          onClick={() => props.handleAddProduct(props.product) } 
          className="cart-button"
        >
          <i className="fas fa-shopping-cart"> </i>
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
