import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Python", "Java"],
    icon: "💻"
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "Express", "TailwindCSS", "HTML/CSS"],
    icon: "🌐"
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
    icon: "🗄️"
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Linux"],
    icon: "🛠️"
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.skill-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in-up');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="skill-card p-6 bg-card border-border card-hover opacity-0 group"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3 group-hover:animate-float">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-2 bg-secondary rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105"
                    style={{ animationDelay: `${skillIndex * 0.1}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;