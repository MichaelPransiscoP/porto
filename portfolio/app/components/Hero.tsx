"use client";

export default function Hero() {
  return (
    <section className="hero-section">

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-subtitle">
            Backend Developer • AI Engineer
          </span>

          <h1 className="hero-title">
            Michael Pransisco Purba
          </h1>

          <p className="hero-description">
            Passionate about Backend Development,
            Artificial Intelligence, Machine Learning,
            and building scalable web applications.
          </p>

          <div className="hero-actions">

            <a
              href="#projects"
              className="hero-primary-button"
            >
              View Projects
            </a>

            <a
              href="/cv.pdf"
              className="hero-secondary-button"
            >
              Download Resume
            </a>

          </div>

        </div>

        <div className="hero-image-wrapper">

          <img
            src="/profile.png"
            alt="Michael"
            className="hero-image"
          />

        </div>

      </div>

    </section>
  );
}