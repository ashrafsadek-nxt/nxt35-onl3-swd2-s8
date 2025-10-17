import React from "react";
import { useCart } from "../context/useCart";

export default function Navbar({ onCartClick }) {
  const { itemsCount } = useCart();

  return (
    <nav className="flex justify-between p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">My Shop</h1>
      <button onClick={onCartClick} className="relative">
        🛒
        {itemsCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 rounded-full px-2 text-sm">
            {itemsCount}
          </span>
        )}
      </button>
    </nav>
  );
}
