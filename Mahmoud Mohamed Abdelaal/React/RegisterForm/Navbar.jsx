import { useLang } from "../Context/LangContext";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const { lang, toggleLang } = useLang();

  return (
    <nav style={{ padding: "10px", background: "#eee",display: "flex", justifyContent: "space-between", alignItems: "center" }}>
     

      <h3>Current language: {lang}</h3>
      <button onClick={toggleLang}>Toggle Language</button>
 {/* <Link to="/product">User</Link> */}
<div style={{ display: "flex", gap: "20px" }}>
 <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}>
          Home
        </NavLink>
         <NavLink to="/product" style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}>
          Product
        </NavLink>
         <NavLink to="/register" style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}>
          Register
        </NavLink>
        </div>
    </nav>
  );
}

export default Navbar;
