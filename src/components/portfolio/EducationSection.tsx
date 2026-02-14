import { GraduationCap } from "lucide-react";

interface EducationSectionProps {
  education: string[];
}

const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Education</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          {/* Education Timeline */}
          <div className="space-y-6">
            {education.map((item, index) => (
              <div 
                key={index}
                className="glass-card rounded-[18px] p-6 card-shadow card-lift flex gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <p className="text-muted-foreground leading-relaxed self-center">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;