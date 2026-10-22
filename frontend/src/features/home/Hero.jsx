import { useEffect, useRef } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

import heroImg from "../../assets/images/hero/img.jpg";
import "./Hero.css";

const tickerItems = [
  "British Columbia & Ontario",
  "Employer Lead Generation",
  "For Immigration Companies",
  "British Columbia & Ontario",
];

export default function Hero() {
  const bgRef = useRef(null);

  // Slow parallax: the background drifts at a fraction of scroll speed.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = bgRef.current;
    if (!node) return;

    let frame = null;
    const update = () => {
      node.style.setProperty("--py", `${Math.min(window.scrollY, 900) * 0.18}px`);
      frame = null;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section id="top" className="hero">
        <div className="hero-bg" ref={bgRef} aria-hidden="true">
          <img src={heroImg} alt="" />
        </div>
        <div className="hero-shade" aria-hidden="true" />

        <div className="container hero-inner">
          <p className="hero-eyebrow hero-in" style={{ "--d": "0.25s" }}>
            Employer Lead Generation · BC &amp; Ontario
          </p>

          <h1 className="hero-title">
            <span className="hero-line">
              <span style={{ "--d": "0.4s" }}>Your next employer</span>
            </span>
            <span className="hero-line">
              <span style={{ "--d": "0.55s" }}>
                connection starts <em>here.</em>
              </span>
            </span>
          </h1>

          <span className="hero-rule" aria-hidden="true" />

          <p className="hero-lede hero-in" style={{ "--d": "1.05s" }}>
            West Ventures helps immigration companies connect with employers in British Columbia and
            Ontario, supporting a more focused approach to business development.
          </p>

          <div className="hero-actions hero-in" style={{ "--d": "1.2s" }}>
            <a href="#consultation" className="btn btn-primary">
              Book a Consultation <ArrowRight size={14} className="arrow-right" />
            </a>
            <a href="#focus" className="btn btn-ghost-light">
              Explore Our Focus <ArrowDown size={14} className="arrow-down" />
            </a>
          </div>

          <p className="hero-note hero-in" style={{ "--d": "1.4s" }}>
            Built for immigration companies. Focused on employer connections.
          </p>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="ticker-group">
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <li key={`${copy}-${i}`}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
