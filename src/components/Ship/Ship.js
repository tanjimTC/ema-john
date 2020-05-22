import React from "react";
import { useForm } from "react-hook-form";
import "./Ship.css";
import { useAuth } from "../Login/useAuth";

const Ship = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const auth = useAuth();

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
            name="addressLine2"
            ref={register}
            placeholder="Your Address"
          />

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
