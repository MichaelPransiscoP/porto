"use client";

import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      skills: [
        "NestJS",
        "Node.js",
        "TypeScript",
        "REST API",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "Next.js",
        "React",
        "JavaScript",
        "Tailwind CSS",
      ],
    },
    {
      title: "Database",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
      ],
    },
    {
      title: "AI & Data Science",
      skills: [
        "Python",
        "Random Forest",
        "Machine Learning",
        "Data Analysis",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="skills-section"
    >
      <div className="skills-container">

        <div className="skills-header">

          <span className="skills-subtitle">
            Skills
          </span>

          <h2 className="skills-title">
            Technical Skills
          </h2>

          <p className="skills-description">
            Technologies and tools that I use for
            backend development, AI engineering,
            and modern web applications.
          </p>

        </div>

        <div className="skills-grid">

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="skill-card"
            >

              <h3 className="skill-category">
                {category.title}
              </h3>

              <div className="skill-list">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="skill-badge"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}