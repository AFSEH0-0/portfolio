"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 20px",
        position: "relative",
        background: "rgba(0,212,255,0.015)",
      }}
    >
      {/* Accent gradient */}
      <div style={{
        position: "absolute",
        top: "50%",
        right: 0,
        transform: "translateY(-50%)",
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#00d4ff", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "12px" }}>
            <span style={{ color: "#00ff41" }}>//</span> Who I Am
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
            About{" "}
            <span style={{ color: "#00d4ff", textShadow: "0 0 20px rgba(0,212,255,0.5)" }}>
              Me
            </span>
          </h2>
          <div style={{ width: "80px", height: "2px", background: "linear-gradient(90deg, transparent, #00d4ff, transparent)", margin: "0 auto" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left: Info */}
          <div>
            <div
              style={{
                fontSize: "11px",
                color: "#00ff41",
                fontFamily: "monospace",
                letterSpacing: "2px",
                marginBottom: "16px",
              }}
            >
              &gt; profile.load()
            </div>

            <h3
              style={{
                fontFamily: "'Orbitron', monospace",
                fontSize: "24px",
                fontWeight: "700",
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              M Afseh Muneer
            </h3>

            <p
              style={{
                color: "#777",
                fontSize: "14px",
                lineHeight: "1.9",
                fontFamily: "'Rajdhani', sans-serif",
                marginBottom: "24px",
              }}
            >
              I&apos;m a BS Software Engineering graduate from the University of Mianwali with
              a passion for building secure, efficient, and scalable applications. I specialize
              in both software development and penetration testing — combining the skills of
              a developer and a security professional.
            </p>

            <p
              style={{
                color: "#777",
                fontSize: "14px",
                lineHeight: "1.9",
                fontFamily: "'Rajdhani', sans-serif",
                marginBottom: "32px",
              }}
            >
              With over 3 years of hands-on experience in teaching, managing, and developing
              tech solutions, I bring a unique blend of technical expertise and strong
              communication skills. My hacker mindset drives me to think beyond conventional
              boundaries and anticipate vulnerabilities before they become threats.
            </p>

            {/* Info Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {[
                { label: "Name", value: "M Afseh Muneer" },
                { label: "Location", value: "Lahore, Pakistan" },
                { label: "Email", value: "Afsehm53@gmail.com" },
                { label: "Phone", value: "+92 315 6783693" },
                { label: "Degree", value: "BS Software Engineering" },
                { label: "Status", value: "Open to Work" },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ fontSize: "10px", color: "#444", letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "4px" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "13px", color: "#ccc", fontFamily: "monospace" }}>
                    {item.value === "Open to Work" ? (
                      <span style={{ color: "#00ff41" }}>● {item.value}</span>
                    ) : (
                      item.value
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Highlights */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                ),
                title: "Penetration Testing",
                desc: "Skilled in ethical hacking, vulnerability assessment, and network security using industry-standard tools like Metasploit and WireShark.",
                color: "#00d4ff",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00ff41" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                ),
                title: "Software Development",
                desc: "Experienced in building web and desktop applications using Python, PHP, JavaScript, C/C++, and modern development frameworks.",
                color: "#00ff41",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                ),
                title: "Teaching & Management",
                desc: "3+ years experience as a lecturer and coordinator across multiple academic institutions, combining technical teaching with administrative skills.",
                color: "#00d4ff",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00ff41" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                ),
                title: "AI & Machine Learning",
                desc: "Developed AI-PECO — a machine learning-powered energy management system combining IoT, cloud storage, and predictive analytics.",
                color: "#00ff41",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="hacker-card"
                style={{
                  padding: "20px 24px",
                  borderRadius: "8px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "8px",
                    border: `1px solid ${item.color}33`,
                    background: `${item.color}08`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: `0 0 12px ${item.color}20`,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Orbitron', monospace",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: item.color,
                      margin: "0 0 6px",
                      letterSpacing: "1px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ color: "#666", fontSize: "12px", lineHeight: "1.6", fontFamily: "'Rajdhani', sans-serif", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
