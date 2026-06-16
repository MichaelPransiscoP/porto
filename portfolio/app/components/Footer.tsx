import Image from "next/image";
import {
  Mail,
  Heart,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-grid">

          <div className="footer-about">

            <h2 className="footer-logo">
              Michael
              <span className="footer-logo-dot">.</span>
            </h2>

            <p className="footer-description">
              Backend Developer passionate about
              Artificial Intelligence, Machine Learning,
              and scalable web applications.
            </p>

          </div>

          <div className="footer-links">

            <h3 className="footer-heading">
              Quick Links
            </h3>

            <div className="footer-menu">

              <a
                href="#about"
                className="footer-link"
              >
                About
              </a>

              <a
                href="#skills"
                className="footer-link"
              >
                Skills
              </a>

              <a
                href="#experience"
                className="footer-link"
              >
                Experience
              </a>

              <a
                href="#projects"
                className="footer-link"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="footer-link"
              >
                Contact
              </a>

            </div>

          </div>

          <div className="footer-connect">

            <h3 className="footer-heading">
              Connect
            </h3>

            <div className="footer-socials">

              <a
                href="https://github.com/MichaelPransiscoP"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
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
                className="footer-social-link"
              >
                <Image
                  src="/icons/linkedin.png"
                  alt="linkedin"
                  width={28}
                  height={28}
                />
              </a>

              <a
                href="mailto:wermichael211@gmail.com"
                className="footer-social-link"
              >
                <Mail />
              </a>

            </div>

            <a
              href="/cv.pdf"
              className="footer-resume-button"
            >
              Download Resume
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <p className="footer-copyright">

            Made with

            <Heart
              size={16}
              className="footer-heart"
            />

            by Michael Pransisco Purba © {new Date().getFullYear()}

          </p>

          <a
            href="#"
            className="footer-back-to-top"
          >
            <ArrowUp size={18} />

            Back to Top

          </a>

        </div>

      </div>

    </footer>
  );
}