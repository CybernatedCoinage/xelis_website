import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      
      // Enhanced auto-close logic: close menu when user scrolls more than 20px in any direction
      if (isMobileMenuOpen && Math.abs(currentScrollY - lastScrollY) > 20) {
        setIsMobileMenuOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen, lastScrollY]);

  // Run once on component mount to initialize lastScrollY
  useEffect(() => {
    setLastScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    // Prevent body scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMobileMenuOpen && 
        !target.closest('.mobile-menu-container') && 
        !target.closest('.mobile-menu-toggle')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = ''; // Restore scrolling when component unmounts
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavClick = (section: string) => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(section), 300);
    } else {
      scrollToSection(section);
    }
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
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => handleNavClick('about')} className="link-hover font-medium">About</button>
          <button onClick={() => handleNavClick('features')} className="link-hover font-medium">Features</button>
          <Link to="/roadmap" className="link-hover font-medium">Roadmap</Link>
          <Link to="/exchanges" className="link-hover font-medium">Exchanges</Link>
          <Link to="/resources" className="link-hover font-medium">Resources</Link>
          <Link to="/tokenomics" className="link-hover font-medium">Tokenomics</Link>
          <a href="https://docs.xelis.io" target="_blank" rel="noopener noreferrer" className="link-hover font-medium">Documentation</a>
          <a href="https://explorer.xelis.io" target="_blank" rel="noopener noreferrer" className="link-hover font-medium">Explorer</a>
          <a href="https://stats.xelis.io" target="_blank" rel="noopener noreferrer" className="link-hover font-medium">Stats</a>
          <a href="https://github.com/xelis-project" target="_blank" rel="noopener noreferrer" className="link-hover font-medium">GitHub</a>
          <a href="/resources" className="button-primary">Get a Wallet</a>
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

      {/* Mobile Navigation Menu - Fixed Position with complete overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-white mobile-menu-container overflow-y-auto pt-5" 
          style={{ top: '0', height: '100vh' }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-3 text-center">
            <button onClick={() => handleNavClick('features')} className="text-base py-2">Features</button>
            <button onClick={() => handleNavClick('about')} className="text-base py-2">About</button>
            <Link to="/roadmap" className="text-base py-2" onClick={() => setIsMobileMenuOpen(false)}>Roadmap</Link>
            <Link to="/exchanges" className="text-base py-2" onClick={() => setIsMobileMenuOpen(false)}>Exchanges</Link>
            <Link to="/resources" className="text-base py-2" onClick={() => setIsMobileMenuOpen(false)}>Resources</Link>
            <Link to="/tokenomics" className="text-base py-2" onClick={() => setIsMobileMenuOpen(false)}>Tokenomics</Link>
            <a href="https://docs.xelis.io" target="_blank" rel="noopener noreferrer" className="text-base py-2" onClick={() => setIsMobileMenuOpen(false)}>Documentation</a>
            <a href="https://explorer.xelis.io" target="_blank" rel="noopener noreferrer" className="text-base py-2" onClick={() => setIsMobileMenuOpen(false)}>Explorer</a>
            <a href="https://stats.xelis.io" target="_blank" rel="noopener noreferrer" className="text-base py-2" onClick={() => setIsMobileMenuOpen(false)}>Stats</a>
            <a href="https://github.com/xelis-project" target="_blank" rel="noopener noreferrer" className="text-base py-2" onClick={() => setIsMobileMenuOpen(false)}>GitHub</a>
            <a href="https://xelis.io/resources" target="_blank" rel="noopener noreferrer" className="button-primary mx-auto mt-2" onClick={() => setIsMobileMenuOpen(false)}>Get A Wallet</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;