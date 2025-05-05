
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold font-display tracking-tight mb-2">
              <span className="gradient-heading">FinallycReative</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Creating beautiful, functional websites and applications that make a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 md:mb-0">
            <div>
              <h4 className="font-medium mb-3 text-white">Navigation</h4>
              <ul className="space-y-2">
                <FooterLink href="#" text="Home" />
                <FooterLink href="#about" text="About" />
                <FooterLink href="#services" text="Services" />
                <FooterLink href="#projects" text="Projects" />
                <FooterLink href="#contact" text="Contact" />
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-white">Services</h4>
              <ul className="space-y-2">
                <FooterLink href="#" text="Web Development" />
                <FooterLink href="#" text="Frontend Design" />
                <FooterLink href="#" text="Backend Solutions" />
                <FooterLink href="#" text="E-commerce" />
                <FooterLink href="#" text="Optimization" />
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-white">Legal</h4>
              <ul className="space-y-2">
                <FooterLink href="#" text="Privacy Policy" />
                <FooterLink href="#" text="Terms of Service" />
                <FooterLink href="#" text="Cookie Policy" />
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © {currentYear} Finally Creative. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <SocialLink href="https://github.com/kelseaconrad19" icon={<Github size={18} />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/kelseaconrad1993/" icon={<Linkedin size={18} />} label="LinkedIn" />
            <SocialLink href="kelseaconrad14@gmail.com" icon={<Mail size={18} />} label="Email" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-muted-foreground hover:text-brand-purple transition-colors text-sm"
      >
        {text}
      </a>
    </li>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <a 
      href={href} 
      aria-label={label}
      className="p-2 text-muted-foreground hover:text-brand-purple hover:bg-brand-purple/10 rounded-full transition-colors"
    >
      {icon}
    </a>
  );
};

export default Footer;
