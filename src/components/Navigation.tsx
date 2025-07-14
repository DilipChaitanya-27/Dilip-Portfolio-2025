import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Briefcase, Code, FolderOpen, Mail, ArrowUp } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId === "home" ? "hero" : sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setShowScrollTop(scrollPosition > 500);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id === "home" ? "hero" : item.id);
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId === "hero" ? "home" : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass backdrop-blur-lg shadow-elegant' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-2xl font-heading font-bold gradient-text hover-scale transition-all duration-300"
              >
                Dilip
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 hover-scale ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground shadow-glow'
                        : 'text-muted-foreground hover:text-foreground hover:bg-white/10'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                variant="hero" 
                size="sm"
                onClick={() => scrollToSection("contact")}
                className="hover-scale"
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl glass hover:bg-white/10 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass backdrop-blur-lg border-t border-white/10">
            <div className="container mx-auto px-6 py-4">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full px-4 py-3 rounded-xl text-left font-medium transition-all duration-300 flex items-center gap-3 ${
                        activeSection === item.id
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:text-foreground hover:bg-white/10'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      {item.label}
                    </button>
                  );
                })}
                <div className="pt-4 border-t border-white/10">
                  <Button 
                    variant="hero" 
                    size="sm"
                    onClick={() => scrollToSection("contact")}
                    className="w-full"
                  >
                    Let's Talk
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 p-3 bg-primary text-primary-foreground rounded-full shadow-glow hover-scale transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </>
  );
};

export default Navigation;