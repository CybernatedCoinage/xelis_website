import React from 'react';
import { Globe, Mail } from 'lucide-react';

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
              scalability, security, privacy, DeFi, and a seamless user and developer experience.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              {[
                { href: "https://github.com/xelis-project", img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", label: "GitHub" },
                { href: "https://x.com/XelisCurrency", img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg", label: "Twitter" },
                { href: "https://discord.gg/xelis", img: "/lovable-uploads/discord2.png", label: "Discord" },
                { href: "https://t.me/xelis_io", img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg", label: "Telegram" },
                { href: "https://www.instagram.com/xeliscommunity", img: "/lovable-uploads/insta.png", label: "Instagram" },
                { href: "https://www.tiktok.com/@xeliscommunity", img: "/lovable-uploads/tik.png", label: "TikTok" },
                { href: "https://www.reddit.com/r/xelis/", img: "/lovable-uploads/reddit.png", label: "Reddit" },
                { href: "https://linkedin.com/company/xelis", img: "/lovable-uploads/linkedin.png", label: "LinkedIn" },
                { href: "https://www.facebook.com/xeliscommunity/", img: "/lovable-uploads/facebook.png", label: "Facebook" },
              ].map(({ href, img, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-xelis-blue transition-colors" aria-label={label}>
                  <img src={img} alt={label} className="h-5 w-5" />
                </a>
              ))}
              
              {/* Website */}
              <a href="https://xelis.io" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-gray-500 transition-colors" aria-label="Website">
                <Globe className="h-5 w-5" />
              </a>

              {/* Email */}
              <a href="mailto:business@xelis.io" className="text-xelis-blue hover:text-gray-500 transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Two-Column Resources Section */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                <li><a href="https://docs.xelis.io" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-xelis-blue transition-colors">Documentation</a></li>
                <li><a href="https://whitepaper.xelis.io" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-xelis-blue transition-colors">Whitepaper</a></li>
                <li><a href="/roadmap"  className="text-gray-600 hover:text-xelis-blue transition-colors">Roadmap</a></li>
                <li><a href="https://xeliscommunity.org/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-xelis-blue transition-colors">Educational Content & Updates</a></li>
                <li><a href="/resources"  className="text-gray-600 hover:text-xelis-blue transition-colors">Wallets</a></li>
                <li><a href="https://faucet.xelis.io" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-xelis-blue transition-colors">Faucet (Free Xelis)</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 invisible">
                Resources
              </h3>
              <ul className="space-y-3">
                <li><a href="https://docs.xelis.io/contributors" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-xelis-blue transition-colors">Team</a></li>
                <li><a href="https://poolpartynodes.com/product-category/xelis-clothing-store/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-xelis-blue transition-colors">Merchandise</a></li>
                <li><a href="/exchanges"  className="text-gray-600 hover:text-xelis-blue transition-colors">Exchanges</a></li>
                <li><a href="https://linktr.ee/Xelis" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-xelis-blue transition-colors">Additional Links</a></li>
                <li><a href="/tokenomics"  className="text-gray-600 hover:text-xelis-blue transition-colors">Tokenomics</a></li>
                <li><a href="mailto:business@xelis.io" className="text-gray-600 hover:text-xelis-blue transition-colors">Contact: business@xelis.io</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} XELIS.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            
            <a className="text-sm text-gray-500">
            Use our tools and software at your own risk, we will not take any responsibility in the way it is used.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;