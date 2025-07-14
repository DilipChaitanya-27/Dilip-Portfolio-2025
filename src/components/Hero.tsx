import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium animate-scale-in">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Hello, <span className="gradient-text">I'm Dilip</span>
              <br />
              <span className="text-3xl lg:text-5xl text-muted-foreground">
                Software Developer
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: '0.4s' }}>
              Aspiring Software Developer | Frontend Enthusiast | AI Explorer.
              Welcome! I'm a passionate CS student with a focus on solving real-world problems using innovative tech solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <Button 
  variant="hero" 
  size="lg" 
  className="hover-lift"
  onClick={() => scrollToSection('contact')}
>
  <Mail className="w-5 h-5" />
  Hire Me
</Button>

              <Button
    variant="hero"
    size="lg"
    className="hover-lift"
    asChild
  >
    <a href="/resume.pdf" download className="flex items-center gap-2">
      <Download className="w-5 h-5" />
       Resume
    </a>
  </Button>

            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-8 animate-fade-up" style={{ animationDelay: '0.8s' }}>
              <a href="https://github.com/DilipChaitanya-27" target="_blank" rel="noopener noreferrer" 
                 className="p-3 glass rounded-xl hover:bg-white/10 transition-all duration-300 hover-scale">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/p-dilip-sri-satya-chaitanya-56ba1329b" target="_blank" rel="noopener noreferrer"
                 className="p-3 glass rounded-xl hover:bg-white/10 transition-all duration-300 hover-scale">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '1s' }}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 hover-lift animate-glow">
                <img 
                  src="/profilepicture.jpg" 
                  alt="P. Dilip Sri Satya Chaitanya"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/30 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 glass rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;