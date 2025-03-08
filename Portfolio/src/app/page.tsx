import Education from "@/sections/Education";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import Projects from "@/sections/Projects";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <Projects />
      <Education />
      <ContactSection />
      <Footer />
    </div>
  );
}
