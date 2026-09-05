import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0f",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </div>

      {/* Chatbot — Genay */}
      <Chatbot />
    </main>
  );
}
