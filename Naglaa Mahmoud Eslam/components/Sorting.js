import React from "react";

function Sorting({ setSortType }) {
  return (
    <select onChange={(e) => setSortType(e.target.value)}>
      <option value="none">Sort</option>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
    </select>
  );
}

export default Sorting;
