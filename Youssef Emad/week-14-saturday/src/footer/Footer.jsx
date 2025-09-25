import React from "react";
import "./Footer.css";
import image from "./fashionBag.jpeg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Left Links</p>
        <p>Left Links</p>
        <p>Left Links</p>
        <p>Left Links</p>
      </div>
      <div className="footer-center">
        <img src={image} alt="ads" />
      </div>
      <div className="footer-right">
        <p>Right Links</p>
        <p>Right Links</p>
        <p>Right Links</p>
        <p>Right Links</p>
      </div>
    </footer>
  );
}
