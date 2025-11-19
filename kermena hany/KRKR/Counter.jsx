import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);
  const [name, setName] = useState("aly");
  const [num, setNum] = useState([10, 20, 30]);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h3>First useState Example</h3>

      {/* 🔹 الجزء الأول: count */}
      <h4>{count}</h4>
      <div>
        <button onClick={() => setCount(c => c + 1)}>+1</button>
        <br />
        <button onClick={() => setCount(0)}>Reset</button>
        <br />
        <button onClick={() => setCount(c => c - 1)}>-1</button>
      </div>

      <hr />

      {/* 🔹 الجزء الثاني: name */}
      <h4>{name}</h4>
      <div>
        <button onClick={() => setName(n => n + "1")}>+1</button>
        <br />
        <button onClick={() => setName("aly")}>Reset</button>
        <br />
        <button onClick={() => setName(n => n + " ahmed")}>-1</button>
      </div>

      <hr />

      {/* 🔹 الجزء الثالث: num */}
      <h4>{num.join(", ")}</h4>
      <div>
        <button onClick={() => setNum(arr => [...arr, arr[arr.length - 1] + 10])}>
          Add Number
        </button>
        <br />
        <button onClick={() => setNum([10, 20, 30])}>Reset</button>
        <br />
        <button onClick={() => setNum(arr => arr.filter(n => n === 10))}>
          Get 10
        </button>
        {/* كود المهام الجديد */}
<div style={{ marginTop: "40px" }}>
  <h3>Third useState Example</h3>

  <input
    type="text"
    placeholder="Enter new task..."
    style={{
      padding: "8px",
      width: "250px",
      marginRight: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
    }}
  />

  <button
    style={{
      padding: "8px 15px",
      borderRadius: "6px",
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      cursor: "pointer",
    }}
  >
    Save Task
  </button>

  <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
    <li
      style={{
        marginBottom: "10px",
        background: "#f9f9f9",
        padding: "10px",
        borderRadius: "6px",
        width: "300px",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <label>
        <input type="checkbox" style={{ marginRight: "8px" }} />
        Example Task
      </label>
      <button
        style={{
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </li>
  </ul>
</div>
      </div>
    </div>
  );

}

export default Counter;