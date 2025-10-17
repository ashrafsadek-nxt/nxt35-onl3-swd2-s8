import { Link } from "react-router-dom";
import './Sidebar.css';
function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/contant">Contant</Link>
      <Link to="/list">List</Link>
    </aside>
  );
}

export default Sidebar;
