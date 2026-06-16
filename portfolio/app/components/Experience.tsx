"use client";

import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
    company: "PT Quadra Karya Santosa",
    position: "Software Engineer Intern",
    period: "Sep 2025 - Jan 2026",
    location: "Bandung, Indonesia",
    achievements: [
      "Developed backend services using NestJS & TypeScript",
      "Integrated RESTful APIs with React frontend",
      "Implemented transaction history with filtering & pagination",
      "Worked with PostgreSQL, Redis, and Docker",
      "Documented APIs using Swagger & Postman",
    ],
  },
  {
    company: "KPP Pratama",
    position: "Tax Officer Intern",
    period: "Jan 2020 - Mar 2020",
    location: "Cianjur, Indonesia",
    achievements: [
      "Managed taxpayer registration data",
      "Migrated historical records into database",
      "Validated and organized tax information",
    ],
  },
  {
    company: "HPK Foundation",
    position: "Creative Team",
    period: "Jun 2019 - Dec 2021",
    location: "Cianjur, Indonesia",
    achievements: [
      "Created photo & video content",
      "Supported scholarship campaign events",
      "Produced promotional short films",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience-section"
    >
      <div className="experience-container">

        <div className="experience-header">

          <span className="experience-subtitle">
            Experience
          </span>

          <h2 className="experience-title">
            My Journey
          </h2>

          <p className="experience-description">
            Throughout internships and organizational experiences,
            I have developed skills in backend development,
            AI, database systems, and collaborative software engineering.
          </p>

        </div>

        <div className="experience-timeline">

          <div className="timeline-line"></div>

          <div className="timeline-list">

            {experiences.map((item) => (

              <div
                key={item.company}
                className="timeline-item"
              >

                <div className="timeline-icon">

                  <Briefcase size={18} />

                </div>

                <div className="timeline-card">

                  <h3 className="timeline-position">
                    {item.position}
                  </h3>

                  <h4 className="timeline-company">
                    {item.company}
                  </h4>

                  <div className="timeline-meta">

                    <div className="timeline-meta-item">

                      <Calendar size={16} />

                      {item.period}

                    </div>

                    <div className="timeline-meta-item">

                      <MapPin size={16} />

                      {item.location}

                    </div>

                  </div>

                  <div className="achievement-list">

                    {item.achievements.map((achievement) => (

                      <div
                        key={achievement}
                        className="achievement-item"
                      >

                        <CheckCircle2
                          size={18}
                          className="achievement-icon"
                        />

                        <p className="achievement-text">
                          {achievement}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}