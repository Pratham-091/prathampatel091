const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {currentYear} Pratham Patel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;