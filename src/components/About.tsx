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

        <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
          {/* Profile Image in About Section */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 hover:rotate-2">
                <img 
                  src="/lovable-uploads/66531884-150f-4fb9-a5d1-09e8c25cba2e.png" 
                  alt="Surya working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary rounded-full animate-bounce"></div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6 animate-fade-in-left">
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
        </div>

        {/* Animated highlights grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="relative">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;