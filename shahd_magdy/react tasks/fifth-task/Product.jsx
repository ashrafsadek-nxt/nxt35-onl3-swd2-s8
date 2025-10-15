import React from "react";

function Product({ onBuy }) {
  return (
    <div>
      <h2>موبايل سامسونج</h2>
      <button onClick={() => onBuy("الموبايل")}>اشتري الآن</button>
    </div>
  );
}

export default Product;