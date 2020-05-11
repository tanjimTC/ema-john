import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { name, img, quantity, key, price } = props.product;
  return (
    <div className="review-items-outer">
      <div className="review-items">
        <div className="head">
          <img  src={img} alt="" />
          <div className="side">
            <h4>{name}</h4>
            <p>
              <b>Quantity</b> : <b>{quantity}</b> <br /> <br />
              <b>Price</b> : <small>${price}</small>
              {/* <i className="ic fas fa-plus"></i> <i className="ic fas fa-minus"></i>  */}
            </p>
            <button
              onClick={() => props.removeProduct(key)}
              className="cart-button"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
