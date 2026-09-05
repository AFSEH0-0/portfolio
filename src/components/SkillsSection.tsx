"use client";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    color: "#00d4ff",
    skills: [
      { name: "Python", level: 88 },
      { name: "PHP", level: 78 },
      { name: "C / C++", level: 75 },
      { name: "JavaScript", level: 80 },
      { name: "SQL", level: 82 },
      { name: "Bash / Shell", level: 72 },
    ],
  },
  {
    title: "Cybersecurity",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff41" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: "#00ff41",
    skills: [
      { name: "Penetration Testing", level: 85 },
      { name: "Kali Linux / Ubuntu", level: 88 },
      { name: "Metasploit", level: 80 },
      { name: "WireShark", level: 82 },
      { name: "Vulnerability Assessment", level: 85 },
      { name: "Social Engineering", level: 75 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    color: "#00d4ff",
    skills: [
      { name: "XAMPP", level: 80 },
      { name: "Figma", level: 72 },
      { name: "Adobe Photoshop", level: 70 },
      { name: "Office Automation", level: 90 },
      { name: "OOP", level: 85 },
      { name: "Data Structures", level: 78 },
    ],
  },
];

const techBadges = [
  "Python", "PHP", "C++", "JavaScript", "SQL", "Bash",
  "Kali Linux", "Metasploit", "WireShark", "XAMPP",
  "Figma", "Adobe PS", "OOP", "Data Structures",
  "Pen Testing", "Ubuntu", "Social Engineering",
];

function SkillBar({ name, level, color, visible }: { name: string; level: number; color: string; visible: boolean }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontSize: "12px", color: "#bbb", fontFamily: "monospace", letterSpacing: "0.5px" }}>
          {name}
        </span>
        <span style={{ fontSize: "11px", color, fontFamily: "monospace" }}>
          {level}%
        </span>
      </div>
      <div
        style={{
          height: "3px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: visible ? `${level}%` : "0%",
            background: color === "#00ff41"
              ? "linear-gradient(90deg, #00ff41, #00d4ff)"
              : "linear-gradient(90deg, #00d4ff, #00ff41)",
            borderRadius: "2px",
            boxShadow: `0 0 8px ${color}80`,
            transition: "width 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "100px 20px",
        position: "relative",
        background: "rgba(0,212,255,0.01)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#00d4ff", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "12px" }}>
            <span style={{ color: "#00ff41" }}>//</span> Technical Arsenal
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
            Skills &{" "}
            <span style={{ color: "#00d4ff", textShadow: "0 0 20px rgba(0,212,255,0.5)" }}>
              Expertise
            </span>
          </h2>
          <div
            style={{
              width: "80px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #00d4ff, transparent)",
              margin: "0 auto",
            }}
          />
        </div>

        {/* Skill Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            marginBottom: "60px",
          }}
        >
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="hacker-card"
              style={{
                padding: "28px",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    border: `1px solid ${cat.color}33`,
                    background: `${cat.color}0a`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 12px ${cat.color}20`,
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Orbitron', monospace",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: cat.color,
                    margin: 0,
                    letterSpacing: "1px",
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              {cat.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  visible={visible}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tech Badges Cloud */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "10px",
              letterSpacing: "3px",
              color: "#555",
              textTransform: "uppercase",
              fontFamily: "monospace",
              marginBottom: "20px",
            }}
          >
            Technology Stack
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {techBadges.map((badge) => (
              <span
                key={badge}
                style={{
                  padding: "6px 14px",
                  border: "1px solid rgba(0,212,255,0.2)",
                  borderRadius: "4px",
                  fontSize: "11px",
                  color: "#888",
                  fontFamily: "monospace",
                  letterSpacing: "1px",
                  background: "rgba(0,212,255,0.04)",
                  cursor: "default",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.borderColor = "rgba(0,212,255,0.5)";
                  (e.currentTarget as HTMLSpanElement).style.color = "#00d4ff";
                  (e.currentTarget as HTMLSpanElement).style.background = "rgba(0,212,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.borderColor = "rgba(0,212,255,0.2)";
                  (e.currentTarget as HTMLSpanElement).style.color = "#888";
                  (e.currentTarget as HTMLSpanElement).style.background = "rgba(0,212,255,0.04)";
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
