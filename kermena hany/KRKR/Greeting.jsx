import React from "react";

export default function Greeting({ name, onHello }) {
  return (
    <div>
      <h3>hello {name}</h3>
      <button onClick={() => onHello(name)}>Send</button>
    </div>
  );
}