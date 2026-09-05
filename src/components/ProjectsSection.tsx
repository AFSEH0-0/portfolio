"use client";

const featuredProject = {
  title: "AI-PECO",
  subtitle: "Final Year Project",
  description:
    "An AI-powered energy management system that monitors energy usage, predicts consumption, estimates costs, and recommends energy-saving strategies using IoT, cloud storage, machine learning, and an interactive web dashboard. Designed to reduce energy waste, lower electricity bills, and promote sustainable energy practices.",
  tags: ["Python", "IoT", "Machine Learning", "Cloud", "Web Dashboard", "AI"],
  icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  ),
  color: "#00d4ff",
  featured: true,
};

const miniProjects = [
  {
    title: "Round-Robin Scheduling Algorithm",
    tech: "Shell",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
      </svg>
    ),
    color: "#00ff41",
    description: "Process scheduling algorithm implementation with round-robin logic.",
  },
  {
    title: "E-Challan Maker",
    tech: "Web",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    color: "#00d4ff",
    description: "Digital traffic challan generation and management system.",
  },
  {
    title: "Face Lock System",
    tech: "Python",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
    color: "#00ff41",
    description: "Facial recognition-based lock/unlock security system.",
  },
  {
    title: "Photo Gallery",
    tech: "Web",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
    color: "#00d4ff",
    description: "Responsive web-based photo gallery with dynamic layout.",
  },
  {
    title: "TuckShop Management System",
    tech: "Web",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
    color: "#00ff41",
    description: "Complete canteen/tuck shop inventory and sales management system.",
  },
  {
    title: "Password Cracker",
    tech: "Python",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    color: "#00d4ff",
    description: "Ethical password auditing tool for security research purposes.",
  },
  {
    title: "Weather WebApp",
    tech: "Web",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
      </svg>
    ),
    color: "#00ff41",
    description: "Real-time weather data web application with API integration.",
  },
  {
    title: "Library Management System",
    tech: "C++",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
      </svg>
    ),
    color: "#00d4ff",
    description: "Full-featured library book and member management system in C++.",
  },
  {
    title: "Simple Cipher",
    tech: "Python",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-4 0v2M8 7V5a2 2 0 00-4 0v2"/>
        <circle cx="12" cy="14" r="2"/>
      </svg>
    ),
    color: "#00ff41",
    description: "Text encryption/decryption using classical cipher algorithms.",
  },
  {
    title: "Login Page",
    tech: "Python",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/>
        <polyline points="10 17 15 12 10 7"/>
        <line x1="15" y1="12" x2="3" y2="12"/>
      </svg>
    ),
    color: "#00d4ff",
    description: "Secure user authentication and login system with Python.",
  },
];

const techColors: Record<string, string> = {
  Python: "#00ff41",
  Shell: "#00d4ff",
  Web: "#7dd3fc",
  "C++": "#f0a500",
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: "100px 20px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#00d4ff", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "12px" }}>
            <span style={{ color: "#00ff41" }}>//</span> What I've Built
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
            Featured{" "}
            <span style={{ color: "#00d4ff", textShadow: "0 0 20px rgba(0,212,255,0.5)" }}>
              Projects
            </span>
          </h2>
          <div style={{ width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #00d4ff, transparent)", margin: "0 auto" }} />
        </div>

        {/* Featured Project */}
        <div
          className="hacker-card"
          style={{
            padding: "40px",
            borderRadius: "12px",
            marginBottom: "40px",
            borderColor: "rgba(0,212,255,0.25)",
            background: "rgba(0,212,255,0.03)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background accent */}
          <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "12px",
                border: "1px solid rgba(0,212,255,0.3)",
                background: "rgba(0,212,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(0,212,255,0.2)",
                flexShrink: 0,
              }}
            >
              {featuredProject.icon}
            </div>

            <div style={{ flex: 1, minWidth: "200px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "8px" }}>
                <h3
                  style={{
                    fontFamily: "'Orbitron', monospace",
                    fontSize: "22px",
                    fontWeight: "700",
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  {featuredProject.title}
                </h3>
                <span
                  style={{
                    padding: "3px 10px",
                    background: "rgba(0,212,255,0.1)",
                    border: "1px solid rgba(0,212,255,0.3)",
                    borderRadius: "20px",
                    fontSize: "10px",
                    color: "#00d4ff",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                  }}
                >
                  ⭐ {featuredProject.subtitle}
                </span>
              </div>

              <p style={{ color: "#777", fontSize: "14px", lineHeight: "1.8", fontFamily: "'Rajdhani', sans-serif", margin: "0 0 20px" }}>
                {featuredProject.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "4px 12px",
                      border: "1px solid rgba(0,255,65,0.25)",
                      borderRadius: "4px",
                      fontSize: "11px",
                      color: "#00ff41",
                      background: "rgba(0,255,65,0.05)",
                      fontFamily: "monospace",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mini Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {miniProjects.map((project) => (
            <div
              key={project.title}
              className="hacker-card"
              style={{
                padding: "24px",
                borderRadius: "8px",
                cursor: "default",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    border: `1px solid ${project.color}33`,
                    background: `${project.color}08`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: project.color,
                  }}
                >
                  {project.icon}
                </div>
                <span
                  style={{
                    padding: "3px 10px",
                    borderRadius: "20px",
                    fontSize: "10px",
                    fontFamily: "monospace",
                    letterSpacing: "1px",
                    color: techColors[project.tech] || "#888",
                    border: `1px solid ${techColors[project.tech] || "#555"}44`,
                    background: `${techColors[project.tech] || "#555"}0a`,
                  }}
                >
                  {project.tech}
                </span>
              </div>

              <h4
                style={{
                  fontFamily: "'Orbitron', monospace",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#ddd",
                  margin: "0 0 8px",
                  letterSpacing: "0.5px",
                }}
              >
                {project.title}
              </h4>

              <p style={{ color: "#555", fontSize: "12px", lineHeight: "1.6", fontFamily: "monospace", margin: 0 }}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
