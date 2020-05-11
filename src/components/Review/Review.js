import React, { useState, useEffect } from "react";
import { getDatabaseCart, removeFromDatabaseCart ,processOrder} from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";

const Review = () => {
  const [cart, setCart] = useState([]);

  const removeProduct = (productKey) =>{
    const newCart = cart.filter(x=>x.key!==productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  }

  const handlePlaceOrder = ()=>{
    setCart([]);
    processOrder();
  }


  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productsKeys = Object.keys(savedCart);
    const cardProduct = productsKeys.map((key) => {
      const product = fakeData.find((x) => x.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cardProduct)
  }, []);
  return (
      <div className='shop-container'>
          <div className="product-container">
          {
            cart.map(x=><ReviewItem 
              key={x.key} 
              product={x}
              removeProduct={removeProduct}
              />)
          }
          </div>
          <div className="cart-container">
          <Cart cart={cart}>
            <button onClick={handlePlaceOrder} className="cart-button review">Place Order</button>
          </Cart>
          </div>
      </div>
    );
};

export default Review;
