import React, { useState, useEffect } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
  processOrder,
} from "../../utilities/databaseManager";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";
import happyImage from "../../images/giphy.gif";
import { Link } from "react-router-dom";
import { useAuth } from "../Login/useAuth";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const auth = useAuth()

  const removeProduct = (productKey) => {
    const newCart = cart.filter((x) => x.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  const handlePlaceOrder = () => {
    setCart([]);
    setOrderPlaced(true);
    processOrder();
  };

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productsKeys = Object.keys(savedCart);
    fetch('http://localhost:4200/getProductByKey',{
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productsKeys)
    })
    .then(res=>res.json())
    .then(data=>{
      const cartProduct = productsKeys.map((key) => {
        const product =data.find((x) => x.key === key);
        product.quantity = savedCart[key];
        return product;
      });
    setCart(cartProduct);
    })
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((x) => (
          <ReviewItem key={x.key} product={x} removeProduct={removeProduct} />
        ))}
        {orderPlaced ? (
          <center>
            <h2>Order Placed Successfully!!</h2>
            <img src={happyImage} alt="" />
          </center>
        ) : (
          ""
        )}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to='/ship'>
            {auth.user ?<button className="cart-button review">Proceed checkout</button>:
            <button className="cart-button review">Login to Proceed</button>}
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
