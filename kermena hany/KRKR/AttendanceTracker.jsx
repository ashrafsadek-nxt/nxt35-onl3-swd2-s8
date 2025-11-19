import React, { useState } from "react";

export default function AttendanceTracker() {
  const [students, setStudents] = useState(0);

  const handleEnter = () => {
    setStudents((prev) => prev + 1);
  };

  const handleLeave = () => {
    setStudents((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleReset = () => {
    setStudents(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h3>5th useState Example – Attendance Tracker</h3>
      <p style={{ fontSize: "22px", margin: "15px 0" }}>
         عدد الطلاب الحاضرين الآن:{" "}
        <strong style={{ color: "#007bff" }}>{students}</strong>
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
        <button
          onClick={handleEnter}
          style={{
            width: "200px",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          + دخول طالب
        </button>

        <button
          onClick={handleLeave}
          style={{
            width: "200px",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          - خروج طالب
        </button>

        <button
          onClick={handleReset}
          style={{
            width: "200px",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#ffc107",
            color: "#000",
            border: "none",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          🔄 إعادة تعيين
        </button>
      </div>
    </div>
  );
}