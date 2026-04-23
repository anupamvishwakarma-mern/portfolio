"use client";
import { useEffect, useState } from "react";
import { ArrowDown, Mail, Phone } from "lucide-react";

const roles = ["Full-Stack Developer", "MERN Stack Expert", "React.js Specialist", "Node.js Engineer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIndex];
    const i = displayed.length;
    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative overflow-hidden grid-dot-bg" style={{ paddingTop: "80px" }}>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 rounded-full pulse-glow-anim" style={{ background: "var(--accent)" }} />
          <span className="mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>Available for work</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold leading-none tracking-tight mb-4">
          Anupam<br />
          <span style={{ color: "var(--accent)" }}>Kumar</span>
        </h1>

        <div className="flex items-center gap-2 my-6">
          <span className="mono text-lg md:text-2xl" style={{ color: "var(--muted)" }}>&gt;</span>
          <span className="mono text-lg md:text-2xl font-bold">
            {displayed}<span className="cursor-blink" style={{ color: "var(--accent)" }}>|</span>
          </span>
        </div>

        <p className="max-w-2xl text-base md:text-lg leading-relaxed mb-10" style={{ color: "var(--muted)" }}>
          4 years of hands-on experience crafting scalable, high-performance web applications.
          Specialized in the MERN ecosystem — from pixel-perfect UIs to robust backend APIs.
          Passionate about clean code and exceptional user experiences.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a href="#projects" className="px-8 py-3 font-bold text-sm mono tracking-wider transition-all hover:scale-105"
            style={{ background: "var(--accent)", color: "var(--bg)" }}>
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 font-bold text-sm mono tracking-wider border transition-all"
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}>
            Get In Touch
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a href="mailto:akv59199@gmail.com" className="flex items-center gap-2 mono text-xs transition-colors"
            style={{ color: "var(--muted)" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--accent)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--muted)"}>
            <Mail size={14} /> akv59199@gmail.com
          </a>
          <a href="tel:8303079896" className="flex items-center gap-2 mono text-xs transition-colors"
            style={{ color: "var(--muted)" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--accent)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--muted)"}>
            <Phone size={14} /> +91 8303079896
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "var(--muted)" }}>
        <span className="mono text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="float-anim" />
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 mono font-black pointer-events-none select-none hidden lg:block"
        style={{ color: "rgba(0,255,136,0.04)", fontSize: "200px", lineHeight: 1 }}>
        4Y
      </div>
    </section>
  );
}
