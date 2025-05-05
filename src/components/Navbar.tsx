
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<<<<<<< HEAD
    <nav className="bg-background/80 backdrop-blur-md py-4 shadow-md shadow-brand-purple/10 sticky top-0 z-50 border-b border-white/5">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold font-display text-white">
          <span className="gradient-heading">Finally Creative</span>
        </Link>
        
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
          <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
        </ul>
=======
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/95 shadow-md backdrop-blur-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold font-display tracking-tight text-brand-purple">
            Finally<span className="text-brand-orange">Creative</span>
          </span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks />
          <Button className="bg-brand-orange hover:bg-brand-orange/90">Get in Touch</Button>
        </nav>
        
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
>>>>>>> bbb2eec (chore: Review and clean up unused components and imports)
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
          <div className="container flex flex-col space-y-4">
            <NavLinks mobile />
            <Button className="bg-brand-orange hover:bg-brand-orange/90 w-full">Get in Touch</Button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Blog', href: '/#blog' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`font-medium transition-colors hover:text-brand-purple ${
            mobile ? 'block py-2 px-4 hover:bg-muted' : ''
          }`}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Navbar;