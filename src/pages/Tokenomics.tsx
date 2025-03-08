
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedButton from '@/components/AnimatedButton';
import { PieChart, Package, Coins, Lock, TrendingUp, ArrowRight, Shield, Users } from 'lucide-react';

const Tokenomics = () => {
  // Token allocation data for the pie chart visualization
  const tokenAllocation = [
    { category: "Community", percentage: 30, color: "#00f2c3" },
    { category: "Development", percentage: 25, color: "#00d6ab" },
    { category: "Treasury", percentage: 20, color: "#33f7ce" },
    { category: "Team & Advisors", percentage: 15, color: "#00c096" },
    { category: "Early Contributors", percentage: 10, color: "#009e7c" }
  ];

  // Token details
  const tokenDetails = [
    { title: "Max Supply", value: "18,400,000 XELIS", icon: <Package className="h-5 w-5" /> },
    { title: "Circulating Supply", value: "~5,300,000 XELIS", icon: <Coins className="h-5 w-5" /> },
    { title: "Block Reward", value: "Decreasing over time", icon: <TrendingUp className="h-5 w-5" /> },
    { title: "Emission Model", value: "Deflationary", icon: <Lock className="h-5 w-5" /> }
  ];

  // Emission Schedule
  const emissionSchedule = [
    { period: "Phase 1 (Years 1-2)", reward: "2.5 XELIS per block", description: "Initial distribution phase with higher rewards to incentivize early network participation." },
    { period: "Phase 2 (Years 3-4)", reward: "1.25 XELIS per block", description: "Reduction phase to align with growing network value and reduce inflation pressure." },
    { period: "Phase 3 (Years 5-6)", reward: "0.625 XELIS per block", description: "Further reduction as network matures and transaction volume increases." },
    { period: "Phase 4 (Years 7+)", reward: "0.3125 XELIS per block", description: "Long-term stable emission rate to maintain network security while minimizing inflation." }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">XELIS Tokenomics</h1>
            <p className="text-lg text-gray-600 mb-8">
              An overview of XELIS token distribution, emission schedule, and economic model 
              designed for long-term sustainability and growth.
            </p>
          </div>
        </section>

        {/* Token Overview */}
        <section className="container mx-auto px-4 py-12 bg-gray-50 rounded-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Token Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="glass-card p-6 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-xelis-blue text-white">
                  <Coins className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold ml-4">XELIS Token</h3>
              </div>
              
              <div className="space-y-4 mb-6 flex-grow">
                <p className="text-gray-600">
                  XELIS is the native utility token of the XELIS blockchain, designed to 
                  facilitate transactions, secure the network through staking, and govern 
                  protocol decisions.
                </p>
                <p className="text-gray-600">
                  With a fixed maximum supply and a deflationary emission model, 
                  XELIS is engineered for long-term value preservation.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {tokenDetails.map((detail, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="text-xelis-blue mr-2">{detail.icon}</div>
                      <h4 className="font-medium">{detail.title}</h4>
                    </div>
                    <p className="text-gray-700">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-xelis-blue text-white">
                  <PieChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold ml-4">Token Allocation</h3>
              </div>
              
              <div className="flex-grow">
                <div className="relative w-full h-64 mx-auto mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      {/* Render pie chart segments */}
                      {tokenAllocation.map((segment, index) => {
                        // Calculate the segment position
                        const startAngle = tokenAllocation
                          .slice(0, index)
                          .reduce((sum, s) => sum + s.percentage, 0) * 3.6; // 3.6 degrees per percentage point
                        const endAngle = startAngle + segment.percentage * 3.6;
                        
                        // Convert angles to radians
                        const startRad = (startAngle - 90) * Math.PI / 180;
                        const endRad = (endAngle - 90) * Math.PI / 180;
                        
                        // Calculate the coordinates
                        const x1 = 50 + 40 * Math.cos(startRad);
                        const y1 = 50 + 40 * Math.sin(startRad);
                        const x2 = 50 + 40 * Math.cos(endRad);
                        const y2 = 50 + 40 * Math.sin(endRad);
                        
                        // Determine the large arc flag
                        const largeArcFlag = segment.percentage > 50 ? 1 : 0;
                        
                        // Create the path
                        const d = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
                        
                        return (
                          <path key={index} d={d} fill={segment.color} />
                        );
                      })}
                    </svg>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tokenAllocation.map((segment, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: segment.color }}></div>
                      <span className="text-sm">{segment.category}: {segment.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emission Schedule */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Emission Schedule</h2>
            
            <div className="glass-card p-8">
              <p className="text-gray-600 mb-8 text-center">
                The XELIS emission schedule follows a deflationary model with block rewards 
                halving approximately every two years to ensure long-term scarcity.
              </p>
              
              <div className="space-y-6">
                {emissionSchedule.map((phase, index) => (
                  <div key={index} className="relative">
                    {/* Timeline connector */}
                    {index < emissionSchedule.length - 1 && (
                      <div className="absolute left-6 top-6 bottom-0 w-0.5 bg-gray-200"></div>
                    )}
                    
                    <div className="flex">
                      <div className="flex-shrink-0 pt-1">
                        <div className="w-3 h-3 rounded-full bg-xelis-blue ring-4 ring-xelis-blue/20"></div>
                      </div>
                      
                      <div className="ml-6">
                        <h3 className="text-lg font-medium text-gray-900">{phase.period}</h3>
                        <p className="font-medium text-xelis-blue mt-1">{phase.reward}</p>
                        <p className="text-gray-600 mt-2">{phase.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Token Utility */}
        <section className="container mx-auto px-4 py-12 bg-gray-50 rounded-3xl mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Token Utility</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Network Security",
                description: "XELIS tokens secure the network through staking, with validators receiving rewards for honest participation.",
                icon: <Shield className="h-6 w-6" />
              },
              {
                title: "Transaction Fees",
                description: "XELIS is used to pay for transaction fees on the network, with a portion of fees burned to create deflationary pressure.",
                icon: <ArrowRight className="h-6 w-6" />
              },
              {
                title: "Governance",
                description: "Token holders can participate in governance decisions that shape the future development of the XELIS protocol.",
                icon: <Users className="h-6 w-6" />
              }
            ].map((utility, index) => (
              <div key={index} className="glass-card p-6 hover:shadow-md transition-shadow duration-300">
                <div className="bg-xelis-blue/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 text-xelis-blue">
                  {utility.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{utility.title}</h3>
                <p className="text-gray-600">{utility.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <AnimatedButton
              onClick={() => window.open("https://docs.xelis.io/tokenomics", "_blank")}
              className="mx-auto"
            >
              Learn More About XELIS Tokenomics
              <ArrowRight className="ml-2 h-4 w-4" />
            </AnimatedButton>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tokenomics;
