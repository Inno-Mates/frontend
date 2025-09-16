"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCamera, FaMapMarkerAlt, FaBell } from 'react-icons/fa';

const HowItWorksSection = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Step data for the three-step process
  const steps = [
    {
      id: 1,
      title: "Capture",
      description: "Take a photo and describe the issue",
      icon: <FaCamera className="w-6 h-6" />,
      color: "#16a34a",
      lightColor: "#f0fdf4",
      phoneImage: "/phone-capture.png" // You'll need to create this image
    },
    {
      id: 2,
      title: "Submit",
      description: "Automatically tag location and send report",
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      color: "#14b8a6",
      lightColor: "#f0fdfa",
      phoneImage: "/phone-submit.png" // You'll need to create this image
    },
    {
      id: 3,
      title: "Track",
      description: "Receive updates until resolution",
      icon: <FaBell className="w-6 h-6" />,
      color: "#22c55e",
      lightColor: "#f0fdf4",
      phoneImage: "/phone-track.png" // You'll need to create this image
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      {/* Clean Green Background Elements */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-primary-50/50 to-transparent -z-10 pointer-events-none"></div>
      <div className="absolute left-0 top-1/4 w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary-100/40 opacity-50 blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full bg-accent-100/40 opacity-50 blur-3xl -z-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 overflow-x-hidden">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 text-primary-800 font-medium text-sm tracking-wide mb-3 shadow-sm">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How It <span className="text-gradient text-gradient-blue-purple">Works</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Our platform makes it easy to report and track civic issues in your community with just a few taps on your phone.
            </p>
          </motion.div>
        </div>

        {/* Steps container */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step) => (
            <motion.div 
              key={step.id}
              className="relative"
              variants={itemVariants}
            >
              {/* Step card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full border border-gray-100">
                {/* Step header */}
                <div 
                  className="p-6 flex items-start gap-4"
                  style={{ backgroundColor: step.lightColor }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: step.color }}
                  >
                    <span className="text-white">{step.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <span 
                        className="w-6 h-6 rounded-full text-xs flex items-center justify-center text-white"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.id}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{step.description}</p>
                  </div>
                </div>
                
                {/* Phone illustration */}
                <div className="p-6 flex justify-center">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-48 h-96 bg-gray-900 rounded-3xl overflow-hidden border-8 border-gray-800 shadow-lg"
                  >
                    {/* Phone screen content - this is a placeholder, you'll need actual images */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center text-white text-opacity-20 text-xs">
                      {/* Replace with actual phone screen images */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-center text-white text-opacity-50">
                          Phone screen for<br />
                          <span className="font-bold text-white">{step.title}</span><br />
                          (Replace with actual image)
                        </p>
                      </div>
                    </div>
                    
                    {/* Phone notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl"></div>
                    
                    {/* Phone home button/indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-600 rounded-full"></div>
                  </motion.div>
                </div>
              </div>
              
              {/* Connecting line between steps (only for desktop) */}
              {step.id < 3 && (
                <div className="hidden md:block absolute top-24 -right-4 w-8 h-0.5 bg-gray-300 z-10">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a 
            href="#download" 
            className="inline-block px-8 py-4 bg-[#1E88E5] hover:bg-[#1976D2] rounded-full font-semibold text-white shadow-lg transition-all duration-300"
          >
            Download the App
          </a>
          <p className="mt-4 text-gray-500 text-sm">
            Available on iOS and Android
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;