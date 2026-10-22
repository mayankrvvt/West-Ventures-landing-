import Reveal from "../../components/Reveal";

const pillars = [
  {
    n: "01",
    title: "A clear audience",
    body: "Employer lead generation designed around immigration companies.",
  },
  {
    n: "02",
    title: "A defined regional focus",
    body: "A service focus spanning British Columbia and Ontario.",
  },
  {
    n: "03",
    title: "A conversation about your goals",
    body: "Discuss your target employers, preferred markets, and business development priorities.",
  },
];

export default function Focus() {
  return (
    <section id="focus" className="section section--cream">
      <div className="container">
        <div className="split-head">
          <Reveal>
            <p className="eyebrow">Our Focus</p>
            <h2 className="display">
              An intentional approach to <em>employer outreach.</em>
            </h2>
            <span className="rule" style={{ marginTop: "2rem" }} />
          </Reveal>

          <Reveal delay={150}>
            <p className="lede">
              Developing employer relationships takes focus. West Ventures provides employer lead
              generation for immigration companies looking to expand their business development
              efforts in British Columbia and Ontario.
            </p>
          </Reveal>
        </div>

        <div className="pillars">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 130} className="pillar">
              <span className="pillar-n">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <span className="rule pillar-rule" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
