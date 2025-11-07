import React from "react";
import "./Footer.css";
import photo from "./assets/4k-image-Enhanced-SR-1.png";

function Footer() {
  return (
    <footer className="footer">
      {/* Left List */}
      <ul className="footer-left">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      {/* Center Image */}
      <div className="footer-center">
        <img src={photo} alt="Logo" />
      </div>

      {/* Right List */}
      <ul className="footer-right">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </footer>
  );
}

export default Footer;
