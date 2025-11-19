import React from "react";
import Y from "./Y";

export default function X() {
  const d = [1, 2, 3];
  return (
    <div>
      <h3>ssssss</h3>
      {d.map((num, i) => (
        <Y key={i} data={num} />
      ))}
    </div>
  );
}