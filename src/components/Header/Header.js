import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { useAuth } from "../Login/useAuth";

const Header = (props) => {
  const auth = useAuth();
  // const [query, setQuery] = useState("");
  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  // };
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   let ans = query;
  //   console.log(ans);
  // };
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
          <a href="/inventory">Manage Inventory</a>
        </div>

        {/* <div className="search">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="search..."
            />
            <button>Search</button>
          </form>
        </div> */}
        {auth.user ? (
          <p style={{ color: "yellow" }}>{auth.user.name}</p>
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
