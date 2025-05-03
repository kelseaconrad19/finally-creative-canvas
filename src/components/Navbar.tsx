
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-background/80 backdrop-blur-md py-4 shadow-md shadow-brand-purple/10 sticky top-0 z-50 border-b border-white/5">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold font-display text-white">
          <span className="gradient-heading">Finally Creative</span>
        </Link>
        
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
          <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
