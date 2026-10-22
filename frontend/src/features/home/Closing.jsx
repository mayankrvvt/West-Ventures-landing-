import { useScrollParallax } from "../../hooks/useScrollParallax";
import Reveal from "../../components/Reveal";

export default function Closing() {
  // Text drifts a few pixels against the scroll for depth.
  const [ref, offset] = useScrollParallax(0.08, 30);

  return (
    <section className="closing" ref={ref}>
      <div className="closing-glow" aria-hidden="true" />
      <div className="container closing-inner" style={{ transform: `translate3d(0, ${offset}px, 0)` }}>
        <Reveal>
          <span className="rule closing-rule" aria-hidden="true" />
          <h2 className="display display--light">
            Meaningful connections begin with a <em>clear focus.</em>
          </h2>
          <p>
            West Ventures brings a defined service and regional focus to employer lead generation for
            immigration companies.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
