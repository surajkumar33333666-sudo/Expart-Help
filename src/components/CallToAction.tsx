import { MessageSquare, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CallToAction() {
  const contactMethods = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      description: "सीधे मैसेज करें",
      link: "https://wa.me/919343979337?text=Hello%2C%20मुझे%20Expert%20Help%20की%20जानकारी%20चाहिए",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "10,000+", label: "सक्सेसफुल ट्रेडर्स" },
    { icon: <Clock className="w-5 h-5" />, value: "24/7", label: "सपोर्ट अवेलेबल" },
    { value: "90%+", label: "सक्सेस रेट" },
    { value: "₹10Cr+", label: "कुल प्रॉफिट जनरेटेड" }
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black p-8 border border-gray-800">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-4">
            <MessageSquare className="w-5 h-5 text-white" />
            <span className="text-white font-semibold hindi">अभी ज्वाइन करें</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 hindi">
            आपकी ट्रेडिंग सफलता का सफर यहीं से शुरू होता है
          </h2>
          <p className="text-xl text-gray-300 mb-8 hindi">
            दिए गए लिंक पर मेसेज करके आज ही शुरुआत करें
          </p>
        </div>

        <div className="flex justify-center mb-10">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-8 rounded-xl bg-gradient-to-br ${method.color} text-white transform transition-all hover:scale-105 hover:shadow-2xl max-w-md w-full`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center gap-4 mb-4">
                <div className="p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold hindi">{method.title}</h3>
                  <p className="text-white/80 text-lg">+91 93439 79337</p>
                  <p className="text-white/80 mt-2">{method.description}</p>
                </div>
              </div>
              <div className="text-center">
                <span className="inline-block px-6 py-3 bg-white/20 rounded-lg backdrop-blur-sm font-medium text-lg">
                  अभी क्लिक करें
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="bg-black/40 rounded-2xl p-8 border border-gray-700 mb-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8 hindi">
            हमारी सफलता की कहानी संख्याओं में
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-3">
                  {stat.icon && (
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      {stat.icon}
                    </div>
                  )}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2 hindi">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 text-gray-400">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              <span className="hindi">तुरंत एक्शन लें</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>
            
            <motion.a
              href="https://wa.me/919343979337?text=Hello%2C%20मुझे%20Expert%20Help%20की%20जानकारी%20चाहिए"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-lg font-bold shadow-lg shadow-emerald-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-6 h-6" />
              <span className="hindi">अभी WhatsApp पर मैसेज करें (+91 93439 79337)</span>
            </motion.a>
            
            <p className="text-gray-500 text-sm hindi">
              पहले 100 सब्सक्राइबर्स को फ्री पोर्टफोलियो रिव्यू + 1 महीने की फ्री मेंटरशिप
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}