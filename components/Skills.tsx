"use client";
import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Frontend", tag: "01",
    skills: [
      { name: "React.js", level: 95 }, { name: "JavaScript", level: 92 },
      { name: "Redux", level: 88 }, { name: "Tailwind CSS", level: 85 },
      { name: "HTML / CSS", level: 90 }, { name: "Bootstrap", level: 80 },
    ],
  },
  {
    category: "Backend", tag: "02",
    skills: [
      { name: "Node.js", level: 85 }, { name: "Express.js", level: 83 },
      { name: "RESTful APIs", level: 90 }, { name: "JWT Auth", level: 82 },
    ],
  },
  {
    category: "Database", tag: "03",
    skills: [
      { name: "MongoDB", level: 85 }, { name: "Mongoose", level: 82 }, { name: "MySQL", level: 72 },
    ],
  },
  {
    category: "Tools & More", tag: "04",
    skills: [
      { name: "Next.js", level: 70 }, { name: "Git", level: 85 },
      { name: "Firebase", level: 68 }, { name: "Elastic Search", level: 65 }, { name: "Postman", level: 80 },
    ],
  },
];

function SkillBar({ level }: { level: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(level); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="skill-bar">
      <div className="skill-bar-fill" style={{ width: `${width}%` }} />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="section-line" />
          <span className="mono text-xs tracking-widest uppercase mb-3 block" style={{ color: "var(--accent)" }}>Technical Arsenal</span>
          <h2 className="text-4xl md:text-5xl font-extrabold">Skills &amp; Stack</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category} className="p-8 card-hover relative overflow-hidden"
              style={{ background: "var(--surface2)", border: "1px solid var(--border)" }}>
              <span className="absolute top-4 right-6 mono font-black pointer-events-none select-none"
                style={{ color: "rgba(0,255,136,0.05)", fontSize: "60px" }}>{group.tag}</span>
              <h3 className="font-bold text-xs mono tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>{group.category}</h3>
              <div className="flex flex-col gap-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="mono text-xs" style={{ color: "var(--muted)" }}>{skill.level}%</span>
                    </div>
                    <SkillBar level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
