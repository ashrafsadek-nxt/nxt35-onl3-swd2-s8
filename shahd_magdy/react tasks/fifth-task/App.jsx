import React, { useState } from "react";
import Product from "./Prop/Prop-task/Product";
import Message from "./Prop/Prop-task/Message";
import Cart from "./Prop/Prop-task/Cart";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleBuy = (itemName) => {
    setCartCount(cartCount + 1);
    setMessage(`تم شراء ${itemName} بنجاح!`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>المتجر</h1>
      <Cart count={cartCount} />
      <Message text={message} />
      <Product onBuy={handleBuy} />
    </div>
  );
}

export default App;