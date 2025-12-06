import React, { useState } from "react";
import Cart from "./cart"; 

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Headphones", price: 200 },
    { id: 3, name: "Smartphone", price: 800 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const itemInCart = cart.find((item) => item.id === product.id);
    if (itemInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const updateQuantity = (id, delta) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple React Shop</h1>

      {}
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: "10px" }}>
          {p.name} - ${p.price}
          <button style={{ marginLeft: "10px" }} onClick={() => addToCart(p)}>
            Add to Cart
          </button>
        </div>
      ))}

      {}
      <Cart
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
