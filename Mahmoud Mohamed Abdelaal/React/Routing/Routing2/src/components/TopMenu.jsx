import { NavLink } from "react-router-dom";

export default function TopMenu() {
  const activeStyle = { color: "#e91e63", fontWeight: "bold" };

  return (
    <header
      style={{
        backgroundColor: "#111",
        padding: "15px 25px",
        display: "flex",
        gap: "20px",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : { color: "#fff" })}
      >
        Start
      </NavLink>
      <NavLink
        to="/catalog"
        style={({ isActive }) => (isActive ? activeStyle : { color: "#fff" })}
      >
        Catalog
      </NavLink>
      <NavLink
        to="/account"
        style={({ isActive }) => (isActive ? activeStyle : { color: "#fff" })}
      >
        Account
      </NavLink>
      <NavLink
        to="/preferences"
        style={({ isActive }) => (isActive ? activeStyle : { color: "#fff" })}
      >
        Preferences
      </NavLink>
    </header>
  );
}
