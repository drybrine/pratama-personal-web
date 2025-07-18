import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Users, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always exploring cutting-edge technologies"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering high-quality results"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a love for creating innovative digital solutions. 
            With expertise in modern web technologies and a keen eye for design, I transform ideas into 
            compelling user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in-left">
            <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              My journey in tech began with curiosity and has evolved into a passion for building 
              meaningful digital experiences. I specialize in full-stack development, working with 
              modern frameworks and tools to create scalable, efficient applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in continuous learning and staying updated with the latest industry trends. 
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            {highlights.map((item, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;