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
      className="py-24 bg-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="uppercase tracking-[6px] text-cyan-400">
            Experience
          </span>

          <h2 className="text-5xl font-bold mt-4">
            My Journey
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Throughout internships and organizational experiences,
            I have developed skills in backend development,
            AI, database systems, and collaborative software engineering.
          </p>

        </div>

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-cyan-500/30 hidden md:block"></div>

          <div className="space-y-12">

            {experiences.map((item) => (

              <div
                key={item.company}
                className="relative md:pl-16"
              >

                <div className="hidden md:flex absolute left-0 top-2 w-10 h-10 rounded-full bg-cyan-500 items-center justify-center">
                  <Briefcase size={18} className="text-black" />
                </div>

                <div className="bg-[#111827] rounded-3xl border border-white/10 hover:border-cyan-400 transition duration-300 p-8">

                  <h3 className="text-2xl font-bold">
                    {item.position}
                  </h3>

                  <h4 className="text-cyan-400 text-lg mt-2">
                    {item.company}
                  </h4>

                  <div className="flex flex-wrap gap-6 mt-4 text-gray-400">

                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {item.period}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {item.location}
                    </div>

                  </div>

                  <div className="mt-6 space-y-4">

                    {item.achievements.map((achievement) => (

                      <div
                        key={achievement}
                        className="flex gap-3"
                      >
                        <CheckCircle2
                          className="text-cyan-400 mt-1 flex-shrink-0"
                          size={18}
                        />

                        <p className="text-gray-300">
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