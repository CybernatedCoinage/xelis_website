
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const Roadmap = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Roadmap milestone data
  const roadmapMilestones = [
    {
      id: 1,
      title: "Phase 1: Foundation",
      date: "Q1-Q2 2023",
      completed: true,
      items: [
        "Launch of mainnet",
        "Basic wallet functionality",
        "Core protocol implementation",
        "Initial documentation",
        "Community building"
      ]
    },
    {
      id: 2,
      title: "Phase 2: Growth",
      date: "Q3-Q4 2023",
      completed: true,
      items: [
        "Mobile wallet development",
        "Explorer improvements",
        "Enhanced security features",
        "First exchange listings",
        "Developer SDK release"
      ]
    },
    {
      id: 3,
      title: "Phase 3: Expansion",
      date: "Q1-Q2 2024",
      completed: false,
      inProgress: true,
      items: [
        "Smart contract functionality",
        "Cross-chain integration",
        "Governance model implementation",
        "Decentralized application platform",
        "Advanced privacy features"
      ]
    },
    {
      id: 4,
      title: "Phase 4: Ecosystem",
      date: "Q3-Q4 2024",
      completed: false,
      items: [
        "DeFi protocol suite",
        "Enterprise partnerships",
        "Enhanced scalability solutions",
        "Advanced developer tools",
        "Expanded use cases"
      ]
    },
    {
      id: 5,
      title: "Phase 5: Evolution",
      date: "2025 and beyond",
      completed: false,
      items: [
        "Global adoption initiatives",
        "Advanced Layer 2 solutions",
        "Integration with IoT networks",
        "AI-powered features",
        "Sustainability focus"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">XELIS Roadmap</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Our vision and development plan for the future of XELIS. 
            Track our progress as we build a next-generation blockchain ecosystem.
          </p>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:translate-x-[-50%] hidden md:block"></div>
            
            {/* Milestones */}
            {roadmapMilestones.map((milestone, index) => (
              <div key={milestone.id} className="mb-16 relative">
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Date Column */}
                  <div className="md:w-1/2 relative">
                    <div className={`absolute top-0 ${index % 2 === 0 ? 'md:right-[-12px]' : 'md:left-[-12px]'} hidden md:block`}>
                      <div className={`w-6 h-6 rounded-full border-4 ${milestone.completed ? 'bg-xelis-blue border-xelis-light-blue' : milestone.inProgress ? 'bg-white border-xelis-blue' : 'bg-white border-gray-300'}`}></div>
                    </div>
                    <div className={`mb-4 md:mb-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                      <div className="text-xl font-semibold text-gray-500">{milestone.date}</div>
                    </div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="md:w-1/2 relative">
                    <div className={`glass-card p-6 ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                      <div className="flex items-center mb-4">
                        <div className={`w-3 h-3 rounded-full mr-3 ${milestone.completed ? 'bg-xelis-blue' : milestone.inProgress ? 'bg-yellow-400' : 'bg-gray-300'}`}></div>
                        <h3 className="text-2xl font-bold">{milestone.title}</h3>
                      </div>
                      <div className={`text-sm font-medium mb-3 ${milestone.completed ? 'text-green-600' : milestone.inProgress ? 'text-yellow-600' : 'text-gray-500'}`}>
                        {milestone.completed ? 'Completed' : milestone.inProgress ? 'In Progress' : 'Planned'}
                      </div>
                      <ul className="space-y-2">
                        {milestone.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center mt-0.5 mr-3">
                              <span className="text-xs font-bold text-gray-500">{i + 1}</span>
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-2xl mx-auto">
              This roadmap represents our current development plans but may evolve as we adapt to market conditions, technological advancements, and community feedback.
            </p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us on This Journey</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Want to contribute to XELIS development or stay updated on our progress?
            Connect with our community and development team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://discord.gg/xelis" target="_blank" rel="noopener noreferrer" className="button-primary">
              Join Discord
            </a>
            <a href="https://github.com/xelis-project" target="_blank" rel="noopener noreferrer" className="button-secondary">
              GitHub
            </a>
          </div>
        </div>
      </section>
      
      <Footer />

      {/* Scroll to top button */}
      <button
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className={cn(
          "fixed right-6 bottom-6 p-3 rounded-full bg-xelis-blue text-white shadow-lg transition-all duration-300 hover:bg-xelis-dark-blue",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Roadmap;
