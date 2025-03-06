
import React from 'react';
import AnimatedButton from './AnimatedButton';
import { ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-xelis-blue">
              About XELIS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Building the Future of Digital Infrastructure</h2>
            
            <div className="space-y-6 text-gray-600">
              <p>
                XELIS is a cutting-edge Layer 1 blockchain platform developed with a focus on 
                security, scalability, and user experience. Our technology addresses the 
                limitations of existing blockchain networks by introducing innovative approaches 
                to consensus, transaction processing, and smart contract execution.
              </p>
              
              <p>
                Founded by a team of blockchain experts and cryptography specialists, XELIS 
                aims to provide a foundation for the next generation of decentralized applications 
                and digital infrastructure.
              </p>
              
              <div className="pt-4">
                <AnimatedButton 
                  variant="primary"
                  className="flex items-center"
                  onClick={() => window.open('https://github.com/xelis-project', '_blank')}
                >
                  View Our GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </div>
            </div>
          </div>
          
          {/* Right Column - Stats */}
          <div className="order-1 lg:order-2">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Key Metrics</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-xelis-blue mb-1">20,000+</div>
                  <div className="text-sm text-gray-500">Transactions Per Day</div>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-xelis-blue mb-1">3,000+</div>
                  <div className="text-sm text-gray-500">Network Nodes</div>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-xelis-blue mb-1">10+</div>
                  <div className="text-sm text-gray-500">Developer Partners</div>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-xelis-blue mb-1">99.9%</div>
                  <div className="text-sm text-gray-500">Network Uptime</div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="text-lg font-medium mb-4 text-center">Ongoing Development</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Security Upgrades</span>
                    <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-xelis-blue h-2.5 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Smart Contracts 2.0</span>
                    <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-xelis-blue h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Mobile SDK</span>
                    <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-xelis-blue h-2.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
