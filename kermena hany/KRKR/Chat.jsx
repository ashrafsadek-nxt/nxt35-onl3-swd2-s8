import React, { useState } from "react";

// 📨 محاكاة إرسال الرسالة للسيرفر
function fakeApiSend(text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.85) {
        resolve({ id: Date.now(), text });
      } else {
        reject(new Error("Failed to send"));
      }
    }, 800);
  });
}

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello chat 👋", status: "sent" },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  async function sendMessage(text) {
    const t = text.trim();
    if (!t) return;

    const tempId = "t" + Date.now();
    const optimistic = { id: tempId, text: t, status: "sending" };

    setMessages((prev) => [...prev, optimistic]);
    setInput("");
    setSending(true);

    try {
      const serverMsg = await fakeApiSend(t);

      setMessages((prev) =>
        prev.map((m) =>
          m.id === tempId ? { ...serverMsg, status: "sent" } : m
        )
      );
    } catch (err) {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === tempId ? { ...m, status: "failed" } : m
        )
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h3>4th useState Example – Chat</h3>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          width: "320px",
          margin: "20px auto",
          textAlign: "left",
        }}
      >
        {messages.map((m) => (
          <li
            key={m.id}
            style={{
              marginBottom: "10px",
              background:
                m.status === "failed"
                  ? "#ffe6e6"
                  : m.status === "sending"
                  ? "#fffbe6"
                  : "#e6ffe6",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
            }}
          >
            <strong>{m.text}</strong>{" "}
            <small style={{ color: "gray" }}>({m.status})</small>
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: "8px",
          width: "200px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          marginRight: "8px",
        }}
      />

      <button
        onClick={() => sendMessage(input)}
        disabled={sending}
        style={{
          padding: "8px 15px",
          borderRadius: "6px",
          backgroundColor: sending ? "#999" : "#007bff",
          color: "white",
          border: "none",
          cursor: sending ? "not-allowed" : "pointer",
        }}
      >
        {sending ? "Sending..." : "Send"}
      </button>
    </div>
  );
}
