import { TrendingUp, Shield, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-8 pb-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
            initial={{ 
              x: Math.random() * 1200,
              y: Math.random() * 600 
            }}
            animate={{ 
              y: [null, Math.random() * 600],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-70"></div>
              <div className="relative p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Expert
                </span>
                <span className="text-white">Help</span>
              </h1>
              <p className="text-gray-400 text-sm hindi">प्रीमियम इंडियन स्टॉक मार्केट कॉल्स</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300 text-sm hindi">सिक्योर ट्रेडिंग</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm hindi">24/7 सपोर्ट</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300 text-sm hindi">प्रीमियम कॉल्स</span>
              </div>
            </div>
            
            <motion.a
              href="https://wa.me/919343979337?text=Hello%2C%20मुझे%20Expert%20Help%20का%20Free%20Trial%20चाहिए"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold shadow-lg shadow-emerald-500/30 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hindi">फ्री ट्रायल शुरू करें</span>
            </motion.a>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-6 border border-blue-500/20">
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                Exclusive Offer
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block hindi">पहले कमाएं</span>
              <span className="block">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  फिर पे करें
                </span>
              </span>
            </h2>
            
            <p className="text-2xl text-gray-300 mb-8 leading-relaxed hindi">
              पहले हम एक लाख रुपए का प्रॉफिट देते है, उस के बाद आप को 30 पर्सेंट देना होता है।
              जब तक मन करे तब तक कॉल वॉच करे।
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {[
                { label: "₹1 लाख प्रॉफिट गारंटी", color: "from-emerald-500 to-teal-500" },
                { label: "केवल 30% सक्सेस फीस", color: "from-blue-500 to-cyan-500" },
                { label: "अनलिमिटेड कॉल्स", color: "from-purple-500 to-pink-500" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="px-6 py-3 rounded-full backdrop-blur-sm border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-semibold hindi`}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="inline-flex flex-col items-center gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="https://wa.me/919343979337?text=Hello%2C%20मुझे%20Expert%20Help%20की%20जानकारी%20चाहिए"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-bold shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 inline-block"
              >
                <span className="hindi">WhatsApp पर मैसेज करें (+91 93439 79337)</span>
              </a>
              <p className="text-gray-500 text-sm hindi">
                पहले 50 सब्सक्राइबर्स को फ्री मेंटरशिप + पोर्टफोलियो रिव्यू
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-gray-900"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-gray-900"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-gray-900"
          />
        </svg>
      </div>
    </header>
  );
}