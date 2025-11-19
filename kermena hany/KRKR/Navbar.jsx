import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/fashionlogo.jpg";

function Navbar() {
  return (
    <div className="navbar">
      {/* الجزء اليسار */}
      <div className="nav-left">
        <a href="#" className="logo-link">
          <img src={logo} alt="logo" className="logo" />
          <span className="brand">Fashion</span>
        </a>
      </div>

      {/* السيرش في النص */}
      <div className="nav-center">
        <div className="search-box">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-btn">Search</button>
        </div>
      </div>

      {/* الروابط على اليمين */}
      <div className="nav-right">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;