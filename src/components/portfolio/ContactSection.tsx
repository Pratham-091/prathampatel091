import { useState } from "react";
import { Mail, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
 
 interface ContactSectionProps {
   email: string;
   linkedin: string;
 }
 
 const ContactSection = ({ email, linkedin }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
 
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     setFormData((prev) => ({
       ...prev,
       [e.target.name]: e.target.value,
     }));
   };
 
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
        const { data, error } = await supabase.functions.invoke("send-contact-email", {
          body: {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
          },
        });

        if (error) throw error;

        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } catch (err) {
        console.error("Contact form error:", err);
        toast({
          title: "Error sending message",
          description: "Please try again or email me directly.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    };
 
   return (
     <section id="contact" className="py-24 relative">
       <div className="container mx-auto px-6">
         <div className="max-w-4xl mx-auto space-y-12">
           {/* Section Title */}
           <div className="text-center space-y-4">
             <h2 className="text-3xl md:text-4xl font-bold">
               Contact <span className="text-gradient">Me</span>
             </h2>
             <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
           </div>
 
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {/* Contact Info */}
             <div className="space-y-6">
               <p className="text-muted-foreground leading-relaxed">
                 I'm always open to discussing new opportunities, creative ideas, or collaborations. 
                 Feel free to reach out!
               </p>
 
               <div className="space-y-4">
                 <a
                   href={`mailto:${email}`}
                  className="flex items-center gap-4 p-4 glass-card rounded-[18px] card-shadow card-lift group"
                 >
                   <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                     <Mail className="w-5 h-5 text-primary" />
                   </div>
                   <div>
                     <p className="text-sm text-muted-foreground">Email</p>
                     <p className="text-foreground font-medium">{email}</p>
                   </div>
                 </a>
 
                 <a
                   href={linkedin}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-4 p-4 glass-card rounded-[18px] card-shadow card-lift group"
                 >
                   <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                     <Linkedin className="w-5 h-5 text-primary" />
                   </div>
                   <div>
                     <p className="text-sm text-muted-foreground">LinkedIn</p>
                     <p className="text-foreground font-medium">Connect with me</p>
                   </div>
                 </a>
                </div>
              </div>
 
             {/* Contact Form */}
             <div className="glass-card rounded-[18px] p-6 md:p-8 card-shadow">
               <form onSubmit={handleSubmit} className="space-y-5">
                 <div className="space-y-2">
                   <Label htmlFor="name" className="text-sm text-muted-foreground">
                     Name
                   </Label>
                   <Input
                     id="name"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     placeholder="Your name"
                     required
                     className="bg-secondary/50 border-border/50 focus:border-primary"
                   />
                 </div>
 
                 <div className="space-y-2">
                   <Label htmlFor="email" className="text-sm text-muted-foreground">
                     Email
                   </Label>
                   <Input
                     id="email"
                     name="email"
                     type="email"
                     value={formData.email}
                     onChange={handleChange}
                     placeholder="your@email.com"
                     required
                     className="bg-secondary/50 border-border/50 focus:border-primary"
                   />
                 </div>
 
                 <div className="space-y-2">
                   <Label htmlFor="message" className="text-sm text-muted-foreground">
                     Message
                   </Label>
                   <Textarea
                     id="message"
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     placeholder="Your message..."
                     required
                     rows={4}
                     className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                   />
                 </div>
 
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gap-2 rounded-full hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(255,109,41,0.5)] transition-all duration-300"
                  >
                   {isSubmitting ? (
                     "Sending..."
                   ) : (
                     <>
                       <Send className="w-4 h-4" />
                       Send Message
                     </>
                   )}
                 </Button>
               </form>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default ContactSection;