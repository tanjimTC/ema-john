import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { useAuth } from "../Login/useAuth";

const Header = (props) => {
  const auth = useAuth();
  const handleSignOut =()=>{
    auth.signOut()
    .then(res=>{
      window.location.pathname ='/'
    })
  }
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <div>
          <a href="/shop">Shop</a>
          <a href="/review">Order Review</a>
          <a href="/inventory">Inventory</a>
        </div>
        {auth.user ? (
          <p style={{ color: "yellow"  }}>{auth.user.name}</p>
        ) : (
          <p style={{ color: "yellow" }}>
            {" "}
            <a href="/login">sign in</a>{" "}
          </p>
        )}

        <div className="search">
          {auth.user ? <button onClick={handleSignOut}>sign out</button> : ""}
        </div>
      </nav>
    </div>
  );
};

export default Header;
