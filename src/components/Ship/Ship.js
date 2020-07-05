import React from "react";
import { useForm } from "react-hook-form";
import "./Ship.css";
import { useAuth } from "../Login/useAuth";
import { getDatabaseCart, processOrder } from "../../utilities/databaseManager";

const Ship = () => {
  const auth = useAuth();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    // TODO : move this after payment
    console.log(auth.user.email);
    const savedCart = getDatabaseCart();
    const orderDetail = { email: auth.user.email, cart: savedCart };
    fetch("http://localhost:4200/placeOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("order placed", data);
        alert(`your order id is :${data._id}. 
  please save your id for future query`);
        processOrder();
        window.location.pathname = "/shipped";
      });
  };

  return (
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
  );
};

export default Ship;
