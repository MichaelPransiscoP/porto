"use client";

import Image from "next/image";
import {
  ExternalLink,
  Brain,
  Gamepad2,
  Wallet,
  Database,
} from "lucide-react";

const projects = [
  {
    title: "Sudoku AI",
    image: "/projects/sudoku.png",
    icon: Brain,
    description:
      "Sudoku Solver menggunakan Backtracking, AC3, dan MRV untuk menghasilkan solusi yang optimal.",
    tech: [
      "JavaScript",
      "Backtracking",
      "AC3",
      "MRV",
    ],
    demo:
      "https://michaelpransiscop.github.io/proyek-game/",
    github:
      "https://github.com/MichaelPransiscoP/proyek-game",
  },
  {
    title: "Fishing Game",
    image: "/projects/fishing.png",
    icon: Gamepad2,
    description:
      "Mini browser game dengan gameplay sederhana menggunakan HTML, CSS dan JavaScript.",
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
      "Canvas",
    ],
    demo:
      "https://michaelpransiscop.github.io/proyek-fishing-game/",
    github:
      "https://github.com/MichaelPransiscoP/proyek-fishing-game",
  },
  {
    title: "Pinkie E-Wallet",
    image: "/projects/ewallet.jpg",
    icon: Wallet,
    description:
      "Modern E-Wallet UI Design dengan fitur Transfer, Top Up, Payment dan QR.",
    tech: [
      "Flutter",
      "UI/UX",
      "Finance",
    ],
    demo:
      "https://github.com/user-attachments/files/28852633/Pinkie_Ewallet.pdf",
    github:
      "https://github.com/JuanNathaniel/Pinkie",
  },
  {
    title: "Lung Cancer Prediction",
    image: "/projects/lung.jpg",
    icon: Database,
    description:
      "Machine Learning menggunakan Random Forest, RFECV dan Hyperparameter Tuning.",
    tech: [
      "Python",
      "Random Forest",
      "RFECV",
      "Machine Learning",
    ],
    demo:
      "https://github.com/MichaelPransiscoP/Implementasi-Random-Forest-untuk-Prediksi-Kanker-Paru-Paru",
    github:
      "https://github.com/MichaelPransiscoP/Implementasi-Random-Forest-untuk-Prediksi-Kanker-Paru-Paru",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="projects-container">

        <div className="projects-header">

          <span className="projects-subtitle">
            Portfolio
          </span>

          <h2 className="projects-title">
            Featured Projects
          </h2>

          <p className="projects-description">
            Some of my favorite projects in Backend Development,
            Artificial Intelligence and Web Development.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="project-card"
              >

                <div className="project-image-wrapper">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                </div>

                <div className="project-content">

                  <div className="project-header">

                    <Icon
                      size={28}
                      className="project-icon"
                    />

                    <h3 className="project-title">
                      {project.title}
                    </h3>

                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tech-list">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="project-tech-badge"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  <div className="project-actions">

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-demo-button"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github-button"
                    >
                      <Image
                        src="/icons/github.png"
                        alt="github"
                        width={28}
                        height={28}
                      />
                      Github
                    </a>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}