export default function About() {
  const stats = [
    {
      title: "Projects",
      value: "10+",
    },
    {
      title: "Internship",
      value: "2",
    },
    {
      title: "Technologies",
      value: "15+",
    },
    {
      title: "AI Projects",
      value: "5+",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-widest">
            About Me
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Who Am I?
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <img
              src="/profile.png"
              alt="Michael"
              className="rounded-3xl shadow-2xl border border-cyan-500/30"
            />

          </div>

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Backend Developer &
              <span className="text-cyan-400">
                {" "}AI Engineer
              </span>
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              I am passionate about building scalable backend
              systems and intelligent applications using
              Artificial Intelligence and Machine Learning.
            </p>

            <p className="text-gray-400 leading-8 mb-6">
              My expertise includes developing REST APIs,
              database optimization, Docker deployment,
              and creating modern web applications using
              Next.js and NestJS.
            </p>

            <p className="text-gray-400 leading-8">
              I enjoy solving complex problems through
              software engineering, data science,
              computer vision, and automation.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          {stats.map((item) => (

            <div
              key={item.title}
              className="bg-[#111827] rounded-2xl p-8 text-center border border-white/10 hover:border-cyan-400 transition duration-300"
            >

              <h3 className="text-5xl font-bold text-cyan-400">
                {item.value}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}