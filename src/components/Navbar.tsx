
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Close mobile menu when scrolling significantly
      if (isMobileMenuOpen && window.scrollY > 50) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Close menu when clicking outside, but make sure to exclude the toggle button itself
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Check if click is outside menu and not on the toggle button itself
      if (
        isMobileMenuOpen && 
        !target.closest('.mobile-menu-container') && 
        !target.closest('.mobile-menu-toggle')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the click from bubbling to document
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/transparent_backgroud_black_logo.png" 
            alt="XELIS Logo" 
            className="h-8"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="link-hover font-medium">Features</a>
          <a href="#about" className="link-hover font-medium">About</a>
          <Link to="/roadmap" className="link-hover font-medium">Roadmap</Link>
          <Link to="/exchanges" className="link-hover font-medium">Exchanges</Link>
          <Link to="/resources" className="link-hover font-medium">Resources</Link>
          <a href="https://docs.xelis.io" target="_blank" rel="noopener noreferrer" className="link-hover font-medium">Documentation</a>
          <a href="https://explorer.xelis.io" target="_blank" rel="noopener noreferrer" className="link-hover font-medium">Explorer</a>
          <a href="https://stats.xelis.io" target="_blank" rel="noopener noreferrer" className="link-hover font-medium">Stats</a>
          <a href="https://github.com/xelis-project" target="_blank" rel="noopener noreferrer" className="link-hover font-medium">GitHub</a>
          <a href="https://xelis.io/resources" target="_blank" rel="noopener noreferrer" className="button-primary">
            Get a Wallet
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden mobile-menu-toggle"
          onClick={toggleMobileMenu}
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
        "md:hidden fixed inset-0 bg-white z-40 pt-20 transition-all duration-300 ease-in-out mobile-menu-container", 
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
          <Link 
            to="/roadmap" 
            className="text-lg py-3" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Roadmap
          </Link>
          <Link 
            to="/exchanges" 
            className="text-lg py-3" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Exchanges
          </Link>
          <Link 
            to="/resources" 
            className="text-lg py-3" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Resources
          </Link>
          <a 
            href="https://docs.xelis.io" 
            target="_blank" rel="noopener noreferrer" 
            className="text-lg py-3" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Documentation
          </a>
          <a 
            href="https://explorer.xelis.io" 
            target="_blank" rel="noopener noreferrer" 
            className="text-lg py-3" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Explorer
          </a>
          <a 
            href="https://stats.xelis.io" 
            target="_blank" rel="noopener noreferrer" 
            className="text-lg py-3" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Stats
          </a>
          <a 
            href="https://github.com/xelis-project" 
            target="_blank" rel="noopener noreferrer" 
            className="text-lg py-3" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            GitHub
          </a>
          <a 
            href="https://xelis.io/resources"
            target="_blank" 
            rel="noopener noreferrer" 
            className="button-primary mx-auto"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get A Wallet
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
