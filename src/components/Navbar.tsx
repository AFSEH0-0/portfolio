"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(5,5,10,0.97)"
          : "rgba(5,5,10,0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(0,212,255,0.2)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 0 20px rgba(0,212,255,0.08)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              border: "2px solid #00d4ff",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,212,255,0.08)",
              boxShadow: "0 0 10px rgba(0,212,255,0.3)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Terminal icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <polyline points="4 17 10 11 4 5" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="19" x2="20" y2="19" stroke="#00ff41" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span
            style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: "15px",
              fontWeight: "700",
              color: "#00d4ff",
              letterSpacing: "2px",
              textShadow: "0 0 10px rgba(0,212,255,0.5)",
            }}
          >
            AM<span style={{ color: "#00ff41" }}>.</span>DEV
          </span>
        </button>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "'Share Tech Mono', monospace",
                color:
                  activeSection === link.href.replace("#", "")
                    ? "#00d4ff"
                    : "#888",
                transition: "color 0.3s",
                padding: "4px 0",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#00d4ff";
              }}
              onMouseLeave={(e) => {
                if (activeSection !== link.href.replace("#", "")) {
                  (e.currentTarget as HTMLButtonElement).style.color = "#888";
                }
              }}
            >
              <span style={{ color: "#00ff41", marginRight: "4px" }}>//</span>
              {link.label}
              {activeSection === link.href.replace("#", "") && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "#00d4ff",
                    boxShadow: "0 0 6px rgba(0,212,255,0.8)",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "1px solid rgba(0,212,255,0.3)",
            borderRadius: "4px",
            cursor: "pointer",
            padding: "6px 10px",
            display: "none",
            flexDirection: "column",
            gap: "4px",
          }}
          className="hamburger-btn"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "20px",
                height: "2px",
                background: "#00d4ff",
                transition: "all 0.3s",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(4px, 4px)"
                    : menuOpen && i === 1
                    ? "scaleX(0)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translate(4px, -4px)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(5,5,10,0.98)",
            borderTop: "1px solid rgba(0,212,255,0.15)",
            padding: "16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                padding: "12px 16px",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "'Share Tech Mono', monospace",
                color: activeSection === link.href.replace("#", "") ? "#00d4ff" : "#888",
                borderLeft: activeSection === link.href.replace("#", "") ? "2px solid #00d4ff" : "2px solid transparent",
                transition: "all 0.2s",
              }}
            >
              <span style={{ color: "#00ff41", marginRight: "8px" }}>&gt;</span>
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
