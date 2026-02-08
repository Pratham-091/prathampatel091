import { useState } from "react";
import { FolderOpen, ExternalLink, Building2, Calendar } from "lucide-react";

interface Project {
  title: string;
  association: string;
  duration?: string;
  thumbnail: string;
  description: string;
  skills: string;
  view_project: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const [expandedSkills, setExpandedSkills] = useState<Record<number, boolean>>({});

  const toggleSkills = (index: number) => {
    setExpandedSkills((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="projects" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gradient-card rounded-2xl overflow-hidden card-shadow border border-border/50 card-lift group"
              >
                {/* Thumbnail */}
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold leading-tight line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4 text-primary" />
                        {project.association}
                      </span>
                      {project.duration && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.duration}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {project.skills.split(" · ").slice(0, expandedSkills[index] ? undefined : 4).map((skill, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                    {project.skills.split(" · ").length > 4 && (
                      <button
                        onClick={() => toggleSkills(index)}
                        className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer"
                      >
                        {expandedSkills[index] ? "Show less" : `+${project.skills.split(" · ").length - 4} more`}
                      </button>
                    )}
                  </div>
                  
                  <a 
                    href={project.view_project}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
                  >
                    <FolderOpen className="w-4 h-4" />
                    View Project
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;