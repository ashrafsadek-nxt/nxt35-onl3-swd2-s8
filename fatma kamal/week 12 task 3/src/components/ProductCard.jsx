import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="border rounded-2xl p-4 shadow-sm flex flex-col">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.desc}</p>
      <div className="mt-auto flex items-center justify-between gap-3">
        <div>
          <div className="text-xl font-bold">{product.price.toFixed(2)} ج.م</div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
            className="w-16 text-center border rounded-md py-1"
          />

          <button
            onClick={() => addToCart(product, qty)}
            className="px-3 py-2 bg-black text-white rounded-lg shadow-sm"
          >
            أضف للعربة
          </button>
        </div>
      </div>
    </div>
  );
}
