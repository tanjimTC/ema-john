import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  const totalPrice = cart.reduce((x, y) => {
    const total = x + y.price * y.quantity;
    return total;
  }, 0);
  const totalShipping = cart.reduce((x, y) => {
    return x + y.shipping;
  }, 0);
  const totalBeforeTax = totalPrice + totalShipping;
  const TaxVat = totalPrice / 20;
  const inTotal = totalBeforeTax + TaxVat;
  return (
    <div>
      {cart.length ? (
        <div className="cart">
          <h3>
            Order summary <i className="fas fa-shopping-cart"></i>
          </h3>
          <div className="cart-summary">
            <div className="cart-summary-amount">
              <div className="items">Items Ordered :</div>
              <div className="price">
                {cart.length}
              </div>
            </div>
            <div className="cart-summary-amount">
              <div className="items">Price :</div>
              <div className="price">
                ${totalPrice.toFixed(2)}
              </div>
            </div>
            <div className="cart-summary-amount">
              <div className="items">Shipping :</div>
              <div className="price">
                ${totalShipping.toFixed(2)}
              </div>
            </div>
            <div className="cart-summary-amount">
              <div className="items">Total before tax :</div>
              <div className="price">
                ${totalBeforeTax.toFixed(2)}
              </div>
            </div>
            <div className="cart-summary-amount">
              <div className="items">Estimated Tax & Vat :</div>
              <div className="price">
                ${TaxVat.toFixed(2)} 
              </div>
            </div>
          </div>
          <p className="inTotal">Order Total : ${inTotal.toFixed(2)} </p>
          {props.children}
        </div>
      ) : (
        <div className="cart">
          <h3>
            Order summary <i className="fas fa-shopping-cart"></i>
          </h3>
          <p>
            Items Ordered : <b>{cart.length}</b> <br />
            {/* Price : {totalPrice} <br />
          Shipping : {totalShipping} <br />
          Total before tax : {totalBeforeTax} */}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
