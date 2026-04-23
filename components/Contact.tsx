"use client";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    background: "var(--surface2)", border: "1px solid var(--border)",
    color: "var(--text)", width: "100%", padding: "12px 16px", fontSize: "14px", outline: "none",
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: "var(--surface)" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)" }} />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <div className="section-line" />
          <span className="mono text-xs tracking-widest uppercase mb-3 block" style={{ color: "var(--accent)" }}>Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-extrabold">Contact Me</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--muted)" }}>
              I&apos;m actively looking for new opportunities. Whether you have a project in mind,
              a question, or just want to say hi — my inbox is always open!
            </p>
            <div className="flex flex-col gap-6">
              {[
                { icon: <Mail size={18} />, label: "Email", value: "akv59199@gmail.com", href: "mailto:akv59199@gmail.com" },
                { icon: <Phone size={18} />, label: "Phone", value: "+91 8303079896", href: "tel:8303079896" },
                { icon: <MapPin size={18} />, label: "Location", value: "Gurgaon, India", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.2)" }}>
                    <span style={{ color: "var(--accent)" }}>{item.icon}</span>
                  </div>
                  <div>
                    <p className="mono text-xs mb-0.5 uppercase tracking-wider" style={{ color: "var(--muted)" }}>{item.label}</p>
                    {item.href
                      ? <a href={item.href} className="font-medium hover:underline" style={{ color: "var(--text)" }}>{item.value}</a>
                      : <p className="font-medium">{item.value}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {["name", "email"].map((field) => (
              <div key={field}>
                <label className="mono text-xs uppercase tracking-wider block mb-2" style={{ color: "var(--muted)" }}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input name={field} type={field === "email" ? "email" : "text"}
                  value={form[field as keyof typeof form]} onChange={handleChange}
                  required placeholder={field === "email" ? "your@email.com" : "Your name"}
                  style={inputStyle} />
              </div>
            ))}
            <div>
              <label className="mono text-xs uppercase tracking-wider block mb-2" style={{ color: "var(--muted)" }}>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                placeholder="Tell me about your project..." style={{ ...inputStyle, resize: "none" }} />
            </div>
            <button type="submit" className="flex items-center justify-center gap-2 px-8 py-3 font-bold mono text-sm tracking-wider transition-all"
              style={{
                background: sent ? "rgba(0,255,136,0.2)" : "var(--accent)",
                color: sent ? "var(--accent)" : "var(--bg)",
                border: sent ? "1px solid var(--accent)" : "none",
              }}>
              {sent ? "Message Sent! ✓" : <><Send size={14} /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
