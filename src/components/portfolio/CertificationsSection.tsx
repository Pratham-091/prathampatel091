import { useState } from "react";
import { Award, ExternalLink, CheckCircle, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Certification {
  title: string;
  thumbnail: string;
  credential: string;
  skills: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="glass-card overflow-hidden card-shadow card-lift cursor-pointer group rounded-[18px]"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Thumbnail */}
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={cert.thumbnail} 
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  
                  {/* Verified Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-xs text-primary">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <h3 className="font-medium text-sm leading-tight line-clamp-2">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <a 
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Lightbox Dialog */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-4xl glass-card border-border">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold pr-8">
              {selectedCert?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedCert && (
            <div className="space-y-6">
              <img 
                src={selectedCert.thumbnail} 
                alt={selectedCert.title}
                className="w-full rounded-lg"
              />
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Skills Covered
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedCert.skills}
                </p>
                
                <a 
                  href={selectedCert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify Certificate
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificationsSection;