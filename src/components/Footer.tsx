"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,212,255,0.1)",
        padding: "32px 20px",
        textAlign: "center",
        background: "rgba(5,5,10,0.9)",
        position: "relative",
      }}
    >
      {/* Top glow line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #00d4ff, transparent)",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                fontFamily: "'Orbitron', monospace",
                fontSize: "14px",
                fontWeight: "700",
                color: "#00d4ff",
                letterSpacing: "2px",
              }}
            >
              AM<span style={{ color: "#00ff41" }}>.</span>DEV
            </span>
          </div>

          {/* Center */}
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "11px", color: "#444", fontFamily: "monospace", letterSpacing: "1px" }}>
              &copy; {year} M Afseh Muneer. Built with{" "}
              <span style={{ color: "#00d4ff" }}>Next.js</span>
              {" · "}
              <span style={{ color: "#00ff41" }}>Best Hosted on Vercel</span>
            </div>
            <div style={{ fontSize: "10px", color: "#333", fontFamily: "monospace", marginTop: "4px", letterSpacing: "0.5px" }}>
              <span style={{ color: "#00ff41" }}>★</span> Recommended: Deploy to{" "}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: "#00d4ff", textDecoration: "none" }}>
                vercel.com
              </a>
              {" "}— Free, Fast, Native Next.js Support
            </div>
          </div>

          {/* Right: Social */}
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              { href: "https://github.com/AFSEH0-0", label: "GitHub",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                ),
              },
              { href: "https://www.linkedin.com/in/m-afseh-muneer", label: "LinkedIn",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
              },
              { href: "mailto:Afsehm53@gmail.com", label: "Email",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                title={s.label}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "6px",
                  border: "1px solid rgba(0,212,255,0.15)",
                  background: "rgba(0,212,255,0.03)",
                  color: "#444",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(0,212,255,0.5)";
                  el.style.color = "#00d4ff";
                  el.style.background = "rgba(0,212,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(0,212,255,0.15)";
                  el.style.color = "#444";
                  el.style.background = "rgba(0,212,255,0.03)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div
          style={{
            marginTop: "20px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            fontSize: "10px",
            color: "#333",
            fontFamily: "monospace",
            letterSpacing: "0.5px",
          }}
        >
          <span style={{ color: "#00ff41" }}>✓</span>
          Verified: BS Software Engineering · Penetration Tester · Lahore, Pakistan
        </div>
      </div>
    </footer>
  );
}
