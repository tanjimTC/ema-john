import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  console.log(cart);
  const totalPrice = cart.reduce((x, y) => {
    return x + y.price;
  }, 0);
  const totalShipping = cart.reduce((x, y) => {
    return x + y.shipping;
  }, 0);
  const totalBeforeTax = totalPrice + totalShipping;
  const TaxVat = totalPrice/20;
  const inTotal = totalBeforeTax+TaxVat;
  console.log("total price", totalPrice);
  return (
    <div> 
        {cart.length ?(
        <div className="cart">
        <h3>
          Order summary <i className="fas fa-shopping-cart"></i>
        </h3>
        <p>
          Items Ordered : <b>{cart.length}</b> <br />
          Price : ${totalPrice.toFixed(2)} <br />
          Shipping : ${totalShipping.toFixed(2)} <br />
          Total before tax : ${totalBeforeTax.toFixed(2)} <br/>
          Estimated Tax & Vat  : ${TaxVat.toFixed(2)} <br/>
        </p>
        <p className='inTotal'>Order Total : ${inTotal.toFixed(2)} </p>
      </div>
        ):(
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
