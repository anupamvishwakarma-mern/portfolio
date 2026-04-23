"use client";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Vulnerability Scanner", category: "Full Stack", highlight: true,
    desc: "Full-stack web application for scanning and reporting vulnerabilities in web applications.",
    tech: ["MongoDB Atlas", "Next.js", "JWT", "Axios", "Vercel", "GitHub Actions", "Tailwind CSS"],
    features: ["CRUD for vulnerabilities", "Next.js API routes", "JWT-secured authentication", "Session management with cookies"],
  },
  {
    title: "Dorecure", category: "Full Stack", highlight: true,
    desc: "Full-stack medicine management application with secure authentication and CRUD operations.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Axios"],
    features: ["CRUD for medicines via RESTful APIs", "Global state via Context API", "JWT-secured authentication"],
  },
  {
    title: "AIRS — Resume Builder", category: "Full Stack", highlight: true,
    desc: "Resume creation application with Elastic Search-powered APIs built on Node.js.",
    tech: ["React.js", "Redux", "Node.js", "Axios", "Elastic Search"],
    features: ["Elastic Search API integration", "Redux global state", "RESTful data processing"],
  },
  {
    title: "Golisten", category: "Full Stack", highlight: true,
    desc: "Customer support audio monitoring app with call review analytics and payment integration.",
    tech: ["Next.js", "Redux", "Axios", "PhonePay Gateway"],
    features: ["Audio parsing & review", "PhonePay payment gateway", "Next.js API routes"],
  },
  {
    title: "Bigbell", category: "Full Stack", highlight: false,
    desc: "Real-time project resource monitor tracking CPU, storage, and RAM with graphical insights.",
    tech: ["React.js", "Redux", "Python", "Axios", "Google Login", "LinkedIn Login"],
    features: ["Real-time resource monitoring", "Graphical representations", "OAuth social login"],
  },
  {
    title: "HRMS", category: "Full Stack", highlight: false,
    desc: "Human Resource Management System for managing employees, managers, and recruiters.",
    tech: ["React.js", "Python"],
    features: ["CRUD for employee data", "Python-powered APIs", "Intuitive HR UI"],
  },
  {
    title: "News Tech Website", category: "Frontend", highlight: false,
    desc: "Single-page app fetching real-time news based on user search queries.",
    tech: ["React.js", "Context API", "useReducer", "Axios", "News API"],
    features: ["Real-time news search", "Context API + useReducer", "Async data with Axios"],
  },
  {
    title: "Transport ERP", category: "Frontend", highlight: false,
    desc: "Static React application for transportation data management with modular component design.",
    tech: ["React.js", "CSS"],
    features: ["Reusable React components", "Clean modular design"],
  },
  {
    title: "Netflix Clone", category: "Frontend", highlight: false,
    desc: "Netflix-inspired web app with dynamic movie/show rendering using the Netflix API.",
    tech: ["React.js", "CSS", "Bootstrap", "Netflix API"],
    features: ["Responsive design", "Dynamic movie posters & trailers", "Search functionality"],
  },
  {
    title: "Qquizz Game", category: "Full Stack", highlight: false,
    desc: "Interactive quiz app for college students covering C, Java, and Python.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: ["Multiple-choice quizzes", "Dynamic scoring system", "Admin panel"],
  },
];

const categories = ["All", "Full Stack", "Frontend"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <div className="section-line" />
          <span className="mono text-xs tracking-widest uppercase mb-3 block" style={{ color: "var(--accent)" }}>Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-extrabold">Projects</h2>
        </div>
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)} className="mono text-xs px-5 py-2 tracking-wider uppercase transition-all"
              style={active === cat
                ? { background: "var(--accent)", color: "var(--bg)", border: "1px solid var(--accent)" }
                : { background: "transparent", color: "var(--muted)", border: "1px solid var(--border)" }}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((proj) => (
            <div key={proj.title} className="p-6 card-hover flex flex-col relative overflow-hidden"
              style={{
                background: "var(--surface2)",
                border: proj.highlight ? "1px solid rgba(0,255,136,0.2)" : "1px solid var(--border)",
              }}>
              {proj.highlight && (
                <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
                  style={{ background: "radial-gradient(circle at top right, rgba(0,255,136,0.08), transparent)" }} />
              )}
              <div className="flex items-start justify-between mb-3">
                <span className="mono text-xs px-2 py-0.5"
                  style={{
                    background: proj.highlight ? "rgba(0,255,136,0.1)" : "rgba(255,255,255,0.04)",
                    color: proj.highlight ? "var(--accent)" : "var(--muted)",
                    border: `1px solid ${proj.highlight ? "rgba(0,255,136,0.3)" : "var(--border)"}`,
                  }}>
                  {proj.category}
                </span>
                <ExternalLink size={14} style={{ color: "var(--muted)", marginTop: "2px" }} />
              </div>
              <h3 className="text-lg font-bold mb-2">{proj.title}</h3>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--muted)" }}>{proj.desc}</p>
              <ul className="flex flex-col gap-1 mb-4">
                {proj.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--muted)" }}>
                    <span style={{ color: "var(--accent)" }}>·</span> {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tech.map((t) => (
                  <span key={t} className="mono text-xs px-2 py-0.5"
                    style={{ background: "var(--surface)", color: "var(--muted)", border: "1px solid var(--border)" }}>
                    {t}
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
