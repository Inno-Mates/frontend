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
      phoneImage: "/images/app-screen-1.svg" // You'll need to create this image
    },
    {
      id: 2,
      title: "Submit",
      description: "Automatically tag location and send report",
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      color: "#14b8a6",
      lightColor: "#f0fdfa",
      phoneImage: "/images/app-screen-2.svg" // You'll need to create this image
    },
    {
      id: 3,
      title: "Track",
      description: "Receive updates until resolution",
      icon: <FaBell className="w-6 h-6" />,
      color: "#22c55e",
      lightColor: "#f0fdf4",
      phoneImage: "/images/app-screen-3.svg" // You'll need to create this image
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Clean Green Background Elements */}
      <div className="absolute inset-x-0 top-0 pointer-events-none h-1/2 bg-gradient-to-b from-primary-50/50 to-transparent -z-10"></div>
      <div className="absolute left-0 w-48 h-48 rounded-full opacity-50 pointer-events-none top-1/4 md:w-64 md:h-64 bg-primary-100/40 blur-3xl -z-10"></div>
      <div className="absolute right-0 w-48 h-48 rounded-full opacity-50 pointer-events-none top-1/2 md:w-64 md:h-64 bg-accent-100/40 blur-3xl -z-10"></div>
      <div className="container px-4 mx-auto overflow-x-hidden">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium tracking-wide rounded-full shadow-sm bg-gradient-to-r from-primary-100 to-accent-100 text-primary-800">
              Simple Process
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-neutral-900">
              How It <span className="text-gradient text-gradient-blue-purple">Works</span>
            </h2>
            <p className="max-w-2xl mx-auto leading-relaxed text-neutral-600">
              Our platform makes it easy to report and track civic issues in your community with just a few taps on your phone.
            </p>
          </motion.div>
        </div>

        {/* Steps container */}
        <motion.div 
          className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3"
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
              <div className="h-full overflow-hidden bg-white border border-gray-100 shadow-xl rounded-2xl">
                {/* Step header */}
                <div 
                  className="flex items-start gap-4 p-6"
                  style={{ backgroundColor: step.lightColor }}
                >
                  <div 
                    className="flex items-center justify-center w-12 h-12 rounded-full shrink-0"
                    style={{ backgroundColor: step.color }}
                  >
                    <span className="text-white">{step.icon}</span>
                  </div>
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                      <span 
                        className="flex items-center justify-center w-6 h-6 text-xs text-white rounded-full"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.id}
                      </span>
                      {step.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                {/* Phone illustration */}
                <div className="flex justify-center p-6">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-48 overflow-hidden bg-gray-900 border-8 border-gray-800 shadow-lg h-96 rounded-3xl"
                  >
                    /
                    <div className="absolute inset-0 flex items-center justify-center text-xs text-white bg-gradient-to-b from-gray-800 to-gray-900 text-opacity-20">
                      <Image
                        src={step.phoneImage}
                        alt={`Phone screen for ${step.title}`}
                        fill
                        className="object-contain"
                        sizes="192px"
                        priority
                      />
                    </div>

                    {/* Phone notch */}
                    <div className="absolute top-0 w-1/3 h-5 transform -translate-x-1/2 bg-black left-1/2 rounded-b-xl"></div>
                    
                    {/* Phone home button/indicator */}
                    <div className="absolute w-1/3 h-1 transform -translate-x-1/2 bg-gray-600 rounded-full bottom-2 left-1/2"></div>
                  </motion.div>
                </div>
              </div>
              
              {/* Connecting line between steps (only for desktop) */}
              {step.id < 3 && (
                <div className="hidden md:block absolute top-24 -right-4 w-8 h-0.5 bg-gray-300 z-10">
                  <div className="absolute right-0 w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-gray-300 rounded-full top-1/2"></div>
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
          <p className="mt-4 text-sm text-gray-500">
            Available on iOS and Android
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;