import "./Footer.css";
import FooterColumn from "./FooterColumn";
import AdSection from "./ad";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <FooterColumn title="Links 1" />

        <FooterColumn title="Links 2" />

        <AdSection />
      </div>

      <div className="footer-bottom">
        <p>© 2025 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
