import { useState } from "react";

import {
  GraduationCap,
  Hotel,
  Plane,
  Wine,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

import { services } from "../../constants/services";
import { classNames } from "../../utils/classNames";
import Reveal from "../../components/Reveal";

import "./Services.css";

/* =========================================================
   SERVICE ICONS
========================================================= */

const icons = {
  colleges: GraduationCap,
  hospitality: Hotel,
  immigration: Plane,
  winery: Wine,
  hr: BriefcaseBusiness,
};

export default function Services() {
  const [activeId, setActiveId] = useState(
    services[0]?.id
  );

  const activeService = services.find(
    (service) => service.id === activeId
  );

  /* Fallback icon */
  const ActiveIcon =
    icons[activeService?.id] || BriefcaseBusiness;

  /* =========================================================
     SERVICE CONTACT LINK
  ========================================================= */

  const getServiceLink = (serviceId) => {
    return `/contact?service=${encodeURIComponent(
      serviceId
    )}`;
  };

  return (
    <section
      id="services"
      className="section services"
    >
      <div className="container services-grid">

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <Reveal className="services-intro">

          <p className="eyebrow">
            What we do
          </p>

          <h2 className="services-heading">
            Five industry solutions,
            connected as one network.
          </h2>

          <p className="services-copy">
            We provide specialized services across
            education, hospitality, immigration, winery,
            and human resources, connecting businesses,
            institutions, students, and professionals
            through one network.
          </p>

        </Reveal>


        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <Reveal
          className="services-interactive"
          delay={100}
        >

          {/* =================================================
              SERVICE LIST
          ================================================= */}

          <ul className="services-list">

            {services.map((service) => (
              <li key={service.id}>

                <button
                  type="button"
                  className={classNames(
                    "services-list-item",
                    service.id === activeId &&
                      "is-active"
                  )}
                  onClick={() =>
                    setActiveId(service.id)
                  }
                  onMouseEnter={() =>
                    setActiveId(service.id)
                  }
                >

                  <span className="services-list-text">

                    <span className="services-list-title">
                      {service.label}
                    </span>

                    <span className="services-list-summary">
                      {service.summary}
                    </span>

                  </span>

                  <ArrowRight
                    size={18}
                    className="services-list-arrow"
                  />

                </button>

              </li>
            ))}

          </ul>


          {/* =================================================
              ACTIVE SERVICE DETAILS
          ================================================= */}

          {activeService && (
            <div
              className="services-detail"
              key={activeService.id}
            >

              {/* Service icon */}

              <div className="services-detail-icon">
                <ActiveIcon size={28} />
              </div>


              {/* Service title */}

              <h3 className="services-detail-title">
                {activeService.label}
              </h3>


              {/* Service description */}

              <p className="services-detail-copy">
                {activeService.description}
              </p>


              {/* Contact link */}

              <a
                href={getServiceLink(
                  activeService.id
                )}
                className="services-detail-link"
              >

                <span>
                  Explore{" "}
                  {activeService.label.toLowerCase()}
                </span>

                <ArrowRight size={18} />

              </a>

            </div>
          )}

        </Reveal>

      </div>
    </section>
  );
}