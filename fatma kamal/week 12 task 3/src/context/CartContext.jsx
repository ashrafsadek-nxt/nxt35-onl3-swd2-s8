import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();
export default CartContext;

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("cart_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart_v1", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product, qty = 1) {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + qty } : p
        );
      }
      return [...prev, { ...product, qty }];
    });
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  }

  function updateQty(productId, qty) {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, qty } : p))
    );
  }

  function clearCart() {
    setCart([]);
  }

  const total = cart.reduce((s, p) => s + p.price * p.qty, 0);
  const itemsCount = cart.reduce((s, p) => s + p.qty, 0);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    total,
    itemsCount,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}
