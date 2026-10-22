import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { classNames } from "../utils/classNames";

import "./Navbar.css";

const links = [
  { id: "focus", label: "Our Focus" },
  { id: "how-it-works", label: "How It Works" },
  { id: "markets", label: "Markets" },
  { id: "faq", label: "FAQs" },
];

const sectionIds = links.map((l) => l.id);
const spyOptions = { rootMargin: "-45% 0px -50% 0px" };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolled } = useScrollPosition(24);
  const activeId = useScrollSpy(sectionIds, spyOptions, null);

  const onHome = window.location.pathname === "/" || window.location.pathname === "/home";
  // On the landing page links glide in-page; on other pages they go back to it.
  const hrefFor = (id) => (onHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={classNames("nav", isScrolled && "nav--scrolled", isOpen && "nav--open")}>
      <div className="nav-inner">
        <Logo href={onHome ? "#top" : "/"} />

        <nav className="nav-links" aria-label="Primary">
          {links.map((link, i) => (
            <a
              key={link.id}
              href={hrefFor(link.id)}
              className={classNames("nav-link", onHome && activeId === link.id && "is-active")}
              style={{ "--i": i }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href={hrefFor("consultation")} className="nav-cta" onClick={() => setIsOpen(false)}>
          Book a Consultation
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className="nav-drawer" aria-hidden={!isOpen}>
        {links.map((link) => (
          <a key={link.id} href={hrefFor(link.id)} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href={hrefFor("consultation")} className="nav-drawer-cta" onClick={() => setIsOpen(false)}>
          Book a Consultation
        </a>
      </div>
    </header>
  );
}
