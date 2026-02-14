import { Linkedin } from "lucide-react";

interface LinkedInButtonProps {
  url: string;
}

const LinkedInButton = ({ url }: LinkedInButtonProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-button bottom-6 right-6 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform glow"
      aria-label="Connect with Pratham Patel on LinkedIn"
    >
      <Linkedin className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
    </a>
  );
};

export default LinkedInButton;
