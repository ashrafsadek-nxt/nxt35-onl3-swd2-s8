import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import InfoPage from "./pages/InfoPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const linkStyle = {
    marginRight: "15px",
    textDecoration: "none",
    color: "#007bff",
  };

  return (
    <Router>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={linkStyle}>
          Main
        </Link>
        <Link to="/info" style={linkStyle}>
          Info
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
      </nav>

      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </Router>
  );
}
