import { useState, useMemo } from "react";
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

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const skillsList = useMemo(() => project.skills.split(" · "), [project.skills]);
  const hasMore = skillsList.length > 4;

  return (
    <article className="glass-card overflow-hidden card-shadow card-lift group rounded-[18px]">
      {/* Thumbnail */}
      <div className="aspect-video overflow-hidden relative">
        <img
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          loading="lazy"
          width={600}
          height={338}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-tight line-clamp-2">
            {project.title}
          </h3>

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Building2 className="w-4 h-4 text-primary" aria-hidden="true" />
              {project.association}
            </span>
            {project.duration && (
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                {project.duration}
              </span>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
          {project.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2" aria-label="Project skills">
          {skillsList.slice(0, expanded ? undefined : 4).map((skill, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
            >
              {skill}
            </span>
          ))}
          {hasMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer"
              aria-expanded={expanded}
            >
              {expanded ? "Show less" : `+${skillsList.length - 4} more`}
            </button>
          )}
        </div>

        <a
          href={project.view_project}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
        >
          <FolderOpen className="w-4 h-4" aria-hidden="true" />
          View Project
          <ExternalLink className="w-3 h-3" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-24 relative" aria-label="Featured projects">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
