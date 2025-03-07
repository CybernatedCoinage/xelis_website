
import React from 'react';
import AnimatedButton from './AnimatedButton';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-[10%] left-[10%] w-72 h-72 rounded-full bg-indigo-100/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-[#02FFCF] border border-white text-sm font-bold text-black">
              Next Generation BlockDAG
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            <span className="block">Secure, Scalable, Private</span>
            <span className="block text-xelis-blue">Cutting-Edge BlockDAG</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-200">
          XELIS is a modern Layer 1 blockchain, built to prioritize confidentiality, usability, and scalability. It offers innovative features for both developers and users, including robust smart contracts, a high-performance Virtual Machine, and seamless integration with DeFi.
          <br />
          <br />Built for the people, by the people.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animate-delay-300">
  <a href="https://playground.xelis.io" target="_blank" rel="noopener noreferrer">
    <AnimatedButton size="lg" className="w-full sm:w-auto">
      Start Building
      <ArrowRight className="ml-2 h-5 w-5" />
    </AnimatedButton>
  </a>
  <a href="https://docs.xelis.io" target="_blank" rel="noopener noreferrer">
    <AnimatedButton variant="secondary" size="lg" className="w-full sm:w-auto">
      Read Documentation
    </AnimatedButton>
  </a>
</div>
        </div>

        {/* Hero Image/Illustration */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto animate-fade-in animate-delay-400">
          <div className="relative">
            <div className="glass-card overflow-hidden rounded-2xl shadow-lg p-2">
              <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                <div className="text-center p-8 animate-pulse-slow">
                  <div className="text-2xl font-semibold text-xelis-blue">XELIS Dashboard</div>
                  <div className="text-sm text-gray-500 mt-2">Modern blockchain interface with advanced features</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 animate-float z-10">
              <div className="glass p-4 rounded-xl shadow-sm">
                <div className="text-sm font-medium">Transactions per second</div>
                <div className="text-2xl font-bold text-xelis-blue">2,500+</div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-4 animate-float z-10" style={{ animationDelay: '1s' }}>
              <div className="glass p-4 rounded-xl shadow-sm">
                <div className="text-sm font-medium">Energy Efficient</div>
                <div className="text-2xl font-bold text-xelis-blue">Proof of Work</div>
              </div>
            </div>
            {/* Centered Iframe */}
            <div className="absolute inset-0 flex justify-center items-center z-0">
              <iframe
              src="https://explorer.xelis.io/dag"
              width="75%" 
              height="80%" 
              className="rounded-lg shadow-lg"
              frameBorder="0"
              title="Xelis DAG Explorer"
              />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
