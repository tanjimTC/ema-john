import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import { useState } from "react";

const ProductDetails = () => {
  const { productKey } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4200/product/" + productKey)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [productKey]);
  return <div>{product && <Product product={product} />}</div>;
};

export default ProductDetails;
