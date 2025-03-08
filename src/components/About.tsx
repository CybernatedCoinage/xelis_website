import React, { useState, useEffect } from 'react'; // Import hooks for state and side effects
import AnimatedButton from './AnimatedButton';
import { ExternalLink } from 'lucide-react';

const About = () => {
  // Create state to store the circulating supply value
  const [circulatingSupply, setCirculatingSupply] = useState<number | null>(null);

  // Fetch circulating supply from the API when the component mounts
  useEffect(() => {
    const fetchCirculatingSupply = async () => {
      try {
        const response = await fetch('https://mini-api.xelis.io/?key=circulating_supply');
        const data = await response.json();
        console.log(data);  // Log the API response to check if it's a number or an object

        // Check if the response is a number and set it to state
        if (typeof data === 'number') {
          setCirculatingSupply(data);
        } else {
          console.error('Error: Circulating supply value is not a number');
        }
      } catch (error) {
        console.error('Error fetching circulating supply:', error);
      }
    };

    fetchCirculatingSupply(); // Call the function when the component mounts
  }, []); // Empty dependency array means this will run only once when the component mounts

  // Function to format the circulating supply into a more readable form like 2.345m
  const formatCirculatingSupply = (supply: number | null) => {
    if (supply === null) return 'Loading...';

    // Round to 4 decimal places
    const roundedSupply = supply.toFixed(4);

    // Convert the number to human-readable format (e.g., millions or billions)
    if (supply >= 1_000_000) {
      return (supply / 1_000_000).toFixed(3) + 'm';  // Return value in millions (m)
    } else if (supply >= 1_000) {
      return (supply / 1_000).toFixed(3) + 'k';  // Return value in thousands (k)
    }

    return roundedSupply;  // Return rounded value if less than 1,000
  };

  return (
    <section id="about" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#02FFCF] border border-white text-sm font-medium text-black">
              About XELIS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Building the Future of Confidential Digital Infrastructure</h2>
            
            <div className="space-y-6 text-gray-600">
              <p>
                XELIS is a cutting-edge Layer 1 blockchain platform designed for security, scalability, privacy, and a seamless user experience. Fully decentralized and built on an immutable ledger, XELIS ensures data integrity and trustless transactions. By introducing innovative solutions for consensus, transaction processing, and smart contract execution, XELIS overcomes the limitations of existing blockchain networks—delivering confidentiality, efficiency, and a future-ready blockchain ecosystem.
              </p>
              
              <p>
                Built by a decentralized team of blockchain experts, cryptography specialists, and full stack developers, XELIS 
                aims to provide a foundation for the next generation of decentralized applications 
                and confidential digital infrastructure.
              </p>
              
              <div className="pt-4">
                <AnimatedButton 
                  variant="primary"
                  className="flex items-center"
                  onClick={() => window.open('https://whitepaper.xelis.io', '_blank')}
                >
                  Read our Whitepaper
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
                  <div className="text-3xl font-bold text-xelis-blue mb-1">2,500+</div>
                  <div className="text-sm text-gray-500">Max Transactions Per Seconds</div>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-xelis-blue mb-1">150+</div>
                  <div className="text-sm text-gray-500">Network Nodes</div>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-xelis-blue mb-1">15s</div>
                  <div className="text-sm text-gray-500">Block Speed</div>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-xelis-blue mb-1">99.99%</div>
                  <div className="text-sm text-gray-500">Network Uptime</div>
                </div>
                
                {/* Circulating Supply - Dynamically updated */}
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-xelis-blue mb-1">
                    {/* Display formatted circulating supply */}
                    {formatCirculatingSupply(circulatingSupply)}
                  </div>
                  <div className="text-sm text-gray-500">Circulating Supply</div>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-xelis-blue mb-1">18.4m</div>
                  <div className="text-sm text-gray-500">Max Supply</div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="text-lg font-medium mb-4 text-center">Ongoing Development</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Smart Contracts</span>
                    <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-xelis-blue h-2.5 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">MultiThread TPS</span>
                    <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-xelis-blue h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Multiasset Wallet</span>
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