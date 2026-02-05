import { Briefcase, Calendar } from "lucide-react";

interface ExperienceProps {
  role: string;
  company: string;
  type: string;
  duration: string;
}

interface ExperienceSectionProps {
  experience: ExperienceProps;
}

const ExperienceSection = ({ experience }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          {/* Experience Card */}
          <div className="bg-gradient-card rounded-2xl p-8 card-shadow border border-border/50 card-lift">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 glow">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              
              {/* Content */}
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold">{experience.role}</h3>
                <p className="text-primary font-medium">{experience.company}</p>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {experience.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {experience.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;