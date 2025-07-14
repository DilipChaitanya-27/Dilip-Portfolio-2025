import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "IBM SkillsBuild Internship",
      company: "IBM SkillsBuild",
      location: "Remote",
      period: "Nov – Dec 2023",
      description: [
        "Developed AI-based solutions for real-world challenges using hands-on tools and techniques",
        "Completed IBM-certified modules on AI, NLP, and ML",
        "Built a final AI-based project showcasing acquired skills"
      ],
      skills: ["Artificial Intelligence", "Natural Language Processing", "Machine Learning", "Python"],
      type: "Internship"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey and internship experiences that shaped my expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass p-8 hover-lift animate-scale-in transition-all duration-500 mb-8" 
                  style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon and Company Info */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center hover-scale">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-heading font-semibold mb-2 text-primary">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-4 text-muted-foreground mb-2">
                        <span className="font-medium">{exp.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </Badge>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="hover-scale cursor-default">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Looking for New Opportunities
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on innovative projects and collaborate with amazing teams. 
              Let's create something wonderful together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:chaitudilip672@gmail.com" 
                 className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 hover-scale">
                <ExternalLink className="w-4 h-4" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;