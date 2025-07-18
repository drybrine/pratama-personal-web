import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript ES6+"]
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Python", "Express.js", "FastAPI", "RESTful APIs", "GraphQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "CI/CD", "Jest", "Cypress"]
    },
    {
      title: "Design & UI/UX",
      skills: ["Figma", "Adobe XD", "Responsive Design", "User Experience", "Prototyping", "Design Systems"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks that I use to build 
            exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-sm py-1 px-3 bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;