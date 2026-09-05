"use client";

const education = [
  {
    degree: "BS in Software Engineering",
    institution: "University of Mianwali",
    year: "2026",
    grade: "Graduate",
    color: "#00d4ff",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    description: "Completed Bachelor's degree in Software Engineering with focus on software development, cybersecurity, and AI systems.",
    highlights: [
      "Final Year Project: AI-PECO (AI-powered Energy Management System)",
      "Focus on Software Development, Security, and AI",
      "Hands-on lab experience with penetration testing tools",
      "Participated in national-level coding competitions",
    ],
  },
];

const certifications = [
  {
    title: "First Frontier International Conference",
    issuer: "Mianwali",
    year: "2025",
    color: "#00d4ff",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    title: "Punjab Police Youth Internship Programme",
    issuer: "Punjab Police",
    year: "2023",
    color: "#00ff41",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff41" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: "NextGen CodeQuest — Coding & Graphics Designing",
    issuer: "NextGen",
    year: "—",
    color: "#00d4ff",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    title: "Codex 2024 Namal Poster Design Contest",
    issuer: "Namal University",
    year: "2024",
    color: "#00ff41",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff41" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      style={{
        padding: "100px 20px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#00d4ff", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "12px" }}>
            <span style={{ color: "#00ff41" }}>//</span> Academic Background
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
            Education &{" "}
            <span style={{ color: "#00d4ff", textShadow: "0 0 20px rgba(0,212,255,0.5)" }}>
              Certifications
            </span>
          </h2>
          <div style={{ width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #00d4ff, transparent)", margin: "0 auto" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "start",
          }}
          className="edu-grid"
        >
          {/* Education */}
          <div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                color: "#555",
                textTransform: "uppercase",
                fontFamily: "monospace",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div style={{ flex: 1, height: "1px", background: "rgba(0,212,255,0.15)" }} />
              EDUCATION
              <div style={{ flex: 1, height: "1px", background: "rgba(0,212,255,0.15)" }} />
            </div>

            {education.map((edu) => (
              <div
                key={edu.degree}
                className="hacker-card"
                style={{
                  padding: "32px",
                  borderRadius: "10px",
                  borderColor: "rgba(0,212,255,0.2)",
                }}
              >
                <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "12px",
                      border: "1px solid rgba(0,212,255,0.3)",
                      background: "rgba(0,212,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 20px rgba(0,212,255,0.15)",
                      flexShrink: 0,
                    }}
                  >
                    {edu.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Orbitron', monospace",
                        fontSize: "15px",
                        fontWeight: "700",
                        color: "#fff",
                        margin: "0 0 4px",
                        lineHeight: "1.3",
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <div style={{ color: "#00d4ff", fontSize: "13px", fontFamily: "monospace" }}>
                      {edu.institution}
                    </div>
                    <div style={{ color: "#555", fontSize: "11px", fontFamily: "monospace", marginTop: "2px" }}>
                      Class of {edu.year}
                    </div>
                  </div>
                </div>

                <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.7", fontFamily: "'Rajdhani', sans-serif", marginBottom: "16px" }}>
                  {edu.description}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {edu.highlights.map((h, i) => (
                    <div key={i} style={{ display: "flex", gap: "10px" }}>
                      <span style={{ color: "#00d4ff", fontSize: "11px", flexShrink: 0, marginTop: "1px" }}>▸</span>
                      <span style={{ color: "#777", fontSize: "12px", fontFamily: "monospace", lineHeight: "1.5" }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                color: "#555",
                textTransform: "uppercase",
                fontFamily: "monospace",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div style={{ flex: 1, height: "1px", background: "rgba(0,212,255,0.15)" }} />
              ACHIEVEMENTS
              <div style={{ flex: 1, height: "1px", background: "rgba(0,212,255,0.15)" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="hacker-card"
                  style={{ padding: "20px 24px", borderRadius: "8px" }}
                >
                  <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "8px",
                        border: `1px solid ${cert.color}33`,
                        background: `${cert.color}08`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {cert.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: "13px",
                          color: "#ccc",
                          fontFamily: "monospace",
                          lineHeight: "1.4",
                          marginBottom: "4px",
                        }}
                      >
                        {cert.title}
                      </div>
                      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <span style={{ fontSize: "11px", color: "#555", fontFamily: "monospace" }}>
                          {cert.issuer}
                        </span>
                        {cert.year !== "—" && (
                          <span
                            style={{
                              padding: "1px 8px",
                              borderRadius: "10px",
                              fontSize: "10px",
                              color: cert.color,
                              border: `1px solid ${cert.color}33`,
                              background: `${cert.color}08`,
                              fontFamily: "monospace",
                            }}
                          >
                            {cert.year}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal box */}
            <div
              style={{
                marginTop: "24px",
                padding: "20px",
                background: "#070a0f",
                border: "1px solid rgba(0,212,255,0.12)",
                borderRadius: "8px",
                fontFamily: "monospace",
              }}
            >
              <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
              </div>
              <div style={{ fontSize: "12px", lineHeight: "1.8" }}>
                <div style={{ color: "#00ff41" }}>$ whoami</div>
                <div style={{ color: "#888" }}>M Afseh Muneer</div>
                <div style={{ color: "#00ff41", marginTop: "4px" }}>$ cat role.txt</div>
                <div style={{ color: "#888" }}>Software Engineer | Penetration Tester</div>
                <div style={{ color: "#00ff41", marginTop: "4px" }}>$ echo $LOCATION</div>
                <div style={{ color: "#888" }}>Lahore, Pakistan</div>
                <div style={{ color: "#00ff41", marginTop: "4px" }}>$ cat contact.txt</div>
                <div style={{ color: "#888" }}>Afsehm53@gmail.com</div>
                <div style={{ color: "#00d4ff", marginTop: "4px" }}>█<span style={{ animation: "blink 1s infinite" }}>_</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
