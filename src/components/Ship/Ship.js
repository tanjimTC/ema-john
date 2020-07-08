import React from "react";
import { useForm } from "react-hook-form";
import "./Ship.css";
import { useAuth } from "../Login/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {
  getDatabaseCart,
  clearLocalShoppingCart,
} from "../../utilities/databaseManager";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useState } from "react";

const Ship = () => {
  const auth = useAuth();
  const { register, handleSubmit, errors } = useForm();
  const [shipInfo, setShipInfo] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const stripePromise = loadStripe(
    "pk_test_51H2WPVJ0iICkOAizoTlJJ4ImEaEVMrGpN8CvR842BS0JoAxJ4v4a0seySHmZBffdQuwNSI5UGZiqcX8CSWFjRfQM00lHcTiPdI"
  );
  const onSubmit = (data) => {
    // TODO : move this after payment
    setShipInfo(data);
  };

  const handlePlaceOrder = (payment) => {
    const savedCart = getDatabaseCart();
    const orderDetail = {
      email: auth.user.email,
      cart: savedCart,
      shipment: shipInfo,
      payment: payment,
    };
    fetch("http://localhost:4200/placeOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderId(data._id);
        clearLocalShoppingCart();
        console.log("succssesful", orderDetail);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div
          style={{
            display: shipInfo && "none",
          }}
          className="col-md-6"
        >
          <h3 className="text-center mt-3 mb-5">Shipment Information</h3>

          <div className="form-outer">
            <div className="form-inner">
              <form className="formInput" onSubmit={handleSubmit(onSubmit)}>
                <input
                  name="name"
                  ref={register({ required: true })}
                  defaultValue={auth.user.name}
                  placeholder="Your Name"
                />
                {errors.name && <span>Name is required</span>}

                <input
                  name="email"
                  ref={register({ required: true })}
                  defaultValue={auth.user.email}
                  placeholder="Your Email"
                />
                {errors.email && <span>Email required</span>}

                <input
                  name="addressLine1"
                  ref={register({ required: true })}
                  placeholder="Your Address"
                />
                {errors.addressLine1 && <span>Address is required</span>}

                <input
                  name="phone"
                  ref={register({ required: true })}
                  placeholder="Your Phone Number"
                />
                {errors.phone && <span>Phone Number is required</span>}

                <input
                  name="city"
                  ref={register({ required: true })}
                  placeholder="Your City"
                />
                {errors.city && <span>City is required</span>}

                <input
                  name="country"
                  ref={register({ required: true })}
                  placeholder="Your Country"
                />
                {errors.country && <span>Country is required</span>}

                <input
                  name="zipcode"
                  ref={register({ required: true })}
                  placeholder="Your Zip code"
                />
                {errors.zipcode && <span>Zip code is required</span>}

                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
        <div
          style={{
            display: shipInfo ? "block" : "none",
          }}
          className="col-md-6"
        >
          <h3 className="text-center mt-3 mb-5">Payment Information</h3>
          <Elements stripe={stripePromise}>
            <CheckoutForm handlePlaceOrder={handlePlaceOrder} />
          </Elements>
          <br />
          {orderId && (
            <div>
              <h3>Thank you for shopping with us</h3>
              <p>Your order id is : {orderId}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ship;
