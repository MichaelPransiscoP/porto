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
      className="about-section"
    >
      <div className="about-container">

        <div className="about-header">

          <span className="about-subtitle">
            About Me
          </span>

          <h2 className="about-title">
            Who Am I?
          </h2>

        </div>

        <div className="about-content">

          <div>

            <img
              src="/profile.png"
              alt="Michael"
              className="about-image"
            />

          </div>

          <div>

            <h3 className="about-role">
              Backend Developer &
              <span className="about-highlight">
                {" "}AI Engineer
              </span>
            </h3>

            <p className="about-text">
              I am passionate about building scalable backend
              systems and intelligent applications using
              Artificial Intelligence and Machine Learning.
            </p>

            <p className="about-text">
              My expertise includes developing REST APIs,
              database optimization, Docker deployment,
              and creating modern web applications using
              Next.js and NestJS.
            </p>

            <p className="about-text">
              I enjoy solving complex problems through
              software engineering, data science,
              computer vision, and automation.
            </p>

          </div>

        </div>

        <div className="stats-grid">

          {stats.map((item) => (

            <div
              key={item.title}
              className="stat-card"
            >

              <h3 className="stat-value">
                {item.value}
              </h3>

              <p className="stat-title">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}