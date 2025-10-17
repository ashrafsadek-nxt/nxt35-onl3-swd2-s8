import React from "react";
import { useCart } from "../context/useCart";

const SAMPLE_PRODUCTS = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Headphones", price: 150 },
  { id: 3, name: "Mouse", price: 50 },
];

export default function ProductGrid() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {SAMPLE_PRODUCTS.map((p) => (
        <div key={p.id} className="border rounded p-4 shadow">
          <h2 className="font-bold">{p.name}</h2>
          <p>${p.price}</p>
          <button
            onClick={() => addToCart(p)}
            className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
