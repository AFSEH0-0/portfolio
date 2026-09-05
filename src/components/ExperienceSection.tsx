"use client";

const experiences = [
  {
    role: "Coordinator",
    company: "Chashni The Sweet House",
    period: "Current",
    type: "Current",
    color: "#00ff41",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff41" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    description:
      "Working as a Coordinator at Chashni The Sweet House, managing daily operations and ensuring smooth coordination across all departments.",
    responsibilities: [
      "Coordinating between departments to streamline daily operations",
      "Managing scheduling, staff assignments, and task delegation",
      "Handling customer relations and resolving queries professionally",
      "Supporting business administration and documentation tasks",
      "Monitoring inventory and reporting operational metrics",
    ],
  },
  {
    role: "Manager & Computer Instructor",
    company: "U3C Computer College",
    period: "7 Months",
    type: "Past",
    color: "#00d4ff",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    description:
      "Managed and operated the computer labs while also teaching computer subjects to students of various levels.",
    responsibilities: [
      "Managed computer labs and maintained hardware/software systems",
      "Taught computer subjects and technical skills to students",
      "Supervised students and ensured academic discipline",
      "Handled documentation, records, and institutional reporting",
      "Provided technical support for systems, software, and networks",
      "Coordinated with staff for smooth college operations",
    ],
  },
  {
    role: "Lecturer & Administrative Coordinator",
    company: "Mehzab, Hudebia, Bright Career & Alpha Students Academy",
    period: "3 Years (Left Alpha Students Academy: Aug 1, 2026)",
    type: "Past",
    color: "#00d4ff",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    description:
      "Served as a Lecturer and Administrative Coordinator across multiple educational institutions, contributing to both academic and operational excellence.",
    responsibilities: [
      "Taught computer and IT subjects to students of diverse backgrounds",
      "Managed student records, academic documentation, and reports",
      "Supported computer operations and internet connectivity",
      "Coordinated with staff, students, and parents effectively",
      "Assisted in daily administration and institutional planning",
      "Handled IT infrastructure and technical troubleshooting",
    ],
  },
  {
    role: "Computer Operator",
    company: "Noor Photoshop",
    period: "3 Months",
    type: "Past",
    color: "#00ff41",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff41" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2"/>
        <path d="M9 14l3-3 3 3M12 11v7"/>
      </svg>
    ),
    description:
      "Operated computer systems and printing equipment in a professional photoshop and digital services setting.",
    responsibilities: [
      "Operated printing and scanning equipment professionally",
      "Assisted customers with typing, formatting, and online applications",
      "Performed basic computer troubleshooting and maintenance",
      "Maintained accurate records of customer orders and transactions",
      "Supported digital design and document preparation tasks",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 20px",
        position: "relative",
        background: "rgba(0,10,5,0.4)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#00d4ff", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "12px" }}>
            <span style={{ color: "#00ff41" }}>//</span> Work History
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
            Professional{" "}
            <span style={{ color: "#00d4ff", textShadow: "0 0 20px rgba(0,212,255,0.5)" }}>
              Experience
            </span>
          </h2>
          <div style={{ width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #00d4ff, transparent)", margin: "0 auto" }} />
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: "20px",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(180deg, rgba(0,212,255,0.5), rgba(0,212,255,0.1))",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  gap: "32px",
                  position: "relative",
                }}
              >
                {/* Timeline dot */}
                <div style={{ flexShrink: 0, position: "relative", width: "40px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: `2px solid ${exp.color}44`,
                      background: `${exp.color}0a`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 15px ${exp.color}30`,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {exp.icon}
                  </div>
                </div>

                {/* Content */}
                <div
                  className="hacker-card"
                  style={{
                    flex: 1,
                    padding: "28px",
                    borderRadius: "10px",
                  }}
                >
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "8px" }}>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Orbitron', monospace",
                          fontSize: "15px",
                          fontWeight: "600",
                          color: "#fff",
                          margin: "0 0 4px",
                        }}
                      >
                        {exp.role}
                      </h3>
                      <div
                        style={{
                          fontSize: "13px",
                          color: exp.color,
                          fontFamily: "monospace",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {exp.company}
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                      <span
                        style={{
                          padding: "3px 12px",
                          borderRadius: "20px",
                          fontSize: "10px",
                          fontFamily: "monospace",
                          letterSpacing: "1px",
                          color: exp.color,
                          border: `1px solid ${exp.color}44`,
                          background: `${exp.color}0a`,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {exp.period}
                      </span>
                      {exp.type === "Current" && (
                        <span
                          style={{
                            padding: "2px 8px",
                            borderRadius: "20px",
                            fontSize: "9px",
                            fontFamily: "monospace",
                            letterSpacing: "1.5px",
                            color: "#00ff41",
                            border: "1px solid rgba(0,255,65,0.4)",
                            background: "rgba(0,255,65,0.08)",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#00ff41", display: "inline-block", boxShadow: "0 0 6px rgba(0,255,65,0.8)" }} />
                          ACTIVE
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.7", fontFamily: "'Rajdhani', sans-serif", margin: "12px 0 16px" }}>
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <span style={{ color: exp.color, fontSize: "12px", marginTop: "1px", flexShrink: 0 }}>▸</span>
                        <span style={{ color: "#777", fontSize: "12px", lineHeight: "1.6", fontFamily: "monospace" }}>
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
