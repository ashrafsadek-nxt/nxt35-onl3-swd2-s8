import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import Sorting from "./components/Sorting";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Pink Headphones", price: 250, category: "Electronics" },
    { id: 2, name: "Soft Teddy Bear", price: 150, category: "Toys" },
    { id: 3, name: "Pastel Water Bottle", price: 80, category: "Home" },
    { id: 4, name: "Cute Phone Case", price: 50, category: "Accessories" },
  ]);

  const [filteredCategory, setFilteredCategory] = useState("All");
  const [sortType, setSortType] = useState("none");

  const filteredProducts = products
    .filter((p) =>
      filteredCategory === "All" ? true : p.category === filteredCategory
    )
    .sort((a, b) => {
      if (sortType === "asc") return a.price - b.price;
      if (sortType === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="container">
      <h1 className="title">🌸 Pastel Product Store</h1>
      <div className="controls">
        <Filter setFilteredCategory={setFilteredCategory} />
        <Sorting setSortType={setSortType} />
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
