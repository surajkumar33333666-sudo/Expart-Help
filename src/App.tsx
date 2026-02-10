import Header from './components/Header';
import StockChart3D from './components/StockChart3D';
import TradingAnimation from './components/TradingAnimation';
import PremiumOffer from './components/PremiumOffer';
import CallToAction from './components/CallToAction';
import { motion } from 'framer-motion';

export function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* 3D Stock Chart Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 hindi">लाइव 3D मार्केट विज़ुअलाइज़ेशन</h2>
            <p className="text-gray-400 max-w-2xl mx-auto hindi">
              रियल-टाइम स्टॉक मूवमेंट को 3D ग्राफ़िक्स में देखें। हमारे एडवांस्ड एल्गोरिदम मार्केट ट्रेंड्स को विज़ुअलाइज़ करते हैं।
            </p>
          </div>
          <StockChart3D />
        </motion.section>

        {/* Trading Animation & Premium Offer in Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TradingAnimation />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <PremiumOffer />
          </motion.div>
        </div>

        {/* Call to Action Section */}
        <motion.section
          id="cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <CallToAction />
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 hindi">हमारे ग्राहक क्या कहते हैं</h2>
            <p className="text-gray-400 max-w-2xl mx-auto hindi">
              10,000+ सक्सेसफुल ट्रेडर्स ने हमारे साथ अपनी ट्रेडिंग जर्नी शुरू की
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "राजेश शर्मा",
                role: "3 साल के अनुभवी ट्रेडर",
                content: "एक्सपर्ट हेल्प के साथ मेरी ट्रेडिंग कम्पलीटली बदल गई। पहले महीने में ही ₹1.5 लाख का प्रॉफिट कमाया!",
                profit: "₹1.5L प्रॉफिट"
              },
              {
                name: "प्रिया पटेल",
                role: "नया ट्रेडर",
                content: "शुरुआत में डर लगता था, लेकिन एक्सपर्ट गाइडेंस और रिस्क मैनेजमेंट ने मुझे कॉन्फिडेंट बनाया।",
                profit: "₹80K प्रॉफिट"
              },
              {
                name: "अमित वर्मा",
                role: "प्रोफेशनल इन्वेस्टर",
                content: "10+ साल के अनुभव के बाद भी, एक्सपर्ट हेल्प के एनालिसिस ने मेरे पोर्टफोलियो को 40% इम्प्रूव किया।",
                profit: "40% ग्रोथ"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-6 border border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold hindi">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 hindi">{testimonial.content}</p>
                <div className="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg inline-block">
                  <span className="text-emerald-400 font-semibold">{testimonial.profit}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 hindi">अक्सर पूछे जाने वाले सवाल</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "पहले ₹1 लाख का प्रॉफिट कैसे गारंटी है?",
                a: "हमारे एडवांस्ड एल्गोरिदम और एक्सपर्ट एनालिसिस 90%+ एक्यूरेसी के साथ काम करते हैं। पहले महीने में अगर ₹1 लाख प्रॉफिट नहीं हुआ, तो अगले महीने की सर्विस फ्री है।"
              },
              {
                q: "30% फीस कब देनी होती है?",
                a: "सिर्फ तब जब आपको ₹1 लाख का प्रॉफिट मिल जाता है। उससे पहले कोई फीस नहीं। प्रॉफिट मिलने के बाद ही 30% सक्सेस फीस देनी होती है।"
              },
              {
                q: "कितने समय तक कॉल्स मिलती रहेंगी?",
                a: "जब तक आप चाहें! एक बार ज्वाइन करने के बाद, आप जीवनभर के लिए हमारे प्रीमियम कॉल्स और मेंटरशिप एक्सेस कर सकते हैं।"
              },
              {
                q: "शुरुआती ट्रेडर्स के लिए क्या है?",
                a: "हम नए ट्रेडर्स के लिए कम्पलीट गाइडेंस, वर्कशॉप्स और 1-on-1 मेंटरिंग प्रोवाइड करते हैं। बेसिक्स से लेकर एडवांस्ड स्ट्रेटजीज तक सब कुछ कवर किया जाता है।"
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-xl p-6 border border-gray-700"
              >
                <h4 className="font-semibold text-lg mb-2 hindi">{faq.q}</h4>
                <p className="text-gray-400 hindi">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <span className="text-white font-bold">EH</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Expert Help</h3>
                  <p className="text-gray-400 text-sm hindi">प्रीमियम स्टॉक मार्केट कॉल्स</p>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2 hindi">
                © 2024 Expert Help. सभी अधिकार सुरक्षित।
              </p>
              <p className="text-gray-400 mb-2 hindi">
                संपर्क: WhatsApp +91 93439 79337
              </p>
              <p className="text-gray-500 text-sm hindi">
                स्टॉक मार्केट ट्रेडिंग में जोखिम होता है। पिछला प्रदर्शन भविष्य के परिणामों की गारंटी नहीं है।
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
