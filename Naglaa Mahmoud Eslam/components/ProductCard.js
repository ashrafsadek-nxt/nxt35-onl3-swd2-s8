import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p className="price">${product.price}</p>
    </div>
  );
}

export default ProductCard;
