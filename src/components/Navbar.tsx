
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Your Brand</Link>
        
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
