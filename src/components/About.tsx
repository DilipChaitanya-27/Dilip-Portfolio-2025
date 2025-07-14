import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Acharya Institute of Technology, Bangalore",
      period: "Dec 2022 – May 2026",
      score: "CGPA: 8.5",
      icon: GraduationCap
    },
    {
      degree: "Pre-University (12th Grade)",
      institution: "Gotham Siddhartha PU College, Bangalore",
      period: "2020 – 2022",
      score: "Percentage: 93%",
      icon: Award
    },
    {
      degree: "Secondary Education (10th Grade)",
      institution: "ST. Thomas Convent & High School, Bangalore",
      period: "2020",
      score: "Percentage: 97.28%",
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions and continuously learning new technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="animate-slide-right">
            <div className="glass p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am P. Dilip Sri Satya Chaitanya, a passionate Computer Science engineering student at 
                Acharya Institute of Technology with a strong interest in software development and emerging technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I enjoy solving real-world problems through innovative projects in web platforms. I'm driven by a desire to learn continuously and create impactful 
                tech solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My particular focus areas include SQL, data structures and algorithms (DSA), full-stack development, UI/UX design, and exploring the transformative potential of artificial intelligence (AI).
              </p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <Badge variant="secondary" className="px-3 py-1">Problem Solver</Badge>
                <Badge variant="secondary" className="px-3 py-1">Collaborative Mindset</Badge>
                <Badge variant="secondary" className="px-3 py-1">Quick Learner</Badge>
                <Badge variant="secondary" className="px-3 py-1">Creative Thinker</Badge>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-heading font-semibold mb-8 text-center lg:text-left">
              <GraduationCap className="inline-block w-8 h-8 mr-3 text-primary" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => {
                const IconComponent = edu.icon;
                return (
                  <Card key={index} className="glass p-6 hover-lift transition-all duration-500" 
                        style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">{edu.degree}</h4>
                        <p className="text-muted-foreground mb-2">{edu.institution}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                          <span className="flex items-center gap-1 text-primary">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </span>
                          <Badge variant="outline" className="w-fit">
                            {edu.score}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;