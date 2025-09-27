import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <h2 className="logo">My Website</h2>

        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
