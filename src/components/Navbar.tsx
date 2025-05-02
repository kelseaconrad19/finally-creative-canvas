
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Your Brand</Link>
        
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
          {isAuthenticated ? (
            <li><Link to="/admin" className="hover:text-primary">Admin</Link></li>
          ) : (
            <li><Link to="/auth" className="hover:text-primary">Sign In</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
