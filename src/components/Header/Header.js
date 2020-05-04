import React,{useState} from "react";
import logo from "../../images/logo.png";
import "./Header.css";
const Header = (props) => {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSearch =(e)=>{
    console.log('haha');
    e.preventDefault()
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
      
        <div className="search">
          <form onSubmit={handleSearch}>
            <input type="text" value={query} onChange={handleChange} placeholder='search...'/>
            <button>Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
