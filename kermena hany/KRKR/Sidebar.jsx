import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        <li><a href="#">link</a></li>
        <li><a href="#">link</a></li>
        <li><a href="#">link</a></li>
      </ul>

      <p className="sidebar-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Similique ullam aut ad pariatur nemo? Eius ipsam quam error nostrum eum quia assumenda hic aliquam deserunt maxime perferendis molestias, quis consectetur.
      </p>
    </aside>
  );
}

export default Sidebar;