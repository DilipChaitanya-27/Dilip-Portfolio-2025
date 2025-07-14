import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Clock, CheckCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chaitudilip672@gmail.com",
      href: "mailto:chaitudilip672@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8217684556",
      href: "tel:+918217684556",
      color: "text-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: "#",
      color: "text-primary-glow"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "DilipChaitanya-27",
      href: "https://github.com/DilipChaitanya-27",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "p-dilip-sri-satya-chaitanya",
      href: "https://linkedin.com/in/p-dilip-sri-satya-chaitanya-56ba1329b",
      color: "hover:text-accent"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_n0f1l5k',
        'template_u7yux9f',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Dilip',
        },
        'NldHvCPcDMFqWK0fP'
      );
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, innovative projects, or just have a friendly chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="animate-slide-right">
            <Card className="glass p-8 hover-lift h-fit">
              <h3 className="text-2xl font-heading font-semibold mb-8 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-primary" />
                Get In Touch
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 group animate-fade-up" 
                         style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className={`p-3 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">{info.label}</p>
                        {info.href !== "#" ? (
                          <a href={info.href} className={`text-muted-foreground hover:text-primary transition-colors`}>
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">{info.value}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Response Time */}
              <div className="glass p-4 rounded-xl mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="font-medium">Response Time</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Usually within 24 hours on weekdays
                </p>
              </div>

              {/* Social Links */}
              <div className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
                <h4 className="font-semibold mb-4">Connect on Social Media</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a key={index} 
                         href={social.href} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className={`p-3 glass rounded-xl hover:bg-white/10 transition-all duration-300 hover-scale ${social.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                <Badge variant="outline" className="flex items-center gap-2 w-fit">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Currently Available for New Projects
                </Badge>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Card className="glass p-8 hover-lift">
              <h3 className="text-2xl font-heading font-semibold mb-8 flex items-center gap-3">
                <Send className="w-8 h-8 text-primary" />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="glass border-muted"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="glass border-muted"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    required
                    className="glass border-muted resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full hover-scale"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
              
              <div className="mt-6 p-4 glass rounded-xl animate-fade-up" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>All messages are secure and confidential</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        {/*
       <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '1s' }}>
          <Card className="glass p-8 max-w-3xl mx-auto hover-lift">
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Ready to Start Something Amazing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you have a project in mind, need technical consultation, or just want to connect 
              with a fellow developer, I'd love to hear from you. Let's create something extraordinary together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="hover-scale">
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </Button>
              <Button variant="outline" size="lg" className="hover-scale">
                <Phone className="w-5 h-5 mr-2" />
                Schedule a Call
              </Button>
            </div>
          </Card>
          </div>
          */}
      </div>
    </section>
  );
};

export default Contact;