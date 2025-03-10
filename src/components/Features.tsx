
import React from 'react';
import { Shield, Zap, Code, Leaf, Lock, Globe, FileText, Key, Network } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Shield className="h-10 w-10" />, 
    title: 'Enhanced Security',
    description: 'Our advanced cryptographic design provides top-tier protection for all transactions and smart contracts, leveraging cutting-edge security protocols to safeguard user assets, prevent unauthorized access, and ensure the integrity of the blockchain network.',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: 'Fast Transactions',
    description: 'Experience fast transaction speeds and minimal latency with our highly efficient BlockDAG consensus mechanism, designed to maximize throughput, enhance scalability, and ensure seamless network performance even under high demand.',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: 'Developer Friendly',
    description: 'A comprehensive suite of developer tools, robust APIs, and detailed documentation empowers developers of all levels, making blockchain and smart contract development more accessible, efficient, and seamless.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <Leaf className="h-10 w-10" />,
    title: 'Decentralized & Eco-Friendly',
    description: 'Achieve maximum security with our decentralized proof-of-work consensus mechanism, paired with an energy-efficient CPU/GPU mining algorithm designed to ensure integrity of the network and reduce energy expenditure & centralization.',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: <Lock className="h-10 w-10" />,
    title: 'Privacy-Focused',
    description: 'Built-in privacy features allow users to control their financial data while maintaining transparency, ensuring confidentiality by concealing wallet balances and transaction amounts while upholding verifiable security and trust within the network.',
    color: 'text-violet-500',
    bgColor: 'bg-violet-50',
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: 'Global Scalability',
    description: 'Engineered for global scalability, our platform leverages the power of the BlockDAG consensus mechanism to provide high transaction throughput, ensuring optimal performance even as the network grows and ecosystems expand.',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50',
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: 'Smart Contracts',
    description: 'XELIS introduces native Layer 1 smart contracts, allowing developers to create powerful decentralized applications with a language called "Silex" which allows unparalleled flexibility, security, and efficiency with a rust-like Syntax.',
    color: 'text-teal-500',
    bgColor: 'bg-teal-50',
  },
  {
    icon: <Key className="h-10 w-10" />,
    title: 'Confidential Tokens',
    description: 'XELIS empowers the creation of confidential tokens that, as Layer 1 assets, inherit the same robust privacy features as native XELIS. This ensures complete financial confidentiality while upholding integrity and decentralization.',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: <Network className="h-10 w-10" />,
    title: 'P2P Encrypted Network',
    description: 'XELIS operates on a fully encrypted peer-to-peer network, providing a secure, censorship-resistant, and private environment for seamless communication between nodes. This ensures that all data exchanges remain confidential.',
    color: 'text-gray-500',
    bgColor: 'bg-gray-50',
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <div 
      className="glass-card p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-md"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={cn("mb-4 p-3 rounded-lg inline-block", feature.bgColor)}>
        <div className={feature.color}>{feature.icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-4 md:py-8">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#02FFCF] border border-white text-sm font-medium text-black">
            Core Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose XELIS?</h2>
          <p className="text-lg text-gray-600">
            XELIS is the world's first PoW BlockDAG to combine privacy, scalability, security, and Layer 1 Smart Contracts. Our blockchain platform combines cutting-edge technology with user-centric design to deliver an unparalleled experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

