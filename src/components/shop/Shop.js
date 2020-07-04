import React, { useState,useEffect } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import { Link } from "react-router-dom";


const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:4200/products')
    .then(res=>res.json())
    .then(res=>{
      setProducts(res);
    })
  },[])

  useEffect(()=>{
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    if(products.length){
      const previousCart = productKeys.map(existingKey=> {
        const product = products.find(x=> x.key === existingKey);
        product.quantity = savedCart[existingKey];
        return product;
      })
    setCart(previousCart);
    }
  },[products])

  const handleAddProduct = (product) => {
    const toBeAddedKey = product.key
    const sameProduct = cart.find(x=> x.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if(sameProduct){
      count= sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter(x=> x.key !== toBeAddedKey);
      newCart =[...others,sameProduct];
    }
    else{
      product.quantity = 1;
      newCart =[...cart,product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key,count);
  };



  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((x) => (
          <Product
            key={x.key}
            product={x}
            handleAddProduct={handleAddProduct}
            showAddToCart={true}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}> 
        <Link to="/review">
            <button className="cart-button review">Review Order</button>
        </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
