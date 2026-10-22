import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

import ImageSlideshow from "../../components/ImageSlideshow";
import { submitContactRequest } from "../../services/contactService";

import heroImg0 from "../../assets/images/hero/img.jpg";
import heroImg1 from "../../assets/images/hero/img1.jpg";
import heroImg2 from "../../assets/images/hero/img2.jpg";
import heroImg3 from "../../assets/images/hero/img3.jpg";
import heroImg4 from "../../assets/images/hero/img4.jpg";

import "./Contact.css";

const contactHeroImages = [
  {
    src: heroImg0,
    alt: "West Ventures — Canadian business district",
  },
  {
    src: heroImg1,
    alt: "West Ventures team collaborating",
  },
  {
    src: heroImg2,
    alt: "West Ventures client workspace",
  },
  {
    src: heroImg3,
    alt: "West Ventures staffing and recruiting session",
  },
  {
    src: heroImg4,
    alt: "West Ventures marketing planning session",
  },
];

export default function Contact() {
  const [submissionState, setSubmissionState] = useState("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setSubmissionState("sending");
    setSubmissionMessage("");

    try {
      const result = await submitContactRequest(payload);

      if (!result.ok) {
        throw new Error(
          "The contact form is not configured. Please email sales@westventures.ca."
        );
      }

      form.reset();
      setSubmissionState("success");
      setSubmissionMessage("Thanks for reaching out. We'll be in touch soon.");
    } catch (error) {
      setSubmissionState("error");
      setSubmissionMessage(
        error.message || "Unable to send your message. Please try again."
      );
    }
  };

  return (
    <div className="contact-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="contact-hero">
        <ImageSlideshow
          images={contactHeroImages}
          interval={6000}
        />

        <div
          className="contact-hero-overlay"
          aria-hidden="true"
        />

        <div className="contact-hero-content">
          <h1>Contact Us</h1>

          <div className="contact-breadcrumb">
            <span>HOME</span>
            <span className="contact-breadcrumb-arrow">›</span>
            <span className="contact-breadcrumb-current">
              CONTACT US
            </span>
          </div>
        </div>
      </section>

      {/* =========================
          CONTACT CONTENT
      ========================= */}
      <section className="contact-content">
        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-details">

            <h2>
              Contact
              <br />
              <span>Details</span>
            </h2>

            <div className="contact-intro">
              <span className="contact-square"></span>

              <p>
                Please let us know if you have a question
                or want to leave a comment.
              </p>
            </div>

            {/* Address */}
            <div className="contact-detail-item">
              <MapPin
                size={27}
                className="contact-detail-icon"
              />

              <div>
                <h4>ADDRESS INFO:</h4>
                <p>BC, Canada</p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-detail-item">
              <Phone
                size={27}
                className="contact-detail-icon"
              />

              <div>
                <h4>CUSTOMER CARE:</h4>
                <p>+1 (778) 957-2433</p>
                <p>+1 (672) 258-7652</p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-detail-item">
              <Mail
                size={27}
                className="contact-detail-icon"
              />

              <div>
                <h4>OUR EMAILS:</h4>

                <p>kc@westventures.ca</p>
                <p>kunal@westforcecanada.com</p>

                <p>
                  For Sales: sales@westventures.ca
                </p>

                <p>
                  Existing Clients: clients@westventures.ca
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="contact-form-wrapper">

            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="contact-form-field">
                <label htmlFor="contact-name">
                  Your name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-email">
                  Your email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-subject">
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-message">
                  Your message (optional)
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="8"
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={submissionState === "sending"}
              >
                {submissionState === "sending" ? "Sending..." : "Submit"}
              </button>

              {submissionMessage && (
              <p
                className={`contact-form-status is-${submissionState}`}
                role={submissionState === "error" ? "alert" : "status"}
              >
                {submissionMessage}
              </p>
              )}

            </form>

          </div>

        </div>
      </section>

    </div>
  );
}