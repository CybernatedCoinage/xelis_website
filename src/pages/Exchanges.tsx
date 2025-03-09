
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const Exchanges = () => {
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

  // Exchange data
  const exchanges = [
    {
      name: "TradeOgre",
      logo: "/lovable-uploads/tradeogre.png",
      url: "https://tradeogre.com/exchange/XEL-USDT",
      pairs: ["XEL-USDT"],
      type: "Centralized",
      features: ["No KYC required", "Simple interface", "Low fees"]
    },
    {
      name: "MEXC Global",
      logo: "/lovable-uploads/mexc.png",
      url: "https://www.mexc.com/exchange/XEL_USDT",
      pairs: ["XEL-USDT"],
      type: "Centralized",
      features: ["High liquidity", "Mobile app", "1000s of trading pairs"]
    },
    {
      name: "XT",
      logo: "/lovable-uploads/xt.png",
      url: "https://www.xt.com/en/trade/xel_usdt",
      pairs: ["XEL-USDT"],
      type: "Centralized",
      features: ["Low Fees", "Advanced trading tools", "24-7 Support"]
    },
    {
      name: "CoinEx",
      logo: "/lovable-uploads/coinex.png",
      url: "https://www.coinex.com/exchange/xel-usdt",
      pairs: ["XEL-USDT"],
      type: "Centralized",
      features: ["Low Fees", "Wide Asset Pairs", "Spot Trading"]
    },
    {
      name: "Biconomy",
      logo: "/lovable-uploads/biconomy.png",
      url: "https://www.biconomy.com/exchange/XEL_USDT",
      pairs: ["XEL-USDT"],
      type: "Centralized",
      features: ["USA Friendly", "Simple interface", "Low fees"]
    },
    {
      name: "BIT",
      logo: "/lovable-uploads/bit.png",
      url: "https://www.bit.com/spot?pair=XEL-USDT",
      pairs: ["XEL-USDT"],
      type: "Centralized",
      features: ["Mobile App", "Alt Coins", "Institutional Services"]
    },
    {
      name: "Xeggex",
      logo: "/lovable-uploads/xeggex.png",
      url: "https://xeggex.com/market/XEL_USDT",
      pairs: ["XEL-USDT"],
      type: "Centralized",
      features: ["PoW Projects", "Simple Interface", "Low fees"]
    },
    {
      name: "NonKYC",
      logo: "/lovable-uploads/nonkyc.png",
      url: "https://nonkyc.io/market/XEL_USDT",
      pairs: ["XEL-USDT"],
      type: "Centralized",
      features: ["KYC Not Required", "Easy to Use", "Low Fees"]
    },
    {
      name: "SafeTrade",
      logo: "/lovable-uploads/safetrade.png",
      url: "https://safetrade.com/exchange/XEL-USDT",
      pairs: ["XEL-USDT"],
      type: "Centralized",
      features: ["PoW Projects", "Alt Coins", "No KYC Required"]
    },
    {
      name: "Exbitron",
      logo: "/lovable-uploads/exbitron.png",
      url: "https://exbitron.com/trade?market=XEL-USDT",
      pairs: ["XEL-USDT"],
      type: "Centralized",
      features: ["PoW Projects", "No KYC Required", "Low fees"]
    },
    {
      name: "Trocador",
      logo: "/lovable-uploads/trocador.png",
      url: "https://trocador.app/en/?ref=1JXff8w6Gx&ticker_to=xel",
      pairs: ["Many"],
      type: "Swap",
      features: ["No KYC required", "Many Pairs", "Privacy Focused"]
    },
    {
      name: "Exolix",
      logo: "/lovable-uploads/exolix.png",
      url: "https://exolix.com/currencies/xel",
      pairs: ["Many"],
      type: "Swap",
      features: ["Many Pairs", "Simple interface", "Aggregator"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">XELIS Exchanges</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Buy, sell, and trade XELIS on these supported cryptocurrency exchanges.
            Choose the platform that best suits your trading needs.
          </p>
        </div>
      </section>

      {/* Exchanges Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exchanges.map((exchange) => (
              <div key={exchange.name} className="glass-card overflow-hidden transition-all duration-300 hover:shadow-lg group">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gray-100 rounded-md flex items-center justify-center mr-4">
                      {/* Placeholder for exchange logo */}
                      <img 
                        src={exchange.logo} 
                        alt={`${exchange.name} logo`}
                        className="h-8 w-8 object-contain"
                        onError={(e) => {
                          // Fallback if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exchange.name}</h3>
                      <span className="text-sm text-gray-500">{exchange.type} Exchange</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2">Trading Pairs</h4>
                    <div className="flex flex-wrap gap-2">
                      {exchange.pairs.map(pair => (
                        <span key={pair} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                          {pair}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2">Features</h4>
                    <ul className="space-y-1">
                      {exchange.features.map((feature, i) => (
                        <li key={i} className="text-gray-700 text-sm flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-xelis-blue mr-2 mt-1.5"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href={exchange.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-xelis-blue text-white py-3 rounded-lg font-medium group-hover:bg-xelis-dark-blue transition-colors"
                  >
                    Trade XELIS
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              The XELIS team is working continuously to expand exchange listings. 
              More trading options will be added as the project grows.
              <br />
              <br />
              Reminder: Not your Keys, not your crypto. 
              <br />
              Always hold your XELIS in a wallet and not on exchanges!

            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              
              <a 
                href="/resources" 
                className="button-secondary"
              >
                Get a Wallet
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trading Guide Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Trade XELIS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-xelis-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-xelis-blue">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Create an Account</h3>
              <p className="text-gray-600">
                Sign up for an account on your preferred exchange that lists XELIS. Complete any required verification steps.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-xelis-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-xelis-blue">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Deposit Funds</h3>
              <p className="text-gray-600">
                Deposit BTC, USDT, or other supported currencies to your exchange account to use for trading.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-xelis-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-xelis-blue">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Trade XELIS</h3>
              <p className="text-gray-600">
                Navigate to the XELIS trading pair, enter your desired amount, and complete your purchase or sale.
              </p>
            </div>
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

export default Exchanges;
