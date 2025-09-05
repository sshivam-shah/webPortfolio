import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
{/*       <Skills /> */}
      <Achievements />
      <Contact />
    </div>
  );
};

export default Index;
