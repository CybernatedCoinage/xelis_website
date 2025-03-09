
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Wallet, Download, Globe, Server, Shield, Clock, ArrowRight, Github, Droplet, FileText, Briefcase } from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';

const Resources = () => {
  // Wallet options data with two new wallet types added
  const wallets = [
    {
      name: "Xelis Web Wallet",
      description: "Access your XELIS directly from any browser without installing anything.",
      features: ["No installation required", "Easy to use", "Secure"],
      url: "https://wallet.xelis.io",
      buttonText: "Open Web Wallet",
      icon: <Globe className="h-6 w-6" />,
      primary: true
    },
    {
      name: "Desktop Wallet",
      description: "Download the official Xelis wallet for Windows, macOS, or Linux.",
      features: ["Full control", "Advanced features", "Highest security"],
      url: "https://github.com/xelis-project/xelis-genesix-wallet/releases",
      buttonText: "Download",
      icon: <Download className="h-6 w-6" />,
      primary: false
    },
    {
      name: "CLI Wallet",
      description: "Command-line interface wallet for developers and advanced users.",
      features: ["Fully featured", "Scripting support", "Developer-friendly"],
      url: "https://github.com/xelis-project/xelis-blockchain/releases/",
      buttonText: "View on GitHub",
      icon: <Server className="h-6 w-6" />,
      primary: false
    },
    {
      name: "Mobile Wallet",
      description: "The XELIS mobile wallet experience for Android. (iOS Coming Soon).",
      features: ["On-the-go access", "Biometric security", "User-friendly"],
      url: "https://github.com/xelis-project/xelis-genesix-wallet/releases",
      buttonText: "Download",
      icon: <Wallet className="h-6 w-6" />,
      primary: false,
    },
    // New wallet option 1: Paper Wallet
    {
      name: "Paper Wallet",
      description: "Generate offline XELIS paper wallets for cold storage and maximum security.",
      features: ["Offline storage", "Air-gapped security", "Physical backup"],
      url: "https://paperwallet.xelis.io/",
      buttonText: "Generate Wallet",
      icon: <FileText className="h-6 w-6" />,
      primary: false,
    },
    // New wallet option 2: Third Party MultiAsset Wallet     
    {       
      name: "MultiAsset Wallet",       
      description: "Store XELIS alongside other cryptocurrencies in a popular third-party wallet.",       
      features: ["Multiple assets", "Broad ecosystem", "Simplified management"],       
      url: "#", // Added to prevent navigation
      buttonText: "Coming Soon",
      icon: <Briefcase className="h-6 w-6" />, 
      primary: false,
      disabled: true, // Added disabled property
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">XELIS Wallets & Resources</h1>
            <p className="text-lg text-gray-600 mb-8">
              Resources to get you started with Xelis. Access and manage your XELIS with our range of secure wallet options, obtain free XELIS from our faucet, or run a node and contribute to our network security.
            </p>
          </div>
        </section>

        {/* Wallets Section */}
        <section className="container mx-auto px-4 py-4 bg-gray-50 rounded-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Choose Your Wallet</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {wallets.map((wallet, index) => (
              <div 
                key={index}
                className={`glass-card p-6 flex flex-col h-full transition-transform duration-300 hover:scale-[1.02] ${
                  wallet.primary ? 'border-xelis-blue bg-white/90 shadow-lg' : ''
                } ${wallet.disabled ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${wallet.primary ? 'bg-xelis-blue text-white' : 'bg-gray-100'}`}>
                    {wallet.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{wallet.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{wallet.description}</p>
                
                <div className="mb-6 flex-grow">
                  <ul className="space-y-2">
                    {wallet.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Shield className="h-4 w-4 text-xelis-blue mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <AnimatedButton
                  variant={wallet.primary ? "primary" : "secondary"}
                  className={`w-full justify-center ${wallet.disabled ? 'pointer-events-none' : ''}`}
                  onClick={() => !wallet.disabled && window.open(wallet.url, "_blank")}
                >
                  {wallet.buttonText}
                  {wallet.disabled ? 
                    <Clock className="ml-2 h-4 w-4" /> : 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  }
                </AnimatedButton>
              </div>
            ))}
          </div>
        </section>

        {/* Faucet Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <div className="bg-blue-50 p-4 rounded-full inline-block mb-4">
                  <Droplet className="h-8 w-8 text-xelis-blue" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">XELIS Faucet</h2>
                <p className="text-gray-600 mb-6">
                  New to XELIS? Get free tokens to explore and test our ecosystem. 
                  The XELIS faucet provides a small amount of XELIS for testing wallets and applications.
                </p>
                <AnimatedButton 
                  onClick={() => window.open("https://faucet.xelis.io", "_blank")}
                  className="flex items-center"
                >
                  Get Free XELIS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="font-medium text-lg mb-4">How It Works</h3>
                  <ol className="space-y-3">
                    <li className="flex">
                      <span className="bg-xelis-blue text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <span>Visit the <a href="https://faucet.xelis.io" target="_blank" rel="noopener noreferrer" className="text-xelis-blue hover:underline">XELIS Faucet</a></span>
                    </li>
                    <li className="flex">
                      <span className="bg-xelis-blue text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <span>Enter your XELIS wallet address</span>
                    </li>
                    <li className="flex">
                      <span className="bg-xelis-blue text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <span>Complete the verification</span>
                    </li>
                    <li className="flex">
                      <span className="bg-xelis-blue text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <span>Receive free XELIS tokens</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Run a Node Section */}
        <section className="container mx-auto px-4 py-12 bg-gray-50 rounded-3xl mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Launch a Node</h2>
          
          <div className="max-w-4xl mx-auto glass-card p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-xl font-semibold mb-4">Contribute to Decentralization by Running a node</h3>
                <p className="text-gray-600 mb-6">
                Run a XELIS node to support network decentralization, validate transactions, and enhance security. Access setup guides, documentation, and tools to deploy and manage your own node. Contribute to the ecosystem by strengthening the blockchain's resilience and performance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <AnimatedButton 
                    variant="secondary"
                    onClick={() => window.open("https://docs.xelis.io/getting-started/build-from-source-code", "_blank")}
                    className="flex items-center"
                  >
                    Build from Source
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                  <AnimatedButton 
                    variant="secondary"
                    onClick={() => window.open("https://docs.xelis.io/getting-started/download-binaries", "_blank")}
                    className="flex items-center"
                  >
                    Pre-Complied Software
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <img 
                  src="/lovable-uploads/xel.png" 
                  alt="XELIS Logo" 
                  className="w-full max-w-[180px] mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
                {/* How to Mine Xelis */}
                <section className="container mx-auto px-4 py-12 bg-gray-50 rounded-3xl mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Mining Xelis</h2>
          
          <div className="max-w-4xl mx-auto glass-card p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-xl font-semibold mb-4">How to Mine Xelis</h3>
                <p className="text-gray-600 mb-6">
                Xelis is a Proof of Work (PoW) blockchain, where mining plays a crucial role in ensuring its security. At the heart of Xelis lies decentralization, which is why we’ve developed a unique mining algorithm that is resistant to ASIC and FPGA mining, making it efficiently mineable only with GPUs and CPUs. Our proprietary XelisHashV2 algorithm is highly memory-intensive, yet it operates with exceptionally low energy consumption, making it one of the most energy-efficient mining algorithms ever created.
                </p>
                <div className="flex flex-wrap gap-4">
                  <AnimatedButton 
                    variant="secondary"
                    onClick={() => window.open("https://github.com/CybernatedCoinage/How-To-Mine-Xelis/tree/main", "_blank")}
                    className="flex items-center"
                  >
                    How to Mine Xelis Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <img 
                  src="/lovable-uploads/xel.png" 
                  alt="XELIS Logo" 
                  className="w-full max-w-[180px] mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
         {/* Developer Resources */}
         <section className="container mx-auto px-4 py-12 bg-gray-50 rounded-3xl mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Developer Resources</h2>
          
          <div className="max-w-4xl mx-auto glass-card p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-xl font-semibold mb-4">Build on XELIS</h3>
                <p className="text-gray-600 mb-6">
                  Access developer tools, documentation, and resources to build applications on the XELIS blockchain.
                  Explore our GitHub repositories for code examples and contribute to the ecosystem.
                </p>
                <div className="flex flex-wrap gap-4">
                  <AnimatedButton 
                    variant="secondary"
                    onClick={() => window.open("https://docs.xelis.io", "_blank")}
                    className="flex items-center"
                  >
                    Documentation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                  <AnimatedButton 
                    variant="secondary"
                    onClick={() => window.open("https://github.com/xelis-project", "_blank")}
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </AnimatedButton>
                  <AnimatedButton 
                    variant="secondary"
                    onClick={() => window.open("https://playground.xelis.io", "_blank")}
                    className="flex items-center"
                  >
                    Developer Playground
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <img 
                  src="/lovable-uploads/transparent_backgroud_black_logo.png" 
                  alt="XELIS Logo" 
                  className="w-full max-w-[180px] mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;