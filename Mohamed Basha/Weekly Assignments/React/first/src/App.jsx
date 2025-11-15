import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Card from "./components/Card";

export default function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <main
          style={{
            flex: 1,
            padding: "20px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Card title="Card 1" description="This is card number 1" />
          <Card title="Card 2" description="This is card number 2" />
          <Card title="Card 3" description="This is card number 3" />
          <Card title="Card 4" description="This is card number 4" />
          <Card title="Card 5" description="This is card number 5" />
          <Card title="Card 6" description="This is card number 6" />
        </main>
      </div>
      <Footer />
    </div>
  );
}
