import { useState } from "react";

export default function Lecture() {
  const [attendance, setAttendance] = useState(0);

  const handleEnter = () => {
    setAttendance(attendance + 1);
  };

  const handleLeave = () => {
    if (attendance > 0) {
      setAttendance(attendance - 1);
    }
  };

  return (
    <div>
      <h1>Attendance</h1>
      <p> Attendance: {attendance}</p>

      <button onClick={handleEnter}>Enter </button>
      <button onClick={handleLeave}>Leave </button>
    </div>
  );
}