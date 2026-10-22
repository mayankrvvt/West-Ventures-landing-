import { useState } from "react";
import { ArrowRight } from "lucide-react";

import Reveal from "../../components/Reveal";
import { submitContactRequest } from "../../services/contactService";

export default function ConsultationForm() {
  const [state, setState] = useState("idle"); // idle | sending | success | error
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Keep the keys the existing contact endpoint already understands
    // (name / email / subject / message) and add the richer fields alongside.
    const payload = {
      name: data.fullName,
      email: data.email,
      subject: `Consultation request — ${data.market}`,
      message: data.goals || "(no additional details provided)",
      company: data.company,
      phone: data.phone,
      market: data.market,
    };

    setState("sending");
    setMessage("");

    try {
      const result = await submitContactRequest(payload);
      if (!result.ok) {
        throw new Error("The form isn't configured yet. Please email sales@westventures.ca.");
      }
      form.reset();
      setState("success");
      setMessage("Thank you. Your request has been sent and we’ll be in touch soon.");
    } catch (error) {
      setState("error");
      setMessage(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="consultation" className="section section--sand">
      <div className="container consult-grid">
        <Reveal>
          <p className="eyebrow">Consultation</p>
          <h2 className="display">
            Let’s talk about your next <em>employer connection.</em>
          </h2>
          <span className="rule" style={{ marginTop: "2rem" }} />
          <p className="lede consult-lede">
            Tell us about your immigration company and the employer relationships you want to develop.
          </p>
          <p className="consult-note">
            This form sends a consultation request. It does not book or confirm an appointment.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <form className="form-card" onSubmit={handleSubmit} noValidate={false}>
            <div className="form-row">
              <label className="field">
                <span>Full name *</span>
                <input name="fullName" type="text" placeholder="Jane Doe" required autoComplete="name" />
              </label>
              <label className="field">
                <span>Company name *</span>
                <input name="company" type="text" placeholder="Your firm" required autoComplete="organization" />
              </label>
            </div>

            <div className="form-row">
              <label className="field">
                <span>Work email *</span>
                <input name="email" type="email" placeholder="you@company.com" required autoComplete="email" />
              </label>
              <label className="field">
                <span>
                  Phone number <i>(optional)</i>
                </span>
                <input name="phone" type="tel" placeholder="+1 604 000 0000" autoComplete="tel" />
              </label>
            </div>

            <label className="field">
              <span>Target market *</span>
              <select name="market" required defaultValue="">
                <option value="" disabled>
                  Select a market
                </option>
                <option>British Columbia</option>
                <option>Ontario</option>
                <option>Both provinces</option>
              </select>
            </label>

            <label className="field">
              <span>
                What types of employers are you looking to connect with? <i>(optional)</i>
              </span>
              <textarea name="goals" rows={3} placeholder="Tell us about your employer outreach goals" />
            </label>

            {message && (
              <p className={`form-msg form-msg--${state}`} role="status">
                {message}
              </p>
            )}

            <div className="form-foot">
              <button type="submit" className="btn btn-dark" disabled={state === "sending"}>
                {state === "sending" ? "Sending…" : "Request a Consultation"}
                <ArrowRight size={14} className="arrow-right" />
              </button>
              <span className="form-aside">A request, not a confirmed booking.</span>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
