const experiences = [
  {
    role: "Full Stack Developer",
    company: "Goognu Data Services",
    location: "Gurgaon",
    period: "Feb 2024 – Present",
    current: true,
    points: [
      "Developed and maintained scalable web applications using the MERN stack.",
      "Designed and implemented RESTful APIs for seamless frontend-backend communication.",
      "Built responsive interfaces using React.js, Redux, and Tailwind CSS.",
      "Collaborated with cross-functional teams to solve complex technical challenges.",
    ],
  },
  {
    role: "Junior React Developer",
    company: "Dishaayein Technology",
    location: "Gurgaon",
    period: "June 2022 – Feb 2024",
    current: false,
    points: [
      "Developed and maintained frontend components using React.js and Redux.",
      "Collaborated with backend developers to integrate RESTful APIs.",
      "Built reusable and modular React components, improving code efficiency.",
    ],
  },
  {
    role: "React Developer Intern",
    company: "Dishaayein Technology",
    location: "Gurgaon",
    period: "Jan 2022 – June 2022",
    current: false,
    points: [
      "Assisted in developing frontend features for web applications using React.js.",
      "Gained hands-on experience with Redux and Context API.",
      "Worked on bug fixes and performance improvements.",
      "Applied best practices for clean, maintainable, and scalable code.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="section-line" />
          <span className="mono text-xs tracking-widest uppercase mb-3 block" style={{ color: "var(--accent)" }}>Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-extrabold">Experience</h2>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }} />
          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-24">
                <div className="absolute left-5 top-2 w-6 h-6 rounded-full border-2 hidden md:flex items-center justify-center"
                  style={{
                    borderColor: exp.current ? "var(--accent)" : "var(--border)",
                    background: exp.current ? "var(--accent)" : "var(--bg)",
                    boxShadow: exp.current ? "0 0 16px rgba(0,255,136,0.5)" : "none",
                  }}>
                  {exp.current && <div className="w-2 h-2 rounded-full" style={{ background: "var(--bg)" }} />}
                </div>
                <div className="p-8 card-hover relative"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderLeft: exp.current ? "3px solid var(--accent)" : "1px solid var(--border)",
                  }}>
                  {exp.current && (
                    <span className="absolute top-4 right-4 mono text-xs px-2 py-1"
                      style={{ background: "rgba(0,255,136,0.1)", color: "var(--accent)", border: "1px solid rgba(0,255,136,0.3)" }}>
                      Current
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-semibold" style={{ color: "var(--accent)" }}>{exp.company}</span>
                    <span className="mono text-xs" style={{ color: "var(--muted)" }}>· {exp.location}</span>
                    <span className="mono text-xs px-2 py-0.5"
                      style={{ background: "var(--surface2)", color: "var(--muted)", border: "1px solid var(--border)" }}>
                      {exp.period}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                        <span style={{ color: "var(--accent)", flexShrink: 0 }}>▸</span> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
