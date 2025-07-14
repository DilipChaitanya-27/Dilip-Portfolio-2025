import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/DilipChaitanya-27",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/p-dilip-sri-satya-chaitanya-56ba1329b",
      color: "hover:text-accent"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:chaitudilip672@gmail.com",
      color: "hover:text-primary-glow"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2 animate-fade-up">
            <button 
              onClick={scrollToTop}
              className="text-3xl font-heading font-bold gradient-text hover-scale transition-all duration-300 mb-4 block"
            >
              P. Dilip Sri Satya Chaitanya
            </button>
            <p className="text-muted-foreground mb-6 max-w-md">
              Aspiring Software Developer | Frontend Enthusiast | AI Explorer
              <br />
              Building innovative solutions with modern technologies.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass rounded-xl hover:bg-white/10 transition-all duration-300 hover-scale ${social.color}`}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-heading font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-heading font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Email:</span><br />
                chaitudilip672@gmail.com
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Phone:</span><br />
                +91-8217684556
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Location:</span><br />
                Bangalore, India
              </p>
            </div>
            
            <Button 
              variant="hero" 
              size="sm" 
              className="mt-6 hover-scale"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Let's Talk
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-up" 
               style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2025  P. Dilip Sri Satya Chaitanya. All rights reserved.</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover-scale"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;