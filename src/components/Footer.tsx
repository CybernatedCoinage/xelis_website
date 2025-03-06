
import React from 'react';
import { Github, Twitter, Globe, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-4">
              <img 
                src="/lovable-uploads/3d021b05-5555-480b-941e-9bce7c03a97a.png" 
                alt="XELIS Logo" 
                className="h-10"
              />
            </a>
            <p className="text-gray-600 mb-6 max-w-md">
              A next-generation blockchain platform designed for 
              scalability, security, and a seamless developer experience.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/xelis-project" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-xelis-blue transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/xelis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-xelis-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://xelis.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-xelis-blue transition-colors"
                aria-label="Website"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@xelis.io" 
                className="text-gray-500 hover:text-xelis-blue transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="https://docs.xelis.io" className="text-gray-600 hover:text-xelis-blue transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-xelis-blue transition-colors">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-xelis-blue transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-xelis-blue transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-600 hover:text-xelis-blue transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-xelis-blue transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-xelis-blue transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-xelis-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} XELIS. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-xelis-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-xelis-blue transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
