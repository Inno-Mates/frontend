"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaApple, FaGooglePlay, FaMobile, FaBell, FaMap, FaCamera } from 'react-icons/fa';

const AppFeature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
  >
    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-teal-400">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-white mb-1">{title}</h4>
      <p className="text-sm text-white/70">{description}</p>
    </div>
  </motion.div>
);

const MobileAppSection = () => {
  const features = [
    {
      icon: <FaCamera />,
      title: "Quick Capture",
      description: "Take photos and report issues in seconds"
    },
    {
      icon: <FaMap />,
      title: "Smart Location",
      description: "Automatic geo-tagging for accurate reporting"
    },
    {
      icon: <FaBell />,
      title: "Real-time Updates",
      description: "Get notified as your report progresses"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#1E88E5] via-[#1976D2] to-[#0D47A1] overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/patterns/circuit-board.svg')] opacity-5"></div>
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-teal-500 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
                Mobile App
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Take Action on the <span className="text-teal-400">Go</span>
              </h2>
              <p className="text-white/80 text-lg">
                Download our mobile app to report and track civic issues from anywhere, anytime.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div 
              className="grid gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                },
                hidden: { opacity: 0 }
              }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -20 }
                  }}
                >
                  <AppFeature {...feature} />
                </motion.div>
              ))}
            </motion.div>

            {/* Download section */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-black rounded-xl text-white hover:bg-gray-900 transition-colors"
                >
                  <FaApple className="text-2xl" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-black rounded-xl text-white hover:bg-gray-900 transition-colors"
                >
                  <FaGooglePlay className="text-2xl" />
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </motion.a>
              </div>

              {/* QR Code */}
              <div className="inline-block p-4 bg-white rounded-2xl">
                <div className="relative w-32 h-32">
                  <Image
                    src="/qr-code.png"
                    alt="Download App"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">Scan to Download</p>
              </div>
            </motion.div>
          </div>

          {/* Right content - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative max-w-[300px] mx-auto">
              {/* Phone frame */}
              <div className="relative z-20 bg-black rounded-[3rem] p-4 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-3xl"></div>
                <div className="relative aspect-[9/19.5] rounded-[2.5rem] overflow-hidden bg-white">
                  <Image
                    src="/app-screenshot.png"
                    alt="App Interface"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-24 h-24 bg-teal-400 rounded-full blur-2xl opacity-20 z-40"></div>
              <div className="absolute bottom-1/4 -left-8 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-20 z-40"></div>

              {/* Floating UI elements */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute top-1/4 -right-12 bg-white p-3 rounded-xl shadow-lg w-40 z-30"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                    <FaMobile className="w-4 h-4" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">Easy to Use</p>
                    <p className="text-xs text-gray-500">Report in 3 taps</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;