export default function Footer() {
  return (
    <footer className="py-10 border-t" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="mono text-xs" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Anupam Kumar. All rights reserved.
        </span>
        <div className="mono text-xs" style={{ color: "var(--muted)" }}>
          Built with{" "}
          <span style={{ color: "var(--accent)" }}>Next.js</span>
          {" · "}
          <span style={{ color: "var(--accent)" }}>TypeScript</span>
          {" · "}
          <span style={{ color: "var(--accent)" }}>Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
