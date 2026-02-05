import { MapPin } from "lucide-react";
interface HeroSectionProps {
  name: string;
  tagline: string;
  location: string;
  profilePhoto: string;
}
const HeroSection = ({
  name,
  tagline,
  location,
  profilePhoto
}: HeroSectionProps) => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30" style={{
      background: "var(--gradient-glow)"
    }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Photo */}
          <div className="relative group">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden avatar-glow">
              <img src={profilePhoto} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
          
          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-gradient glow-text">{name}</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {tagline}
          </p>
          
          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{location}</span>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;