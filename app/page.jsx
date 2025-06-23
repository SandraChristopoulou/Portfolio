import HeroSection from "@/components/HeroSection";
import Projects from "@/app/projects/page";
import AboutMe from "./about/page";
import ContactForm from "@/app/contact/page";


export default function Home() {
  return (
    <main className="text-white min-h-screen "> 
   <HeroSection /> 
    <AboutMe />
    <Projects />
   
    <ContactForm />
    </main> 
  );
}
