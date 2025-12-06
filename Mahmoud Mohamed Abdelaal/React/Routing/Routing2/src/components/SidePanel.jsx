import { NavLink } from "react-router-dom";

export default function SidePanel() {
  const panelStyle = {
    width: "210px",
    backgroundColor: "#e0e0e0",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const activeLink = {
    backgroundColor: "#4caf50",
    color: "#fff",
    padding: "8px",
    borderRadius: "6px",
  };

  return (
    <aside style={panelStyle}>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeLink : undefined)}
      >
        Start
      </NavLink>
      <NavLink
        to="/catalog"
        style={({ isActive }) => (isActive ? activeLink : undefined)}
      >
        Catalog
      </NavLink>
      <NavLink
        to="/account"
        style={({ isActive }) => (isActive ? activeLink : undefined)}
      >
        Account
      </NavLink>
      <NavLink
        to="/preferences"
        style={({ isActive }) => (isActive ? activeLink : undefined)}
      >
        Preferences
      </NavLink>
    </aside>
  );
}
