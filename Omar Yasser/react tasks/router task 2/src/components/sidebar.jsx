import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={{
      width: "180px",
      background: "#eee",
      padding: "15px",
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }}>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/settings">Settings</Link>
    </aside>
  );
}
