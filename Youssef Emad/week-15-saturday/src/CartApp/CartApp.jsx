import { useState, useEffect } from "react";

export default function CartApp() {
  // 🟢 Cart state
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage when component mounts
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [item, setItem] = useState("");

  // 🟢 Sync cart with localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  function addItem() {
    if (!item.trim()) return;
    setCart((prev) => [...prev, { id: Date.now(), name: item }]);
    setItem("");
  }

  // Remove item from cart
  function removeItem(id) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div>
      <h2>🛒 My Cart</h2>

      <input
        type="text"
        value={item}
        placeholder="Enter item..."
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addItem}>Add to Cart</button>

      <ul>
        {cart.map((p) => (
          <li key={p.id}>
            {p.name}
            <button onClick={() => removeItem(p.id)}>❌</button>
          </li>
        ))}
      </ul>

      <p>
        <b>Total items:</b> {cart.length}
      </p>
    </div>
  );
}
