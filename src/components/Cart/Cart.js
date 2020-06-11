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
                <b>{cart.length}</b>
              </div>
            </div>
            <div className="cart-summary-amount">
              <div className="items">Price :</div>
              <div className="price">
                <b>${totalPrice.toFixed(2)}</b>
              </div>
            </div>
            <div className="cart-summary-amount">
              <div className="items">Shipping :</div>
              <div className="price">
                <b>${totalShipping.toFixed(2)}</b>
              </div>
            </div>
            <div className="cart-summary-amount">
              <div className="items">Total before tax :</div>
              <div className="price">
                <b>${totalBeforeTax.toFixed(2)}</b>
              </div>
            </div>
            <div className="cart-summary-amount">
              <div className="items">Estimated Tax & Vat :</div>
              <div className="price">
                <b>${TaxVat.toFixed(2)} </b>
              </div>
            </div>
          </div>
          <p style={{display: 'block',  whiteSpace: 'nowrap'}} className="inTotal">Order Total : ${inTotal.toFixed(2)} </p>
          {props.children}
        </div>
      ) : (
        <div className="cart">
          <h3>
            Order summary <i className="fas fa-shopping-cart"></i>
          </h3>
          <p>
            Items Ordered : <b>{cart.length}</b> <br />
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
