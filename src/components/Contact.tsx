import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shivamshah3434@gmail.com",
    href: "mailto:shivamshah3434@gmail.com",
    color: "text-blue-400"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 80938 90683",
    href: "tel:+918093890683",
    color: "text-green-400"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bhubaneswar, India",
    href: "#",
    color: "text-purple-400"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/sshivam-shah",
    color: "hover:text-gray-400"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/sshivam-shah",
    color: "hover:text-blue-400"
  }
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.contact-item');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate-fade-in-up');
                element.classList.remove('opacity-0');
              }, index * 100);
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
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Open to internship opportunities and collaboration on innovative projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <a 
              key={index}
              href={contact.href}
              className="contact-item opacity-0 block"
            >
              <Card className="bg-card border-border card-hover h-full group">
                <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                  <div className={`mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all duration-300`}>
                    <contact.icon className={`h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    {contact.label}
                  </p>
                  <p className="text-foreground group-hover:text-primary transition-colors duration-300 font-medium">
                    {contact.value}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center space-y-8">
          <div className="flex justify-center gap-6 contact-item opacity-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`p-4 rounded-full bg-card border border-border hover:bg-primary/10 hover:border-primary/50 transition-smooth hover:shadow-glow-secondary magnetic-hover animate-float ${social.color}`}
                aria-label={social.label}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          <div className="contact-item opacity-0">
            <Button 
              size="lg"
              className="gradient-primary hover:shadow-glow-primary transition-smooth magnetic-hover animate-pulse-glow"
            >
              <Mail className="mr-2 h-5 w-5" />
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;