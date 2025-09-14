'use client';

import { Button } from "../../components/ui/Button";
import Link from "next/link";
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaExclamationTriangle, FaMobileAlt, FaClipboardCheck, FaTools, FaChartLine } from 'react-icons/fa';
import Iphone15Pro from "../../components/magicui/iphone-15-pro";
import { useRef } from 'react';

export default function ClientHowItWorksPage() {
  // Refs for scroll animations
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  
  // Animation variants
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
  
  // App screens for iPhone mockup
  const appScreens = [
    "/images/app-screen-1.jpg",
    "/images/app-screen-2.jpg",
    "/images/app-screen-3.jpg"
  ];

  // Process steps
  const processSteps = [
    {
      id: 1,
      title: "Identify Issues",
      description: "Citizens identify civic issues like potholes, broken streetlights, or overflowing trash bins in their community.",
      icon: <FaExclamationTriangle className="h-6 w-6" />,
      color: "bg-primary-100",
      iconColor: "text-primary-600",
      borderColor: "border-primary-200"
    },
    {
      id: 2,
      title: "Report via App",
      description: "Using our mobile app, citizens can quickly report issues with photos, location data, and descriptions.",
      icon: <FaMobileAlt className="h-6 w-6" />,
      color: "bg-accent-100",
      iconColor: "text-accent-600",
      borderColor: "border-accent-200"
    },
    {
      id: 3,
      title: "Verification",
      description: "Our system verifies and categorizes reports, ensuring they reach the appropriate municipal departments.",
      icon: <FaClipboardCheck className="h-6 w-6" />,
      color: "bg-secondary-100",
      iconColor: "text-secondary-600",
      borderColor: "border-secondary-200"
    },
    {
      id: 4,
      title: "Resolution",
      description: "Municipal authorities address the reported issues and update the status in the system.",
      icon: <FaTools className="h-6 w-6" />,
      color: "bg-primary-100",
      iconColor: "text-primary-600",
      borderColor: "border-primary-200"
    },
    {
      id: 5,
      title: "Tracking & Feedback",
      description: "Citizens can track the status of their reports and provide feedback on the resolution process.",
      icon: <FaChartLine className="h-6 w-6" />,
      color: "bg-accent-100",
      iconColor: "text-accent-600",
      borderColor: "border-accent-200"
    }
  ];

  // Benefits
  const benefits = [
    {
      title: "Efficient Communication",
      description: "Direct channel between citizens and municipal authorities"
    },
    {
      title: "Transparency",
      description: "Real-time updates on issue resolution status"
    },
    {
      title: "Data-Driven Decisions",
      description: "Analytics help prioritize resources for community needs"
    },
    {
      title: "Community Engagement",
      description: "Citizens actively participate in improving their neighborhoods"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-24 sm:py-32 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-repeat opacity-20"></div>
        </div>
        
        {/* Clean Green Decorative Elements */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/10 opacity-50 blur-3xl -z-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-accent-500/20 opacity-50 blur-3xl -z-10"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        ></motion.div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium text-sm tracking-wide shadow-lg"
                >
                  Civic Connect
                </motion.span>
                
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  How It <span className="text-accent-300">Works</span>
                </motion.h1>
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed"
              >
                Bridging the gap between citizens and municipal authorities to identify, report, and resolve everyday civic issues efficiently.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <Link href="/report">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 rounded-full font-semibold text-white shadow-lg flex items-center justify-center gap-2 transition-all duration-300 btn-hover-lift"
                  >
                    <FaMobileAlt />
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right content - App mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex justify-center"
            >
              <Iphone15Pro 
                width={320} 
                height={650} 
                src="/images/app-screen-1.jpg"
                className="drop-shadow-2xl"
              />
              
              {/* Clean Green Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-500/30 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-500/20 rounded-full opacity-40 blur-xl"></div>
            </motion.div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Problem Statement Section */}
      <div className="bg-gradient-to-b from-white to-primary-50/30 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mb-6">
              The Problem We're Solving
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-200/50 card-hover">
              <p className="text-lg text-gray-700 mb-4">
                There exists a <span className="font-semibold text-primary-600">critical gap between citizens and municipal authorities</span> in identifying, reporting, and resolving everyday civic issues.
              </p>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                Citizens encounter potholes, malfunctioning streetlights, overflowing trash bins, and other infrastructure problems daily, but lack effective mechanisms to report these issues to the appropriate authorities.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Our platform provides a streamlined solution to bridge this gap and create more responsive, efficient communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Flow Section */}
      <div className="bg-white py-16 sm:py-24" ref={targetRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:text-center mb-16"
            style={{ opacity, y, scale }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 text-primary-800 font-medium text-sm tracking-wide mb-3 shadow-sm">
              Our Process
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              The <span className="text-gradient text-gradient-blue-purple">5-Step</span> Process
            </h2>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
              Our platform simplifies the civic issue reporting and resolution process
            </p>
          </motion.div>

          <motion.div 
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Process Steps */}
            <div className="col-span-3">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {processSteps.map((step, index) => (
                  <motion.div 
                    key={step.id} 
                    className={`relative rounded-2xl ${step.color} p-6 border ${step.borderColor} hover:shadow-lg transition-all duration-300`}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <motion.div 
                      className="flex items-center gap-4 mb-4"
                      whileHover={{ x: 3 }}
                    >
                      <motion.div 
                        className={`flex h-10 w-10 items-center justify-center rounded-lg bg-white ${step.iconColor}`}
                        whileHover={{ rotate: 5 }}
                        animate={{ 
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: index * 0.2
                        }}
                      >
                        {step.icon}
                      </motion.div>
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm font-medium text-gray-700">{step.id}</span>
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                    
                    {/* Connector line (except for the last item) */}
                    {index < processSteps.length - 1 && (
                      <motion.div 
                        className="hidden xl:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300"
                        initial={{ width: 0 }}
                        whileInView={{ width: "2rem" }}
                        transition={{ delay: 0.5 + (index * 0.2), duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-400"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.7 + (index * 0.2), duration: 0.3 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-green-50 py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-green-200 opacity-30 blur-3xl -z-10"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-blue-200 opacity-30 blur-3xl -z-10"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        ></motion.div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-600 font-medium text-sm tracking-wide mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Key <span className="text-green-600">Benefits</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              How our platform improves community engagement and municipal operations
            </p>
          </motion.div>

          <motion.div 
            className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col bg-white p-6 rounded-xl shadow-sm border border-green-100 hover:border-green-300 hover:shadow-md transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 flex-grow">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* App Showcase Section */}
      <div className="bg-white py-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm tracking-wide mb-3">
                Mobile App
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Powerful <span className="text-blue-600">Mobile Experience</span>
              </h2>
              <p className="text-lg text-gray-600">
                Our mobile application makes it easy to report and track civic issues in your community with just a few taps.
              </p>
              
              <div className="space-y-4 mt-6">
                {["Report issues instantly with photos", "Track resolution status in real-time", "Receive notifications on updates", "Provide feedback on resolutions"].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="pt-6">
                <Button variant="default" size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                  Download App
                </Button>
              </div>
            </motion.div>
            
            {/* Right side: Phone mockup */}
            <motion.div 
              className="relative flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Iphone15Pro 
                width={320} 
                height={650} 
                src="/images/app-screen-2.jpg"
                className="drop-shadow-2xl"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-70 blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-100 rounded-full opacity-70 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-16 lg:px-8">
          <motion.div 
            className="relative isolate overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 px-6 py-12 text-center shadow-xl sm:rounded-3xl sm:px-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-green-200 opacity-20 blur-3xl -z-10"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl -z-10"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            ></motion.div>
            
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-800">
              Ready to help improve your <span className="text-green-600">community</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Join thousands of citizens who are using our platform to report issues and make their neighborhoods better.
            </p>
            <motion.div 
              className="mt-8 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="default" size="lg" className="bg-green-600 text-white hover:bg-green-700">
                  Get Started
                </Button>
              </motion.div>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-green-600 hover:text-green-700 group transition-all duration-300">
                Learn more <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}