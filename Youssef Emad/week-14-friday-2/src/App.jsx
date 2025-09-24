
import "./App.css";
import React from "react";
import Header from "./layouts/Header/Header.jsx";
import Main from "./layouts/Main/Main.jsx";
import Footer from "./layouts/Footer/Footer.jsx";

export default function App() {
  return (
    <div className="app">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
