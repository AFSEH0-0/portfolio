"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "bot";
  content: string;
  timestamp: string;
}

const SUGGESTED_QUESTIONS = [
  "Who is Afseh?",
  "What are his skills?",
  "Tell me about his projects",
  "What is his experience?",
  "How to contact him?",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "👾 Hello! I'm **Genay**, Afseh's AI assistant. Ask me anything about his skills, projects, experience, or education. I'm here to help!",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || loading) return;

    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMessage: Message = { role: "user", content: messageText, timestamp: now };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setShowSuggestions(false);

    try {
      const res = await fetch("/api/genay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText }),
      });

      const data = await res.json();
      const botTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: data.reply || "I couldn't process that. Please try again!",
          timestamp: botTime,
        },
      ]);
    } catch {
      const errTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Sorry, I had a connection issue. Please try again!",
          timestamp: errTime,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const formatMessage = (text: string) => {
    // Bold markdown
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} style={{ color: "#00d4ff" }}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      // Handle newlines
      return part.split("\n").map((line, j) => (
        <span key={`${i}-${j}`}>
          {line}
          {j < part.split("\n").length - 1 && <br />}
        </span>
      ));
    });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "2px solid #00d4ff",
          background: "rgba(5,5,10,0.95)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 20px rgba(0,212,255,0.5), 0 0 40px rgba(0,212,255,0.2)",
          transition: "all 0.3s ease",
          backdropFilter: "blur(12px)",
        }}
        aria-label="Open Genay Chatbot"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px rgba(0,212,255,0.7), 0 0 60px rgba(0,212,255,0.3)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(0,212,255,0.5), 0 0 40px rgba(0,212,255,0.2)";
        }}
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="14" rx="3" stroke="#00d4ff" strokeWidth="1.8"/>
            <path d="M8 18l4 4 4-4" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="8" cy="9" r="1.2" fill="#00ff41"/>
            <circle cx="12" cy="9" r="1.2" fill="#00d4ff"/>
            <circle cx="16" cy="9" r="1.2" fill="#00ff41"/>
          </svg>
        )}

        {/* Pulse ring */}
        {!isOpen && (
          <span
            style={{
              position: "absolute",
              top: "-4px",
              right: "-4px",
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#00ff41",
              border: "2px solid #0a0a0f",
              boxShadow: "0 0 8px rgba(0,255,65,0.8)",
            }}
          />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "96px",
            right: "24px",
            zIndex: 9998,
            width: "360px",
            maxWidth: "calc(100vw - 48px)",
            height: "500px",
            maxHeight: "calc(100vh - 140px)",
            display: "flex",
            flexDirection: "column",
            background: "rgba(5,5,10,0.98)",
            border: "1px solid rgba(0,212,255,0.3)",
            borderRadius: "12px",
            boxShadow: "0 0 40px rgba(0,212,255,0.2), 0 20px 60px rgba(0,0,0,0.8)",
            overflow: "hidden",
            animation: "slideUp 0.3s ease",
            backdropFilter: "blur(20px)",
          }}
        >
          <style>{`
            @keyframes slideUp {
              from { opacity: 0; transform: translateY(20px) scale(0.95); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>

          {/* Header */}
          <div
            style={{
              padding: "14px 16px",
              borderBottom: "1px solid rgba(0,212,255,0.15)",
              background: "rgba(0,212,255,0.04)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexShrink: 0,
            }}
          >
            {/* Bot Avatar */}
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "2px solid #00d4ff",
                background: "rgba(0,212,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 12px rgba(0,212,255,0.4)",
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="13" rx="2" stroke="#00d4ff" strokeWidth="1.8"/>
                <path d="M9 20h6M12 16v4" stroke="#00ff41" strokeWidth="1.8" strokeLinecap="round"/>
                <circle cx="8.5" cy="9.5" r="1.5" fill="#00ff41"/>
                <circle cx="15.5" cy="9.5" r="1.5" fill="#00d4ff"/>
                <path d="M8 13h8" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "'Orbitron', monospace",
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#00d4ff",
                  letterSpacing: "2px",
                }}
              >
                GENAY
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#00ff41",
                    boxShadow: "0 0 6px rgba(0,255,65,0.8)",
                    display: "inline-block",
                  }}
                />
                <span style={{ fontSize: "10px", color: "#00ff41", letterSpacing: "1px" }}>
                  ONLINE
                </span>
              </div>
            </div>

            <div style={{ fontSize: "10px", color: "#555", letterSpacing: "1px", fontFamily: "monospace" }}>
              v1.0
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: msg.role === "user" ? "row-reverse" : "row",
                  gap: "8px",
                  alignItems: "flex-end",
                }}
              >
                {msg.role === "bot" && (
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      border: "1px solid rgba(0,212,255,0.4)",
                      background: "rgba(0,212,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontSize: "10px" }}>👾</span>
                  </div>
                )}
                <div style={{ maxWidth: "80%" }}>
                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius:
                        msg.role === "user" ? "12px 12px 0 12px" : "12px 12px 12px 0",
                      background:
                        msg.role === "user"
                          ? "rgba(0,212,255,0.1)"
                          : "rgba(0,255,65,0.05)",
                      border:
                        msg.role === "user"
                          ? "1px solid rgba(0,212,255,0.25)"
                          : "1px solid rgba(0,255,65,0.15)",
                      fontSize: "13px",
                      lineHeight: "1.6",
                      color: msg.role === "user" ? "#c0e8f0" : "#c0f0c8",
                      fontFamily: "'Share Tech Mono', monospace",
                    }}
                  >
                    {formatMessage(msg.content)}
                  </div>
                  <div
                    style={{
                      fontSize: "9px",
                      color: "#444",
                      marginTop: "4px",
                      textAlign: msg.role === "user" ? "right" : "left",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {loading && (
              <div style={{ display: "flex", gap: "8px", alignItems: "flex-end" }}>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    border: "1px solid rgba(0,212,255,0.4)",
                    background: "rgba(0,212,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize: "10px" }}>👾</span>
                </div>
                <div
                  style={{
                    padding: "10px 16px",
                    borderRadius: "12px 12px 12px 0",
                    background: "rgba(0,255,65,0.05)",
                    border: "1px solid rgba(0,255,65,0.15)",
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="typing-dot"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Suggested Questions */}
            {showSuggestions && messages.length === 1 && (
              <div style={{ marginTop: "8px" }}>
                <div style={{ fontSize: "10px", color: "#555", marginBottom: "8px", letterSpacing: "1px" }}>
                  QUICK QUESTIONS:
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {SUGGESTED_QUESTIONS.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(q)}
                      style={{
                        background: "rgba(0,212,255,0.05)",
                        border: "1px solid rgba(0,212,255,0.2)",
                        borderRadius: "20px",
                        padding: "5px 12px",
                        fontSize: "11px",
                        color: "#00d4ff",
                        cursor: "pointer",
                        fontFamily: "'Share Tech Mono', monospace",
                        letterSpacing: "0.5px",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,212,255,0.12)";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,212,255,0.5)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,212,255,0.05)";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,212,255,0.2)";
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: "12px 16px",
              borderTop: "1px solid rgba(0,212,255,0.15)",
              background: "rgba(0,212,255,0.03)",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#00ff41", fontSize: "14px", fontFamily: "monospace" }}>
              &gt;
            </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
              placeholder="Ask about Afseh..."
              disabled={loading}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#e0e0e0",
                fontSize: "13px",
                fontFamily: "'Share Tech Mono', monospace",
                caretColor: "#00d4ff",
              }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              style={{
                background: "none",
                border: "1px solid rgba(0,212,255,0.3)",
                borderRadius: "6px",
                padding: "6px 10px",
                cursor: input.trim() && !loading ? "pointer" : "not-allowed",
                opacity: input.trim() && !loading ? 1 : 0.4,
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
              }}
              aria-label="Send message"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2" fill="rgba(0,212,255,0.15)" stroke="#00d4ff"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
