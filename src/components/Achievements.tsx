import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Cloud } from "lucide-react";
import { useEffect, useRef } from "react";

const achievements = [
  {
    icon: Cloud,
    title: "AWS Academy Graduate",
    subtitle: "Cloud Architecting",
    description: "Completed 60+ hours of hands-on training with credential verification on Credly",
    badge: "Cloud Computing",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Award,
    title: "Capstone Project",
    subtitle: "AWS Cloud Architecting Lab",
    description: "Designed and deployed scalable, fault-tolerant cloud solution using VPC, Load Balancing, and Auto-scaling",
    badge: "Architecture",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: BookOpen,
    title: "Research Publication",
    subtitle: "ICICC-2025, University of Delhi",
    description: "Co-authored paper on CNN-Based Hybrid Model for Automated Detection of Acute Lymphoblastic Leukemia",
    badge: "Research",
    color: "from-green-500 to-emerald-500"
  }
];

const Achievements = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.achievement-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-scale-in');
                card.classList.remove('opacity-0');
              }, index * 200);
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
    <section ref={sectionRef} className="py-20 px-4 bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Key Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition and accomplishments in technology and research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="achievement-card bg-card border-border card-hover text-center p-8 opacity-0 relative group overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardContent className="space-y-4 relative z-10">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all duration-300">
                  <achievement.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <Badge 
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                >
                  {achievement.badge}
                </Badge>

                <h3 className="text-xl font-semibold text-primary group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-sm font-medium text-muted-foreground">
                  {achievement.subtitle}
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;