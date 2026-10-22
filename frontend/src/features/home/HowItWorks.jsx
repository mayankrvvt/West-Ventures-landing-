import { useState } from "react";
import { ArrowRight } from "lucide-react";

import Reveal from "../../components/Reveal";
import { classNames } from "../../utils/classNames";

const steps = [
  {
    n: "01",
    title: "Tell us about your company.",
    body: "Share your business, the markets you serve, and your employer outreach goals.",
  },
  {
    n: "02",
    title: "Discuss your priorities.",
    body: "Talk through the types of employer connections you are seeking in BC and Ontario.",
  },
  {
    n: "03",
    title: "Explore the fit.",
    body: "Discuss service scope and potential next steps with West Ventures.",
  },
];

export default function HowItWorks() {
  // One step is always "lit"; hovering or focusing another moves the light.
  const [active, setActive] = useState(0);

  return (
    <section id="how-it-works" className="section section--sand">
      <div className="container">
        <Reveal>
          <p className="eyebrow">How It Works</p>
          <h2 className="display">
            Start with the right <em>conversation.</em>
          </h2>
        </Reveal>

        <Reveal delay={120} className="steps">
          {steps.map((s, i) => (
            <article
              key={s.n}
              tabIndex={0}
              className={classNames("step", active === i && "is-active")}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </Reveal>

        <Reveal delay={200} className="center">
          <a href="#consultation" className="btn btn-dark">
            Discuss Your Goals <ArrowRight size={14} className="arrow-right" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
