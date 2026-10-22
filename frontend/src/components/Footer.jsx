import Logo from "./Logo";
import { siteConfig } from "../constants/siteConfig";
import "./Footer.css";

export default function Footer() {
  const path = window.location.pathname;
  const onHome = path === "/" || path === "/home";
  const hrefFor = (id) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo href={onHome ? "#top" : "/"} size="lg" glow />
          <p>Employer lead generation for immigration companies.</p>
          <span className="footer-regions">British Columbia &amp; Ontario</span>
        </div>

        <div className="footer-col">
          <h3>Navigate</h3>
          <ul>
            <li><a href={hrefFor("focus")}>Our Focus</a></li>
            <li><a href={hrefFor("how-it-works")}>How It Works</a></li>
            <li><a href={hrefFor("markets")}>Markets</a></li>
            <li><a href={hrefFor("faq")}>FAQs</a></li>
            <li><a href={hrefFor("consultation")}>Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Markets</h3>
          <ul>
            <li><a href={hrefFor("markets")}>British Columbia</a></li>
            <li><a href={hrefFor("markets")}>Ontario</a></li>
            <li>
              <a href={hrefFor("consultation")} className="footer-cta">Book a Consultation</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} West Ventures. All rights reserved.</p>
        <nav aria-label="More">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/careers">Careers</a>
          <a href="/lead-portal">Lead Portal</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </nav>
      </div>
    </footer>
  );
}
