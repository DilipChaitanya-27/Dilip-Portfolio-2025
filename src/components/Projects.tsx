import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Vehicle Detection System Using OpenCV",
      description: "A real-time computer vision system that detects and tracks vehicles using Python and OpenCV. Implemented grayscale conversion, noise filtering, bounding box drawing, and vehicle counting for traffic analysis.",
      image: "vehicle detection.png",
      technologies: ["Python", "OpenCV", "Computer Vision", "Image Processing"],
      githubUrl: "#",
      
    },
    {
      title: "Health Care Connect",
      description: "A comprehensive web-based healthcare management system facilitating communication between patients, doctors, and admins. Features include secure login, role-based dashboards, real-time appointments, and record tracking.",
      image: "healthcare.webp",
      technologies: ["Web Development", "Healthcare", "Database", "Real-time"],
      githubUrl: "#",
      
    },
    {
      title: "Sentiment Analysis on Movie Reviews",
      description: "A machine learning pipeline to classify movie reviews into positive, negative, or neutral categories. Applied tokenization, stopword removal, stemming, TF-IDF, and trained models like Logistic Regression, SVM, and Random Forest. Achieved over 90% accuracy.",
      image: "sentimental.png",
      technologies: ["Machine Learning", "NLP", "Python", "TF-IDF", "SVM"],
      githubUrl: "#",
     
    },
    {
      title: "Snake Game in Java",
      description: "A classic Snake Game developed using Java and Swing. Features include increasing speed levels, pause/resume functionality, score tracking, and sound effects using javax.sound.sampled.",
      image: "snake.jpg",
      technologies: ["Java", "Swing", "Game Development", "Sound Effects"],
      githubUrl: "#",
      
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creative implementations showcasing my technical expertise
          </p>
        </div>

        {/* All Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="glass overflow-hidden hover-lift group animate-scale-in transition-all duration-500" 
                  style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="glass" className="w-full" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Project Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    
                    
                  </span>
                  <span className="flex items-center gap-1">
                    
                   
                  </span>
                  <span className="flex items-center gap-1">
                    
                   
                  </span>
                </div>
                
                {/* GitHub Button */}
                <Button variant="outline" size="sm" className="w-full hover-scale" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '1s' }}>
          <Card className="glass p-8 max-w-2xl mx-auto hover-lift">
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Interested in My Work?
            </h3>
            <p className="text-muted-foreground mb-6">
              These projects represent just a fraction of my journey. I'm always working on new ideas 
              and love collaborating on innovative solutions.
            </p>
            <Button variant="hero" size="lg" className="hover-scale" asChild>
              <a href="https://github.com/DilipChaitanya-27" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All on GitHub
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
