import React from "react";

function Filter({ setFilteredCategory }) {
  return (
    <select onChange={(e) => setFilteredCategory(e.target.value)}>
      <option value="All">All</option>
      <option value="Electronics">Electronics</option>
      <option value="Toys">Toys</option>
      <option value="Home">Home</option>
      <option value="Accessories">Accessories</option>
    </select>
  );
}

export default Filter;
