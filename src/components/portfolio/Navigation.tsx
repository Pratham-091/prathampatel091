 import { useState, useEffect } from "react";
 import { Menu, X } from "lucide-react";
 
 const navLinks = [
   { label: "About", href: "#about" },
   { label: "Experience", href: "#experience" },
   { label: "Education", href: "#education" },
   { label: "Certifications", href: "#certifications" },
   { label: "Projects", href: "#projects" },
   { label: "Contact", href: "#contact" },
 ];
 
 const Navigation = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   const handleLinkClick = () => {
     setIsMobileMenuOpen(false);
   };
 
   return (
     <nav
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         isScrolled
           ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg"
           : "bg-transparent"
       }`}
     >
       <div className="container mx-auto px-6">
         <div className="flex items-center justify-between h-16">
           {/* Logo/Name */}
           <a href="#" className="text-lg font-semibold text-gradient">
             PP
           </a>
 
           {/* Desktop Navigation */}
           <div className="hidden md:flex items-center gap-8">
             {navLinks.map((link) => (
               <a
                 key={link.href}
                 href={link.href}
                 className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
               >
                 {link.label}
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
               </a>
             ))}
           </div>
 
           {/* Mobile Menu Button */}
           <button
             className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             aria-label="Toggle menu"
           >
             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
         </div>
 
         {/* Mobile Navigation */}
         {isMobileMenuOpen && (
           <div className="md:hidden py-4 border-t border-border/50">
             <div className="flex flex-col gap-4">
               {navLinks.map((link) => (
                 <a
                   key={link.href}
                   href={link.href}
                   onClick={handleLinkClick}
                   className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                 >
                   {link.label}
                 </a>
               ))}
             </div>
           </div>
         )}
       </div>
     </nav>
   );
 };
 
 export default Navigation;