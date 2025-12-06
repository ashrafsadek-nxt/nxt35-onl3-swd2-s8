import React from "react";

function Cart({ cart, updateQuantity, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          {item.name} - ${item.price} x {item.qty}
          <button onClick={() => updateQuantity(item.id, -1)}> - </button>
          <button onClick={() => updateQuantity(item.id, 1)}> + </button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;
