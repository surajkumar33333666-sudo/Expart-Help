import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

export default function TradingAnimation() {
  const [stocks, setStocks] = useState<StockData[]>([
    { symbol: 'RELIANCE', name: 'रिलायंस', price: 2850.75, change: 42.50, changePercent: 1.51 },
    { symbol: 'TCS', name: 'टीसीएस', price: 3850.25, change: -12.75, changePercent: -0.33 },
    { symbol: 'HDFCBANK', name: 'एचडीएफसी बैंक', price: 1650.80, change: 28.40, changePercent: 1.75 },
    { symbol: 'INFY', name: 'इन्फोसिस', price: 1520.60, change: 15.20, changePercent: 1.01 },
    { symbol: 'ITC', name: 'आईटीसी', price: 425.30, change: 8.45, changePercent: 2.03 },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prev => prev.map(stock => ({
        ...stock,
        price: stock.price + (Math.random() - 0.5) * 10,
        change: stock.change + (Math.random() - 0.5) * 2,
        changePercent: stock.changePercent + (Math.random() - 0.5) * 0.5
      })));
      setActiveIndex((prev) => (prev + 1) % stocks.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/20 rounded-full"
            initial={{ x: -50, y: Math.random() * 400 }}
            animate={{ 
              x: 800,
              y: Math.random() * 400
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <BarChart3 className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white hindi">लाइव मार्केट डेटा</h3>
              <p className="text-gray-400 text-sm">Real-time stock updates</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 bg-emerald-500/10 rounded-full">
              <span className="text-emerald-400 font-medium">NSE</span>
            </div>
            <div className="px-3 py-1 bg-blue-500/10 rounded-full">
              <span className="text-blue-400 font-medium">BSE</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {stocks.map((stock, index) => (
            <motion.div
              key={stock.symbol}
              className={`p-4 rounded-xl backdrop-blur-sm border ${
                index === activeIndex 
                  ? 'bg-white/5 border-emerald-500/30' 
                  : 'bg-black/20 border-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    stock.change >= 0 ? 'bg-emerald-500/10' : 'bg-red-500/10'
                  }`}>
                    {stock.change >= 0 ? (
                      <TrendingUp className={`w-5 h-5 ${
                        stock.change >= 0 ? 'text-emerald-400' : 'text-red-400'
                      }`} />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{stock.symbol}</span>
                      <span className="text-sm text-gray-400 hindi">{stock.name}</span>
                    </div>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-gray-400" />
                        <span className="text-lg font-bold text-white">₹{stock.price.toFixed(2)}</span>
                      </div>
                      <div className={`flex items-center gap-1 ${
                        stock.change >= 0 ? 'text-emerald-400' : 'text-red-400'
                      }`}>
                        <span className="font-medium">
                          {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
                        </span>
                        <span className="text-sm">
                          ({stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative w-24 h-10">
                  <svg className="w-full h-full" viewBox="0 0 100 40">
                    <path
                      d="M0,20 Q25,10 50,25 T100,15"
                      fill="none"
                      stroke={stock.change >= 0 ? '#10b981' : '#ef4444'}
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">
              <span className="hindi">अंतिम अपडेट: </span>
              {new Date().toLocaleTimeString('hi-IN')}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-emerald-400">लाइव</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}