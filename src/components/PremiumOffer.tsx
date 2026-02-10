import { Check, Star, Shield, Zap, Target, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PremiumOffer() {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "हाई एक्यूरेसी कॉल्स",
      description: "90%+ सटीकता के साथ प्रीमियम स्टॉक रिकमेंडेशन"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "रियल-टाइम अलर्ट्स",
      description: "मार्केट मूवमेंट पर तुरंत नोटिफिकेशन"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "रिस्क मैनेजमेंट",
      description: "स्टॉप लॉस और टार्गेट लेवल के साथ कॉम्प्लीट गाइडेंस"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "एक्सपर्ट मेंटरशिप",
      description: "10+ साल के अनुभवी ट्रेडर्स से सीधी गाइडेंस"
    }
  ];

  const profitStructure = [
    { amount: "₹1,00,000", label: "पहला प्रॉफिट गारंटी" },
    { amount: "30%", label: "सक्सेस फीस" },
    { amount: "∞", label: "अनलिमिटेड कॉल्स" }
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20 p-8 border border-gray-700">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                Premium Offer
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white hindi">
              विशेष ऑफर: पहले कमाएं, फिर पे करें
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-black/30 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4 hindi">प्रॉफिट स्ट्रक्चर</h3>
              <div className="space-y-4">
                {profitStructure.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-300 hindi">{item.label}</span>
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      {item.amount}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-6 border border-emerald-500/30">
              <h4 className="text-lg font-semibold text-white mb-3 hindi">कैसे काम करता है?</h4>
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span className="hindi">हम आपको ₹1 लाख का प्रॉफिट दिलाते हैं</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span className="hindi">प्रॉफिट मिलने के बाद आप 30% शेयर करते हैं</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span className="hindi">जब तक चाहें तब तक कॉल्स प्राप्त करें</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white hindi">प्रीमियम फीचर्स</h3>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/30 rounded-xl p-5 border border-gray-700 hover:border-blue-500/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg w-fit mb-4">
                    <div className="text-blue-400">{feature.icon}</div>
                  </div>
                  <h4 className="font-semibold text-white mb-2 hindi">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/30">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-white hindi">स्पेशल बोनस</h4>
                  <p className="text-gray-400 text-sm">पहले 50 सब्सक्राइबर्स के लिए</p>
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full">
                  <span className="font-bold text-white">FREE</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="hindi">1 महीने की फ्री मेंटरशिप</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="hindi">रिस्क मैनेजमेंट वर्कशॉप</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="hindi">पर्सनलाइज्ड पोर्टफोलियो रिव्यू</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-4 hindi">
            "पहले हम एक लाख रुपए का प्रॉफिट देते है, उस के बाद आप को 30 पर्सेंट देना होता है। जब तक मन करे तब तक कॉल वॉच करे।"
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="hindi">100% सेफ ट्रेडिंग</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="hindi">इंस्टेंट एक्सेस</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              <span className="hindi">प्रूवन रिजल्ट्स</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}