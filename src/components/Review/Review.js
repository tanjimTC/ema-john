import React, { useState, useEffect } from "react";
import { getDatabaseCart } from "../../utilities/databaseManager";
import fakeData from "../../fakeData";

const Review = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productsKeys = Object.keys(saveCart);
    const cardProduct = productsKeys.map((key) => {
      const product = fakeData.find((x) => x.key === key);
      return product;
    });
    console.log(cardProduct);
  }, []);
  return <div></div>;
};

export default Review;
