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
      "https://michaelpransiscop.Github.io/proyek-game/",

    GithubIcon:
      "https://github.com/MichaelPransiscoP/proyek-game.git",
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
      "https://michaelpransiscop.Github.io/proyek-fishing-game/",

    GithubIcon:
      "https://github.com/MichaelPransiscoP/proyek-fishing-game.git",
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

    demo: "https://github.com/user-attachments/files/28852633/Pinkie_Ewallet.pdf",

    GithubIcon:
      "https://github.com/JuanNathaniel/Pinkie.git",
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

    demo: "https://github.com/MichaelPransiscoP/Implementasi-Random-Forest-untuk-Prediksi-Kanker-Paru-Paru.git",

    GithubIcon:
      "https://github.com/MichaelPransiscoP/Implementasi-Random-Forest-untuk-Prediksi-Kanker-Paru-Paru.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-[#030712]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[6px] text-cyan-400">
            Portfolio
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Some of my favorite projects in Backend Development,
            Artificial Intelligence and Web Development.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="group rounded-3xl overflow-hidden bg-[#111827] border border-white/10 hover:border-cyan-400 transition duration-500 hover:-translate-y-2"
              >
                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-8">

                  <div className="flex items-center gap-3">

                    <Icon
                      className="text-cyan-400"
                      size={28}
                    />

                    <h3 className="text-2xl font-bold">
                      {project.title}
                    </h3>

                  </div>

                  <p className="text-gray-400 mt-5 leading-7">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">

                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-sm border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  <div className="flex gap-4 mt-8">

                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition px-5 py-3 rounded-xl text-black font-semibold"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>

                    <a
                      href={project.GithubIcon}
                      target="_blank"
                      className="flex items-center gap-2 border border-gray-600 hover:border-cyan-400 px-5 py-3 rounded-xl transition"
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

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}