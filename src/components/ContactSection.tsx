"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate sending (replace with actual email service like EmailJS or Formspree)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(0,212,255,0.15)",
    borderRadius: "6px",
    color: "#ddd",
    fontSize: "13px",
    fontFamily: "'Share Tech Mono', monospace",
    outline: "none",
    transition: "border-color 0.3s",
    boxSizing: "border-box",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 20px",
        position: "relative",
        background: "rgba(0,10,5,0.4)",
      }}
    >
      {/* Glow accent */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "400px",
        height: "200px",
        background: "radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#00d4ff", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "12px" }}>
            <span style={{ color: "#00ff41" }}>//</span> Get In Touch
          </div>
          <h2
            style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: "700",
              color: "#fff",
              margin: 0,
              marginBottom: "16px",
            }}
          >
            Contact{" "}
            <span style={{ color: "#00d4ff", textShadow: "0 0 20px rgba(0,212,255,0.5)" }}>
              Me
            </span>
          </h2>
          <div style={{ width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #00d4ff, transparent)", margin: "0 auto 20px" }} />
          <p style={{ color: "#666", fontSize: "14px", fontFamily: "'Rajdhani', sans-serif", maxWidth: "500px", margin: "0 auto" }}>
            Have an opportunity or question? I&apos;m always open to discussing new projects,
            creative ideas, or opportunities to be part of your team.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "48px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: Contact Info */}
          <div>
            <h3
              style={{
                fontFamily: "'Orbitron', monospace",
                fontSize: "14px",
                fontWeight: "600",
                color: "#00d4ff",
                marginBottom: "24px",
                letterSpacing: "2px",
              }}
            >
              DIRECT CHANNELS
            </h3>

            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
                  </svg>
                ),
                label: "Email",
                value: "Afsehm53@gmail.com",
                href: "mailto:Afsehm53@gmail.com",
                color: "#00d4ff",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                ),
                label: "Phone",
                value: "+92 315 6783693",
                href: "tel:+923156783693",
                color: "#00ff41",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                ),
                label: "GitHub",
                value: "AFSEH0-0",
                href: "https://github.com/AFSEH0-0",
                color: "#00d4ff",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
                label: "LinkedIn",
                value: "M Afseh Muneer",
                href: "https://www.linkedin.com/in/m-afseh-muneer",
                color: "#00ff41",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                label: "Location",
                value: "Lahore, Pakistan",
                href: "#",
                color: "#00d4ff",
              },
            ].map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "center",
                  padding: "14px 16px",
                  marginBottom: "10px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "all 0.3s",
                  cursor: contact.href === "#" ? "default" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (contact.href !== "#") {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = `${contact.color}44`;
                    (e.currentTarget as HTMLAnchorElement).style.background = `${contact.color}06`;
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.02)";
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    border: `1px solid ${contact.color}33`,
                    background: `${contact.color}08`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: contact.color,
                    flexShrink: 0,
                  }}
                >
                  {contact.icon}
                </div>
                <div>
                  <div style={{ fontSize: "10px", color: "#444", letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "monospace" }}>{contact.label}</div>
                  <div style={{ fontSize: "13px", color: "#bbb", fontFamily: "monospace", marginTop: "2px" }}>{contact.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Right: Contact Form */}
          <div>
            <div
              className="hacker-card"
              style={{ padding: "32px", borderRadius: "10px" }}
            >
              <h3
                style={{
                  fontFamily: "'Orbitron', monospace",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#00d4ff",
                  marginBottom: "24px",
                  letterSpacing: "2px",
                }}
              >
                SEND A MESSAGE
              </h3>

              {status === "sent" ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "40px 20px",
                  }}
                >
                  <div style={{ fontSize: "40px", marginBottom: "16px" }}>✅</div>
                  <div
                    style={{
                      fontFamily: "'Orbitron', monospace",
                      fontSize: "14px",
                      color: "#00ff41",
                      marginBottom: "8px",
                    }}
                  >
                    Message Sent!
                  </div>
                  <div style={{ color: "#666", fontSize: "12px", fontFamily: "monospace" }}>
                    Thanks for reaching out. I&apos;ll respond soon.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "10px", color: "#555", letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "6px" }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        style={inputStyle}
                        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(0,212,255,0.5)"; }}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(0,212,255,0.15)"; }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "10px", color: "#555", letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "6px" }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        style={inputStyle}
                        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(0,212,255,0.5)"; }}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(0,212,255,0.15)"; }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ display: "block", fontSize: "10px", color: "#555", letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "6px" }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Job Opportunity / Project Inquiry"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      required
                      style={inputStyle}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(0,212,255,0.5)"; }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(0,212,255,0.15)"; }}
                    />
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <label style={{ display: "block", fontSize: "10px", color: "#555", letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "6px" }}>
                      Message
                    </label>
                    <textarea
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        minHeight: "120px",
                      }}
                      onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(0,212,255,0.5)"; }}
                      onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(0,212,255,0.15)"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    style={{
                      width: "100%",
                      padding: "14px",
                      background: status === "sending" ? "rgba(0,212,255,0.05)" : "rgba(0,212,255,0.1)",
                      border: "1px solid #00d4ff",
                      borderRadius: "6px",
                      color: "#00d4ff",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      fontFamily: "'Share Tech Mono', monospace",
                      cursor: status === "sending" ? "not-allowed" : "pointer",
                      transition: "all 0.3s",
                      boxShadow: "0 0 15px rgba(0,212,255,0.15)",
                    }}
                    onMouseEnter={(e) => {
                      if (status !== "sending") {
                        (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,212,255,0.2)";
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 25px rgba(0,212,255,0.35)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,212,255,0.1)";
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 15px rgba(0,212,255,0.15)";
                    }}
                  >
                    {status === "sending" ? "Transmitting..." : "Send Message"}
                  </button>

                  <p style={{ textAlign: "center", fontSize: "11px", color: "#444", fontFamily: "monospace", marginTop: "12px" }}>
                    Or reach me directly at{" "}
                    <a href="mailto:Afsehm53@gmail.com" style={{ color: "#00d4ff", textDecoration: "none" }}>
                      Afsehm53@gmail.com
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
