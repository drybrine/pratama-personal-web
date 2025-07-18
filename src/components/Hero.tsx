import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";
import profileImage from "/lovable-uploads/66531884-150f-4fb9-a5d1-09e8c25cba2e.png";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-end animate-fade-in-left">
            <div className="relative">
              {/* Animated rings around profile */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse scale-110"></div>
              <div className="absolute inset-0 rounded-full bg-white/10 animate-ping scale-125"></div>
              
              {/* Profile image with elegant styling */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-glow hover:scale-105 transition-all duration-500">
                <img 
                  src={profileImage} 
                  alt="Surya Alamsyah Putera Pratama"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Floating elements around profile */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Surya Alamsyah
              <br />
              <span className="bg-gradient-to-r from-white to-accent-foreground bg-clip-text text-transparent">
                Putera Pratama
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Full-Stack Developer & Tech Enthusiast
              <br />
              Building digital experiences with passion and precision
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-elegant transition-all duration-300 hover:scale-105"
                onClick={scrollToAbout}
              >
                Explore My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;