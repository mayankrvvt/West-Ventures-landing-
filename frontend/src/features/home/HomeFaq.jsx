import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import Reveal from "../../components/Reveal";
import { classNames } from "../../utils/classNames";

const faqs = [
  {
    q: "Who does West Ventures work with?",
    a: "West Ventures provides employer lead generation for immigration companies.",
  },
  {
    q: "Which markets do you focus on?",
    a: "Our current focus is British Columbia and Ontario.",
  },
  {
    q: "What can we discuss during a consultation?",
    a: "Your company, the types of employers you want to connect with, your preferred markets, and your business development priorities.",
  },
  {
    q: "How do we learn about pricing and service details?",
    a: "Service scope and pricing are discussed during a consultation, once we understand your goals and target markets.",
  },
];

export default function HomeFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section section--cream">
      <div className="container faq-grid">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="display">
            Questions, <em>answered.</em>
          </h2>
          <span className="rule" style={{ marginTop: "1.6rem" }} />
        </Reveal>

        <Reveal delay={140} className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={classNames("faq-item", isOpen && "is-open")}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                </button>
                <div className="faq-panel" id={`faq-panel-${i}`} role="region">
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
