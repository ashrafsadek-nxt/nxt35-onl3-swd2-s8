import React, { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <Navbar onCartClick={() => setCartOpen(true)} />
      <ProductGrid />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </CartProvider>
  );
}
