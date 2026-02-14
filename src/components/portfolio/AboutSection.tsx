import { useMemo } from "react";

interface AboutSectionProps {
  about: string;
  skills: string;
}

const AboutSection = ({ about, skills }: AboutSectionProps) => {
  const skillsList = useMemo(() => skills.split(" • "), [skills]);

  return (
    <section id="about" className="py-24 relative" aria-label="About me">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
          </div>

          {/* About Text */}
          <div className="glass-card rounded-[18px] p-8 card-shadow">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {about}
            </p>
          </div>

          {/* Top Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center">Top Skills</h3>
            <ul className="flex flex-wrap justify-center gap-3 list-none" aria-label="Top skills">
              {skillsList.map((skill, index) => (
                <li key={index}>
                  <span
                    className="skill-badge"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
