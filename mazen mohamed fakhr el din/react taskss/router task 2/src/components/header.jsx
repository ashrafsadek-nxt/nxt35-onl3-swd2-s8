import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ background: "#222", color: "#fff", padding: "10px" }}>
      <nav style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={{ color: "#fff" }}>Home</Link>
        <Link to="/about" style={{ color: "#fff" }}>About</Link>
      </nav>
    </header>
  );
}
