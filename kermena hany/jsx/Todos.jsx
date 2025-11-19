import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../features/todos/todosSLice";

function Todos() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h3>Tasks</h3>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />

      <button
        onClick={() => {
          if (text.trim()) {
            dispatch(addTodo(text));
            setText("");
          }
        }}
      >
        Add
      </button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => dispatch(toggleTodo(t.id))}
            />
            <span
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                marginRight: "10px",
              }}
            >
              {t.text}
            </span>
            <button onClick={() => dispatch(removeTodo(t.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;