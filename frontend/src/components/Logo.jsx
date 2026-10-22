import "./Logo.css";

/**
 * Gold "W" monogram with the WestVentures wordmark underneath, rebuilt in
 * type so it stays crisp at any size. Swap for an <img> if a final logo
 * file is supplied.
 */
export default function Logo({ href = "/", size = "md", glow = false }) {
  return (
    <a href={href} className={`logo logo--${size}${glow ? " logo--glow" : ""}`} aria-label="West Ventures home">
      <span className="logo-mark" aria-hidden="true">W</span>
      <span className="logo-word" aria-hidden="true">
        West<span>Ventures</span>
      </span>
    </a>
  );
}
