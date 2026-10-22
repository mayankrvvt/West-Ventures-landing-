import Reveal from "../../components/Reveal";

import bcImg from "../../assets/images/hero/img.jpg";
import onImg from "../../assets/images/img5.jpg";

const markets = [
  {
    label: "British Columbia",
    text: "Employer lead generation for immigration companies targeting British Columbia.",
    img: bcImg,
    pos: "50% 55%",
  },
  {
    label: "Ontario",
    text: "Employer lead generation for immigration companies targeting Ontario.",
    img: onImg,
    pos: "50% 40%",
  },
];

export default function Markets() {
  return (
    <section id="markets" className="section section--dark">
      <div className="container">
        <Reveal className="markets-head">
          <div>
            <p className="eyebrow">Markets</p>
            <h2 className="display display--light">
              Two provinces. <em className="em-sand">A focused opportunity.</em>
            </h2>
          </div>
          <span className="markets-line" aria-hidden="true" />
        </Reveal>

        <div className="markets-grid">
          {markets.map((m, i) => (
            <Reveal key={m.label} delay={i * 160} className="market">
              <img src={m.img} alt="" className="market-img" style={{ objectPosition: m.pos }} loading="lazy" />
              <div className="market-shade" aria-hidden="true" />
              <div className="market-body">
                <span className="market-label">{m.label}</span>
                <h3>{m.text}</h3>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="markets-note">Our current service focus is British Columbia and Ontario.</p>
        </Reveal>
      </div>
    </section>
  );
}
