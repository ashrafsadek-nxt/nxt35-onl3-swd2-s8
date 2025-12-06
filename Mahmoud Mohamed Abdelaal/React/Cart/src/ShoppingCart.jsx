import React from "react";

function ShoppingCart({ cart, updateQty, clearItem }) {
  const cartItems = Object.values(cart);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div
      style={{
        marginTop: "40px",
        padding: "20px",
        borderTop: "2px solid #333",
        borderRadius: "8px",
        background: "#fafafa",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", fontStyle: "italic" }}>
          Cart is empty
        </p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
              padding: "10px",
              background: "#e6e6e6",
              borderRadius: "6px",
            }}
          >
            <div>
              <strong>{item.name}</strong> - ${item.price} x {item.qty}
            </div>
            <div>
              <button
                onClick={() => updateQty(item.id, -1)}
                style={buttonStyle}
              >
                -
              </button>
              <button onClick={() => updateQty(item.id, 1)} style={buttonStyle}>
                +
              </button>
              <button
                onClick={() => clearItem(item.id)}
                style={{ ...buttonStyle, background: "#d32f2f" }}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      <h3 style={{ textAlign: "right", marginTop: "25px" }}>Total: ${total}</h3>
    </div>
  );
}

const buttonStyle = {
  marginLeft: "5px",
  padding: "5px 9px",
  border: "none",
  borderRadius: "4px",
  background: "#1976d2",
  color: "white",
  cursor: "pointer",
};

export default ShoppingCart;
