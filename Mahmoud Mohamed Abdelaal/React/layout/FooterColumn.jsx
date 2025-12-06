function FooterColumn({ title }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      <ul>
        <li>
          <a href="#">Link 1</a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
        <li>
          <a href="#">Link 3</a>
        </li>
      </ul>
    </div>
  );
}

export default FooterColumn;
