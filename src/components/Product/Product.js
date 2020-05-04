import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  console.log(props);
  const { name, img, seller, price, stock ,key } = props.product;
  return (
    <div className="product">
      <div className="product-image">
        <img src={img} alt="" />
      </div>
      <div className="product-desc">
        <h4 className="product-name"><Link to={`/product/${key}`}>{name}</Link></h4>
        <p>
          <b> Seller</b> :<small> {seller}</small>
        </p>
        <p>
          <b>Price</b> : ${price}
        </p>
        <p>
          only <b>{stock}</b> left in stock - order soon
        </p>
        {props.showAddToCart &&  <button
              onClick={() => props.handleAddProduct(props.product) } 
              className="cart-button"
            >
              <i className="fas fa-shopping-cart"> </i>
              add to cart
            </button>}
      </div>
    </div>
  );
};

export default Product;
