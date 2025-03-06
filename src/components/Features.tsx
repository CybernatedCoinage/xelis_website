
import React from 'react';
import { Shield, Zap, Code, Leaf, Lock, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Shield className="h-10 w-10" />,
    title: 'Enhanced Security',
    description: 'Advanced cryptographic algorithms ensuring top-tier protection for all transactions and smart contracts.',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: 'Lightning Fast',
    description: 'Enjoy high throughput and minimal latency with our efficient consensus mechanism.',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: 'Developer Friendly',
    description: 'Extensive developer tools, APIs, and documentation making blockchain development accessible.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <Leaf className="h-10 w-10" />,
    title: 'Energy Efficient',
    description: 'Environmentally conscious proof-of-stake consensus with minimal energy consumption.',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: <Lock className="h-10 w-10" />,
    title: 'Privacy-Focused',
    description: 'Built-in privacy features allowing users to control their data while maintaining transparency.',
    color: 'text-violet-500',
    bgColor: 'bg-violet-50',
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: 'Global Scalability',
    description: 'Designed to scale globally with cross-chain compatibility and seamless integrations.',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50',
  },
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
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-xelis-blue">
            Core Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose XELIS?</h2>
          <p className="text-lg text-gray-600">
            Our blockchain platform combines cutting-edge technology with user-centric design to deliver an unparalleled experience.
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
