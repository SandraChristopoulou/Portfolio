import HeroSection from "@/components/HeroSection";
import Projects from "@/app/projects/page";
import AboutMe from "./about/page";

export default function Home() {
  return (
    <main className="text-white min-h-screen "> 
   
    <HeroSection />
    <Projects />
    <AboutMe />  
    </main> 
  );
}
