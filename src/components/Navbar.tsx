
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
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
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src="/lovable-uploads/3d021b05-5555-480b-941e-9bce7c03a97a.png" 
            alt="XELIS Logo" 
            className="h-8"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="link-hover font-medium">Features</a>
          <a href="#about" className="link-hover font-medium">About</a>
          <a href="https://docs.xelis.io" className="link-hover font-medium">Documentation</a>
          <a href="https://github.com/xelis-project" className="link-hover font-medium">GitHub</a>
          <a href="#contact" className="button-primary">
            Get Started
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-white z-40 pt-20 transition-all duration-300 ease-in-out", 
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <div className="container mx-auto px-4 flex flex-col space-y-6 text-center">
          <a 
            href="#features" 
            className="text-lg py-3" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#about" 
            className="text-lg py-3" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="https://docs.xelis.io" 
            className="text-lg py-3" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Documentation
          </a>
          <a 
            href="https://github.com/xelis-project" 
            className="text-lg py-3" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            GitHub
          </a>
          <a 
            href="#contact" 
            className="button-primary mx-auto"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
