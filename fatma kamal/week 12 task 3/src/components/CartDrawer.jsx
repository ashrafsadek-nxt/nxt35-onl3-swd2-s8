import React from "react";
import { useCart } from "../context/useCart";

export default function CartDrawer({ open, onClose }) {
  const { cart, total, removeFromCart, updateQty, clearCart } = useCart();

  if (!open) return null;

  return (
    <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg p-4 overflow-y-auto">
      <button onClick={onClose} className="mb-4 text-red-500 font-bold">
        ✖ Close
      </button>
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <div>
                <p>{item.name}</p>
                <p>${item.price} × {item.qty}</p>
              </div>
              <div>
                <button
                  onClick={() => updateQty(item.id, item.qty - 1)}
                  className="px-2"
                >
                  -
                </button>
                <button
                  onClick={() => updateQty(item.id, item.qty + 1)}
                  className="px-2"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-2 text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <hr className="my-2" />
          <p className="font-bold">Total: ${total}</p>
          <button
            onClick={clearCart}
            className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

