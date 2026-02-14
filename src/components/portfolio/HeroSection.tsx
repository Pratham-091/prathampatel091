import { MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
      aria-label="Introduction"
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-dark" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30"
        style={{ background: "var(--gradient-glow)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative group"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden avatar-glow">
              <img
                src={profilePhoto}
                alt={`${name} — Digital Marketing Professional`}
                width={192}
                height={192}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-hero"
          >
            <span className="text-gradient glow-text">{name}</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            {tagline}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
            <span>{location}</span>
          </motion.div>

          {/* Resume Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
          >
            <Button asChild size="lg" className="gap-2 rounded-full px-8 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(255,109,41,0.5)] transition-all duration-300">
              <a href="/Pratham_Resume.pdf" download="Pratham_Patel_Resume.pdf">
                <Download className="w-4 h-4" aria-hidden="true" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
