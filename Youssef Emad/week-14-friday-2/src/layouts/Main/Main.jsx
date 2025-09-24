import React from "react";
import "./main.css";
import Card from './Card.jsx';


export default function Main() {
  return (
    <main className="main">
      <h2>Welcome to My Website</h2>
      <p>This is the main content area. Add whatever you want here.</p>
      <Card title="First Card" description="This is the first card." />
      <Card title="Second Card" description="This is the second card." />
      <Card title="Third Card" description="This is the third card." />
    </main>
  );
}
