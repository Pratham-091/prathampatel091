interface AboutSectionProps {
  about: string;
  skills: string;
}

const AboutSection = ({ about, skills }: AboutSectionProps) => {
  const skillsList = skills.split(" • ");
  
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          {/* About Text */}
          <div className="bg-gradient-card rounded-2xl p-8 card-shadow border border-border/50">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {about}
            </p>
          </div>
          
          {/* Top Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center">Top Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skillsList.map((skill, index) => (
                <span 
                  key={index}
                  className="skill-badge"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;