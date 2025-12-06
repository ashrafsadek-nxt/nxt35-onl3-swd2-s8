import React from "react";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "200px",
        background: "#f0f0f0",
        padding: "10px",
        height: "calc(100vh - 80px)", // 80px تقريبًا للناڤ + الفوتر
      }}
    >
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </aside>
  );
}
