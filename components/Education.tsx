import { GraduationCap } from "lucide-react";

const education = [
  { degree: "Master of Computer Science", institution: "CSJM University", location: "Kanpur, Uttar Pradesh", year: "May 2023" },
  { degree: "B.Sc. in Mathematics", institution: "Allahabad University", location: "Allahabad, Uttar Pradesh", year: "May 2020" },
  { degree: "Intermediate", institution: "Sarswati Vidya Mandir Inter College", location: "Fatehpur, Uttar Pradesh", year: "May 2015" },
  { degree: "High School", institution: "O P Y H S College", location: "Fatehpur, Uttar Pradesh", year: "May 2013" },
];

export default function Education() {
  return (
    <section className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="section-line" />
          <span className="mono text-xs tracking-widest uppercase mb-3 block" style={{ color: "var(--accent)" }}>Academic Background</span>
          <h2 className="text-4xl md:text-5xl font-extrabold">Education</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div key={i} className="p-6 card-hover flex items-start gap-5"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1"
                style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.2)" }}>
                <GraduationCap size={18} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">{edu.degree}</h3>
                <p className="font-medium text-sm mb-1" style={{ color: "var(--accent)" }}>{edu.institution}</p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>{edu.location}</p>
                <span className="inline-block mt-2 mono text-xs px-2 py-0.5"
                  style={{ background: "var(--surface2)", color: "var(--muted)", border: "1px solid var(--border)" }}>
                  {edu.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
