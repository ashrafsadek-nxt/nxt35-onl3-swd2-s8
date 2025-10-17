import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // ملف ستايل لو هتستخدمي Tailwind أو CSS عادي

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
