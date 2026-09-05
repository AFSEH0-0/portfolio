"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const TITLES = [
  "Software Engineer",
  "Penetration Tester",
  "Ethical Hacker",
  "Security Researcher",
  "Full Stack Developer",
];

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((i) => (i + 1) % TITLES.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  // Glitch effect trigger
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        paddingTop: "80px",
        padding: "80px 20px 40px",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(0,212,255,0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,255,65,0.03) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "60px",
          alignItems: "center",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* Left Content */}
        <div>
          {/* Status Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              border: "1px solid rgba(0,255,65,0.3)",
              borderRadius: "20px",
              marginBottom: "28px",
              background: "rgba(0,255,65,0.04)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#00ff41",
                boxShadow: "0 0 8px rgba(0,255,65,0.8)",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                color: "#00ff41",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              Available for Opportunities
            </span>
          </div>

          {/* Name */}
          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                fontSize: "13px",
                color: "#00d4ff",
                letterSpacing: "4px",
                textTransform: "uppercase",
                fontFamily: "'Share Tech Mono', monospace",
                marginBottom: "12px",
              }}
            >
              <span style={{ color: "#00ff41" }}>&lt;</span> Hello World{" "}
              <span style={{ color: "#00ff41" }}>/&gt;</span>
            </div>

            <h1
              style={{
                fontFamily: "'Orbitron', monospace",
                fontSize: "clamp(32px, 6vw, 62px)",
                fontWeight: "900",
                lineHeight: "1.1",
                margin: 0,
                position: "relative",
              }}
              className={glitch ? "glitch-active" : ""}
            >
              <span
                style={{
                  color: "#fff",
                  display: "block",
                }}
              >
                M AFSEH
              </span>
              <span
                style={{
                  color: "#00d4ff",
                  textShadow: "0 0 20px rgba(0,212,255,0.6), 0 0 40px rgba(0,212,255,0.3)",
                  display: "block",
                }}
              >
                MUNEER
              </span>
            </h1>
          </div>

          {/* Typing Title */}
          <div
            style={{
              height: "36px",
              display: "flex",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                color: "#00ff41",
                fontSize: "11px",
                fontFamily: "monospace",
                marginRight: "10px",
                opacity: 0.7,
              }}
            >
              ~/role:
            </span>
            <span
              style={{
                fontSize: "clamp(16px, 3vw, 22px)",
                color: "#00d4ff",
                fontFamily: "'Share Tech Mono', monospace",
                letterSpacing: "1px",
                textShadow: "0 0 10px rgba(0,212,255,0.4)",
              }}
            >
              {displayed}
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1.2em",
                  background: "#00d4ff",
                  marginLeft: "2px",
                  verticalAlign: "middle",
                  animation: "blink 1s infinite",
                }}
              />
            </span>
          </div>

          {/* Description */}
          <p
            style={{
              color: "#888",
              fontSize: "15px",
              lineHeight: "1.8",
              maxWidth: "540px",
              fontFamily: "'Rajdhani', sans-serif",
              marginBottom: "36px",
            }}
          >
            BS Software Engineering graduate with hands-on experience in{" "}
            <span style={{ color: "#00d4ff" }}>software development</span> and{" "}
            <span style={{ color: "#00ff41" }}>penetration testing</span>. Passionate about
            building secure applications and strengthening cybersecurity through ethical hacking
            and vulnerability assessment.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button
              onClick={() => scrollToSection("projects")}
              style={{
                padding: "12px 28px",
                background: "rgba(0,212,255,0.1)",
                border: "1px solid #00d4ff",
                color: "#00d4ff",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "'Share Tech Mono', monospace",
                cursor: "pointer",
                borderRadius: "4px",
                transition: "all 0.3s",
                boxShadow: "0 0 15px rgba(0,212,255,0.2)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "rgba(0,212,255,0.2)";
                el.style.boxShadow = "0 0 25px rgba(0,212,255,0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "rgba(0,212,255,0.1)";
                el.style.boxShadow = "0 0 15px rgba(0,212,255,0.2)";
              }}
            >
              View Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              style={{
                padding: "12px 28px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#888",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "'Share Tech Mono', monospace",
                cursor: "pointer",
                borderRadius: "4px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = "rgba(0,255,65,0.5)";
                el.style.color = "#00ff41";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = "rgba(255,255,255,0.15)";
                el.style.color = "#888";
              }}
            >
              Contact Me
            </button>

            <a
              href="https://github.com/AFSEH0-0"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "12px 20px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#666",
                fontSize: "12px",
                letterSpacing: "2px",
                fontFamily: "'Share Tech Mono', monospace",
                cursor: "pointer",
                borderRadius: "4px",
                transition: "all 0.3s",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(0,212,255,0.4)";
                el.style.color = "#00d4ff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(255,255,255,0.1)";
                el.style.color = "#666";
              }}
            >
              {/* GitHub SVG */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "48px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {[
              { value: "3+", label: "Years Experience" },
              { value: "10+", label: "Projects Built" },
              { value: "BS", label: "Degree (2026)" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "'Orbitron', monospace",
                    fontSize: "26px",
                    fontWeight: "700",
                    color: "#00d4ff",
                    textShadow: "0 0 15px rgba(0,212,255,0.5)",
                    lineHeight: "1",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#555",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginTop: "4px",
                    fontFamily: "monospace",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Avatar */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
          className="hero-avatar"
        >
          <div
            style={{
              position: "relative",
              width: "240px",
              height: "240px",
            }}
            className="float-animate"
          >
            {/* Outer ring */}
            <div
              style={{
                position: "absolute",
                inset: "-12px",
                borderRadius: "50%",
                border: "1px solid rgba(0,212,255,0.2)",
                animation: "spin 12s linear infinite",
              }}
            />
            {/* Rotating dashes */}
            <div
              style={{
                position: "absolute",
                inset: "-20px",
                borderRadius: "50%",
                border: "2px dashed rgba(0,212,255,0.12)",
                animation: "spin 20s linear infinite reverse",
              }}
            />

            {/* Avatar */}
            <div
              style={{
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid rgba(0,212,255,0.4)",
                boxShadow:
                  "0 0 30px rgba(0,212,255,0.3), 0 0 60px rgba(0,212,255,0.1), inset 0 0 30px rgba(0,212,255,0.05)",
                position: "relative",
              }}
            >
              <Image
                src="/images/avatar.png"
                alt="M Afseh Muneer"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              {/* Overlay tint */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,10,20,0.2)",
                  zIndex: 1,
                }}
              />
            </div>

            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: "0px",
                right: "-10px",
                background: "rgba(5,5,10,0.95)",
                border: "1px solid rgba(0,255,65,0.4)",
                borderRadius: "8px",
                padding: "6px 12px",
                fontSize: "10px",
                color: "#00ff41",
                letterSpacing: "1px",
                fontFamily: "monospace",
                whiteSpace: "nowrap",
                boxShadow: "0 0 15px rgba(0,255,65,0.2)",
              }}
            >
              🔒 Pen Tester
            </div>
          </div>

          {/* Social Links */}
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              {
                href: "https://github.com/AFSEH0-0",
                label: "GitHub",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                ),
              },
              {
                href: "https://www.linkedin.com/in/m-afseh-muneer",
                label: "LinkedIn",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
              },
              {
                href: "mailto:Afsehm53@gmail.com",
                label: "Email",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                title={social.label}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  border: "1px solid rgba(0,212,255,0.2)",
                  background: "rgba(0,212,255,0.05)",
                  color: "#555",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(0,212,255,0.6)";
                  el.style.color = "#00d4ff";
                  el.style.background = "rgba(0,212,255,0.12)";
                  el.style.boxShadow = "0 0 12px rgba(0,212,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(0,212,255,0.2)";
                  el.style.color = "#555";
                  el.style.background = "rgba(0,212,255,0.05)";
                  el.style.boxShadow = "none";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
        }}
        onClick={() => scrollToSection("about")}
      >
        <span style={{ fontSize: "10px", color: "#444", letterSpacing: "2px" }}>SCROLL</span>
        <div
          style={{
            width: "24px",
            height: "40px",
            border: "1px solid rgba(0,212,255,0.3)",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "8px",
              borderRadius: "2px",
              background: "#00d4ff",
              boxShadow: "0 0 6px rgba(0,212,255,0.6)",
              animation: "scrollDot 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .float-animate { animation: float 4s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-avatar { display: none !important; }
        }
      `}</style>
    </section>
  );
}
