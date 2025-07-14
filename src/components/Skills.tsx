import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Wrench, Database, Palette, Brain, Monitor } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "C++", description: "Data structures & algorithms" },
        { name: "Python", description: "Machine learning & web scraping" },
        { name: "Java", description: "Object-oriented programming" },
        { name: "JavaScript", description: "Frontend & basic backend" }
      ]
    },
    {
      title: "Web Development",
      icon: Monitor,
      skills: [
        { name: "HTML/CSS", description: "Modern responsive design" },
        { name: "React", description: "Component-based development" },
        { name: "Node.js", description: "Backend development" },
        { name: "UI/UX Design", description: "User-centered design" }
      ]
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: [
        { name: "VS Code", description: "Primary development environment" },
        { name: "Git/GitHub", description: "Version control & collaboration" },
        { name: "Jupyter Notebook", description: "Data science & prototyping" },
        { name: "IDLE", description: "Python development" }
      ]
    },
    {
      title: "Core Technologies",
      icon: Database,
      skills: [
        { name: "Data Structures", description: "Algorithms & optimization" },
        { name: "OOP", description: "Object-oriented programming" },
        { name: "SQL", description: "Database management" },
        { name: "Java", description: "Programming Language" }
      ]
    }
  ];

  const coreAreas = [
    "Frontend Development",
    "UI/UX Design", 
    "Machine Learning",
    "Full Stack",
    "SQL",
    "Problem Solving",
    "Team Collaboration"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Constantly learning and evolving my technical expertise across various domains
          </p>
        </div>

        {/* Core Areas */}
        <div className="mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-heading font-semibold text-center mb-8">
            <Brain className="inline-block w-8 h-8 mr-3 text-primary" />
            Core Areas of Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {coreAreas.map((area, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-base hover-scale cursor-default transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {area}
              </Badge>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card key={categoryIndex} className="glass p-8 hover-lift animate-scale-in transition-all duration-500" 
                    style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-primary rounded-xl">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="animate-fade-up" 
                         style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <Card className="glass p-8 text-center hover-lift max-w-3xl mx-auto">
            <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-semibold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground leading-relaxed">
              Technology evolves rapidly, and I believe in staying ahead of the curve. I'm constantly 
              exploring new frameworks, tools, and methodologies to enhance my skillset and deliver 
              cutting-edge solutions. My approach combines theoretical knowledge with hands-on practice 
              to build robust, scalable applications.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;