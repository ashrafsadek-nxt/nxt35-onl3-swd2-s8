import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
}
