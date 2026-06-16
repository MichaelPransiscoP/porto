"use client";

import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="contact-container">

        <div className="contact-header">

          <span className="contact-subtitle">
            Contact
          </span>

          <h2 className="contact-title">
            Let's Work Together
          </h2>

          <p className="contact-description">
            Interested in working together or have a project in mind?
            Feel free to reach out through any of the platforms below.
          </p>

        </div>

        <div className="contact-content">

          <div className="contact-info">

            <div className="contact-card">

              <div className="contact-card-content">

                <div className="contact-icon">
                  <Mail />
                </div>

                <div>

                  <h3 className="contact-label">
                    Email
                  </h3>

                  <p className="contact-value">
                    wermichael211@gmail.com
                  </p>

                </div>

              </div>

            </div>

            <div className="contact-card">

              <div className="contact-card-content">

                <div className="contact-icon">
                  <Phone />
                </div>

                <div>

                  <h3 className="contact-label">
                    Phone
                  </h3>

                  <p className="contact-value">
                    +62 819-4917-9779
                  </p>

                </div>

              </div>

            </div>

            <div className="contact-card">

              <div className="contact-card-content">

                <div className="contact-icon">
                  <MapPin />
                </div>

                <div>

                  <h3 className="contact-label">
                    Location
                  </h3>

                  <p className="contact-value">
                    Bandung, Indonesia
                  </p>

                </div>

              </div>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/MichaelPransiscoP"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Image
                  src="/icons/github.png"
                  alt="github"
                  width={28}
                  height={28}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/michaelpransiscopurba/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Image
                  src="/icons/linkedin.png"
                  alt="linkedin"
                  width={28}
                  height={28}
                />
              </a>

            </div>

          </div>

          <div className="contact-form-card">

            <h3 className="contact-form-title">
              Send Message
            </h3>

            <form className="contact-form">

              <input
                type="text"
                placeholder="Your Name"
                className="contact-input"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="contact-input"
              />

              <input
                type="text"
                placeholder="Subject"
                className="contact-input"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="contact-textarea"
              />

              <button
                type="submit"
                className="contact-button"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}