import React, { useState } from "react";
import MyCart from "./ShoppingCart.jsx";

function App() {
  const shopItems = [
    { id: "a1", name: "Tablet", price: 400 },
    { id: "b2", name: "Earbuds", price: 80 },
    { id: "c3", name: "Camera", price: 600 },
  ];

  const [cart, setCart] = useState({});

  const addItem = (product) => {
    setCart((prev) => {
      const existing = prev[product.id];
      return {
        ...prev,
        [product.id]: existing
          ? { ...existing, qty: existing.qty + 1 }
          : { ...product, qty: 1 },
      };
    });
  };

  const updateQty = (id, delta) => {
    setCart((prev) => {
      const item = prev[id];
      if (!item) return prev;
      const newQty = item.qty + delta;
      if (newQty <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: { ...item, qty: newQty } };
    });
  };

  const clearItem = (id) => {
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  return (
    <div
      style={{
        fontFamily: "Tahoma, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1>My Fancy Shop</h1>
        <p>Click to add products to your cart</p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
        }}
      >
        {shopItems.map((p) => (
          <div
            key={p.id}
            style={{
              padding: "15px",
              background: "#f0f0f0",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
            }}
          >
            <h3>{p.name}</h3>
            <p style={{ fontWeight: "bold" }}>${p.price}</p>
            <button
              onClick={() => addItem(p)}
              style={{
                padding: "7px 12px",
                border: "none",
                borderRadius: "5px",
                background: "#ff5722",
                color: "white",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      <MyCart cart={cart} updateQty={updateQty} clearItem={clearItem} />
    </div>
  );
}

export default App;
