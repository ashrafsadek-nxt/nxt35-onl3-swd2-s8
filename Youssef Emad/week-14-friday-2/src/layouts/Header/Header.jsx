import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>My Website</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
