import React, { useReducer } from "react";

const initialState = { mood: "" };

function reducer(state, action) {
  switch (action.type) {
    case "sad":
      return { mood: "Sad 😢" };
    case "ok":
      return { mood: "Okay 😐" };
    case "happy":
      return { mood: "Happy 😄" };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={styles.wrapper}>
      <div style={styles.box}>
        <h2 style={styles.title}>How do you feel?</h2>

        <div style={styles.moodRow}>
          <button
            style={styles.moodBtn}
            onClick={() => dispatch({ type: "sad" })}
          >
            <span style={styles.icon}>😢</span>
          </button>

          <button
            style={styles.moodBtn}
            onClick={() => dispatch({ type: "ok" })}
          >
            <span style={styles.icon}>😐</span>
          </button>

          <button
            style={styles.moodBtn}
            onClick={() => dispatch({ type: "happy" })}
          >
            <span style={styles.icon}>😄</span>
          </button>
        </div>

        {state.mood && (
          <div style={styles.result}>
            <p style={styles.resultText}>{state.mood}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#eef1f7",
  },
  box: {
    width: "320px",
    background: "#fff",
    padding: "25px",
    borderRadius: "18px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    fontSize: "20px",
    fontWeight: "600",
    color: "#333",
  },
  moodRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  moodBtn: {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    border: "none",
    background: "#f3f4f8",
    cursor: "pointer",
    fontSize: "28px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.25s",
  },
  icon: {
    transform: "scale(1)",
    transition: "0.25s",
  },
  result: {
    padding: "12px",
    background: "#f3f6ff",
    borderRadius: "10px",
    border: "1px solid #d6ddff",
  },
  resultText: {
    margin: 0,
    fontSize: "18px",
    fontWeight: "500",
  },
};
