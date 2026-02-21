import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NationalStatsBar from "@/components/NationalStatsBar";
import ProjectsSection from "@/components/ProjectsSection";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <NationalStatsBar />
        <ProjectsSection />
        <HowItWorks />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
