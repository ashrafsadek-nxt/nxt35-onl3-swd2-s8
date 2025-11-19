import React, { useState } from "react";

function createInitialTodos() {
  return [
    { id: 1, text: "HTML Task", done: false },
    { id: 2, text: "CSS Task", done: false },
  ];
}

function TodoApp() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState("");

  // ➕ إضافة مهمة جديدة
  function addTodo() {
    const t = text.trim();
    if (!t) return;
    setTodos((prev) => [...prev, { id: Date.now(), text: t, done: false }]);
    setText("");
  }

  // ✅ تبديل حالة المهمة (تم / لم تتم)
  function toggleDone(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  // ❌ حذف مهمة
  function removeTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h3>Third useState Example</h3>

      {/* حقل الإدخال */}
      <input
        type="text"
        value={text}
        placeholder="Enter new task..."
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
          marginRight: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={addTodo}
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

      {/* عرض قائمة المهام */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((t) => (
          <li
            key={t.id}
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
            <label style={{ textDecoration: t.done ? "line-through" : "none" }}>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggleDone(t.id)}
                style={{ marginRight: "8px" }}
              />
              {t.id} - {t.text}
            </label>

            <button
              onClick={() => removeTodo(t.id)}
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
        ))}
      </ul>

    </div>
  );
}

export default TodoApp;