import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient px-4 relative overflow-hidden">
      {/* Floating Orbs */}
      <div className="floating-orb w-64 h-64 top-20 left-20 opacity-30"></div>
      <div className="floating-orb w-96 h-96 bottom-20 right-20 opacity-20"></div>
      <div className="floating-orb w-48 h-48 top-1/2 right-10 opacity-25"></div>

      {/* Mouse Follower */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-0 opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(193 100% 50% / 0.3), transparent)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.3s ease-out'
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-scale-in">
            Shivam Shah
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            B.Tech Computer Science Student specializing in Web Development, 
            Cybersecurity, and Data Science
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-slide-in-left">
          <Button 
            variant="default" 
            size="lg" 
            className="gradient-primary hover:shadow-glow-primary transition-smooth magnetic-hover animate-pulse-glow"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 hover:bg-primary/10 transition-smooth magnetic-hover shimmer"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            View Resume
          </Button>
        </div>

        <div className="flex justify-center gap-6 animate-slide-in-right">
          <a 
            href="https://github.com/sshivam-shah" 
            className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-smooth hover:shadow-glow-secondary magnetic-hover animate-float"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/sshivam-shah" 
            className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-smooth hover:shadow-glow-secondary magnetic-hover animate-float"
            style={{ animationDelay: '0.5s' }}
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:shivamshah3434@gmail.com" 
            className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-smooth hover:shadow-glow-secondary magnetic-hover animate-float"
            style={{ animationDelay: '1s' }}
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;