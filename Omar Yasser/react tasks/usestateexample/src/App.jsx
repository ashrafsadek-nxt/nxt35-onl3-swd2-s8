import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleJoin = () => {
    setCount(count + 1);
  };

  const handleLeave = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <h2>Lecture Attendance</h2>
      <p>Number of students in the lecture: {count}</p>
      <button onClick={handleJoin} style={{ marginRight: "10px" }}>
        Join Lecture
      </button>
      <button onClick={handleLeave}>Leave Lecture</button>
    </div>
  );
}

export default App;
