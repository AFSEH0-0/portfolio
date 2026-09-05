import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "M Afseh Muneer | Software Engineer & Penetration Tester",
  description:
    "Portfolio of M Afseh Muneer — BS Software Engineering graduate, Penetration Tester, and Secure Application Developer based in Lahore, Pakistan.",
  keywords: [
    "M Afseh Muneer",
    "Software Engineer",
    "Penetration Tester",
    "Cybersecurity",
    "Lahore",
    "Pakistan",
    "Portfolio",
  ],
  authors: [{ name: "M Afseh Muneer" }],
  openGraph: {
    title: "M Afseh Muneer | Software Engineer & Penetration Tester",
    description:
      "Portfolio of M Afseh Muneer — BS Software Engineering, Penetration Testing, Secure Development.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;600;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          backgroundColor: "#0a0a0f",
          color: "#e0e0e0",
          fontFamily: "'Share Tech Mono', 'Courier New', monospace",
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
