import React from "react";

export default function Card({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        width: "200px",
        margin: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
