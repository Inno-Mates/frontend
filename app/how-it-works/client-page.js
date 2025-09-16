'use client';

import { Button } from "../../components/ui/Button";
import Link from "next/link";
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaExclamationTriangle, FaMobileAlt, FaClipboardCheck, FaTools, FaChartLine, FaEye, FaMapMarkedAlt, FaCheckCircle, FaWrench, FaThumbsUp, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Iphone15Pro from "../../components/magicui/iphone-15-pro";
import { useRef, useState } from 'react';

export default function ClientHowItWorksPage() {
  // State for expanded steps
  const [expandedStep, setExpandedStep] = useState(null);
  
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
      title: "Spot the Issue",
      description: "Citizens identify civic issues like potholes, broken streetlights, or overflowing trash bins in their community.",
      icon: <FaEye className="w-8 h-8" />,
      color: "bg-gradient-to-br from-red-50 to-orange-50",
      iconColor: "text-red-600",
      borderColor: "border-red-200",
      gradient: "from-red-500 to-orange-500",
      details: "Walk around your neighborhood and spot infrastructure problems that need attention."
    },
    {
      id: 2,
      title: "Report via App",
      description: "Using our mobile app, citizens can quickly report issues with photos, location data, and descriptions.",
      icon: <FaMobileAlt className="w-8 h-8" />,
      color: "bg-gradient-to-br from-blue-50 to-indigo-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      gradient: "from-blue-500 to-indigo-500",
      details: "Take a photo, add a description, and our app automatically captures your location."
    },
    {
      id: 3,
      title: "Smart Verification",
      description: "Our AI system verifies and categorizes reports, ensuring they reach the appropriate municipal departments.",
      icon: <FaCheckCircle className="w-8 h-8" />,
      color: "bg-gradient-to-br from-yellow-50 to-amber-50",
      iconColor: "text-yellow-600",
      borderColor: "border-yellow-200",
      gradient: "from-yellow-500 to-amber-500",
      details: "AI-powered verification ensures reports are legitimate and properly categorized."
    },
    {
      id: 4,
      title: "Municipal Action",
      description: "Municipal authorities address the reported issues and update the status in the system.",
      icon: <FaWrench className="w-8 h-8" />,
      color: "bg-gradient-to-br from-purple-50 to-pink-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
      gradient: "from-purple-500 to-pink-500",
      details: "Authorities receive prioritized reports and take action to resolve the issues."
    },
    {
      id: 5,
      title: "Track & Feedback",
      description: "Citizens can track the status of their reports and provide feedback on the resolution process.",
      icon: <FaThumbsUp className="w-8 h-8" />,
      color: "bg-gradient-to-br from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
      gradient: "from-green-500 to-emerald-500",
      details: "Get real-time updates and rate the quality of the resolution work."
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
      <div className="relative py-24 overflow-hidden text-white bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 sm:py-32">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-repeat opacity-20"></div>
        </div>
        
        {/* Clean Green Decorative Elements */}
        <motion.div 
          className="absolute w-64 h-64 rounded-full opacity-50 top-20 right-20 bg-white/10 blur-3xl -z-10"
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
          className="absolute w-64 h-64 rounded-full opacity-50 bottom-20 left-20 bg-accent-500/20 blur-3xl -z-10"
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
        
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
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
                  className="inline-block px-3 py-1 text-sm font-medium tracking-wide text-white rounded-full shadow-lg bg-gradient-to-r from-primary-500 to-accent-500"
                >
                  Civic Connect
                </motion.span>
                
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
                >
                  How It <span className="text-accent-300">Works</span>
                </motion.h1>
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-lg text-lg leading-relaxed md:text-xl text-white/90"
              >
                Bridging the gap between citizens and municipal authorities to identify, report, and resolve everyday civic issues efficiently.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-4 pt-2 sm:flex-row"
              >
                <Link href="/report">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 btn-hover-lift"
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
              <div className="absolute w-24 h-24 rounded-full opacity-50 -bottom-6 -right-6 bg-accent-500/30 blur-xl"></div>
              <div className="absolute w-32 h-32 rounded-full -top-6 -left-6 bg-primary-500/20 opacity-40 blur-xl"></div>
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
      <div className="py-16 bg-gradient-to-b from-white to-primary-50/30">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              The Problem We're Solving
            </h2>
            <div className="p-8 bg-white border shadow-lg rounded-2xl border-neutral-200/50 card-hover">
              <p className="mb-4 text-lg text-gray-700">
                There exists a <span className="font-semibold text-primary-600">critical gap between citizens and municipal authorities</span> in identifying, reporting, and resolving everyday civic issues.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-neutral-700">
                Citizens encounter potholes, malfunctioning streetlights, overflowing trash bins, and other infrastructure problems daily, but lack effective mechanisms to report these issues to the appropriate authorities.
              </p>
              <p className="text-lg leading-relaxed text-neutral-700">
                Our platform provides a streamlined solution to bridge this gap and create more responsive, efficient communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Flow Section */}
      <div className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50 sm:py-28" ref={targetRef}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-5"></div>
        <motion.div 
          className="absolute rounded-full opacity-50 top-20 right-20 w-72 h-72 bg-blue-100/30 blur-3xl -z-10"
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
          className="absolute rounded-full opacity-50 bottom-20 left-20 w-72 h-72 bg-green-100/30 blur-3xl -z-10"
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

        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto mb-20 text-center"
            style={{ opacity, y, scale }}
          >
            <motion.span 
              className="inline-block px-4 py-2 mb-4 text-sm font-semibold tracking-wide text-blue-800 rounded-full shadow-sm bg-gradient-to-r from-blue-100 to-green-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our Process
            </motion.span>
            <motion.h2 
              className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              The <span className="text-transparent bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">5-Step</span> Process
            </motion.h2>
            <motion.p 
              className="text-xl leading-relaxed text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Our platform simplifies the civic issue reporting and resolution process with an intuitive workflow
            </motion.p>
          </motion.div>

          {/* Enhanced Process Steps */}
          <div className="relative">
            {/* Progress line for desktop */}
            <motion.div 
              className="absolute left-0 right-0 hidden h-1 rounded-full xl:block top-24 bg-gradient-to-r from-blue-200 via-green-200 to-blue-200"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
            />
            
            {/* Process Steps Grid */}
            <motion.div 
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {processSteps.map((step, index) => (
                <motion.div 
                  key={step.id} 
                  className="relative group"
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Step Card */}
                  <motion.div 
                    className={`relative rounded-3xl ${step.color} p-8 border-2 ${step.borderColor} hover:shadow-2xl transition-all duration-500 group-hover:border-opacity-60 h-full cursor-pointer`}
                    onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Step number badge with gradient */}
                    <motion.div 
                      className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-full shadow-lg flex items-center justify-center border-4 border-white`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-lg font-bold text-white">{step.id}</span>
                    </motion.div>

                    {/* Icon container with enhanced styling */}
                    <motion.div 
                      className="flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.div 
                        className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-xl ${step.iconColor} group-hover:shadow-2xl relative overflow-hidden`}
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        animate={{ 
                          scale: [1, 1.05, 1],
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: index * 0.3
                        }}
                      >
                        {/* Icon background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-10 rounded-3xl`} />
                        <div className="relative z-10 text-3xl">
                          {step.icon}
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <div className="text-center">
                      <motion.h3 
                        className={`text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r ${step.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}
                        whileHover={{ x: 2 }}
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p 
                        className="leading-relaxed text-gray-700 transition-colors duration-300 group-hover:text-gray-800"
                        whileHover={{ x: 2 }}
                      >
                        {step.description}
                      </motion.p>

                      {/* Expandable details */}
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: expandedStep === step.id ? "auto" : 0,
                          opacity: expandedStep === step.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 mt-4 border bg-white/50 rounded-2xl border-white/30">
                          <p className="text-sm font-medium text-gray-600">
                            💡 {step.details}
                          </p>
                        </div>
                      </motion.div>

                      {/* Expand/Collapse button */}
                      <motion.div 
                        className="flex justify-center mt-4"
                        animate={{ rotate: expandedStep === step.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`p-2 rounded-full ${expandedStep === step.id ? 'bg-white/80' : 'bg-white/50'} hover:bg-white/80 transition-colors duration-200`}>
                          {expandedStep === step.id ? (
                            <FaChevronUp className="text-gray-600" />
                          ) : (
                            <FaChevronDown className="text-gray-600" />
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Enhanced hover effect overlay */}
                    <motion.div 
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      initial={false}
                    />

                    {/* Pulse effect for active step */}
                    {expandedStep === step.id && (
                      <motion.div
                        className={`absolute inset-0 rounded-3xl border-2 border-gradient-to-r ${step.gradient} opacity-50`}
                        animate={{ 
                          scale: [1, 1.02, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Enhanced connector line for desktop */}
                  {index < processSteps.length - 1 && (
                    <motion.div 
                      className="absolute z-10 hidden w-12 h-1 rounded-full xl:block top-24 -right-6 bg-gradient-to-r from-blue-300 to-green-300"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.8 + (index * 0.2), duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="absolute right-0 w-3 h-3 transform -translate-y-1/2 rounded-full shadow-lg top-1/2 bg-gradient-to-r from-blue-400 to-green-400"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1 + (index * 0.2), duration: 0.4 }}
                        viewport={{ once: true }}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.7, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: 1.5 + (index * 0.2)
                        }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Mobile progress indicator */}
            <div className="flex justify-center mt-12 xl:hidden">
              <div className="flex items-center px-6 py-4 space-x-3 border border-gray-200 rounded-full shadow-lg bg-white/80 backdrop-blur-sm">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`w-4 h-4 rounded-full ${expandedStep === step.id ? `bg-gradient-to-r ${step.gradient}` : 'bg-gray-300'} shadow-sm`}
                      animate={{ 
                        scale: expandedStep === step.id ? [1, 1.3, 1] : [1, 1.1, 1],
                        backgroundColor: expandedStep === step.id ? undefined : ["#d1d5db", "#3b82f6", "#10b981"]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.2
                      }}
                      onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                    />
                    {index < processSteps.length - 1 && (
                      <motion.div 
                        className="w-8 h-0.5 bg-gray-300 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.7 + (index * 0.1), duration: 0.4 }}
                        viewport={{ once: true }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to action */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="default" 
                size="lg" 
                className="px-8 py-4 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 hover:shadow-xl"
              >
                Start Your First Report
              </Button>
            </motion.div>
            <p className="mt-4 text-sm text-gray-500">
              Join thousands of citizens making their communities better
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative py-16 overflow-hidden bg-green-50">
        {/* Decorative elements */}
        <motion.div 
          className="absolute w-64 h-64 bg-green-200 rounded-full top-20 right-20 opacity-30 blur-3xl -z-10"
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
          className="absolute w-64 h-64 bg-blue-200 rounded-full bottom-20 left-20 opacity-30 blur-3xl -z-10"
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
        
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <motion.div 
            className="max-w-2xl mx-auto mb-12 lg:text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium tracking-wide text-green-600 bg-green-100 rounded-full">
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
            className="grid max-w-2xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col p-6 transition-all duration-300 bg-white border border-green-100 shadow-sm rounded-xl hover:border-green-300 hover:shadow-md"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{benefit.title}</h3>
                <p className="flex-grow text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* App Showcase Section */}
      <div className="py-16 overflow-hidden bg-white">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left side: Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 mb-3 text-sm font-medium tracking-wide text-blue-600 bg-blue-100 rounded-full">
                Mobile App
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Powerful <span className="text-blue-600">Mobile Experience</span>
              </h2>
              <p className="text-lg text-gray-600">
                Our mobile application makes it easy to report and track civic issues in your community with just a few taps.
              </p>
              
              <div className="mt-6 space-y-4">
                {["Report issues instantly with photos", "Track resolution status in real-time", "Receive notifications on updates", "Provide feedback on resolutions"].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-center w-5 h-5 mt-1 text-white bg-blue-500 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="pt-6">
                <Button variant="default" size="lg" className="text-white bg-blue-600 hover:bg-blue-700">
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
              <div className="absolute z-20 w-24 h-24 bg-blue-100 rounded-full -bottom-6 -right-6 opacity-70 blur-xl"></div>
              <div className="absolute z-20 w-32 h-32 bg-green-100 rounded-full -top-6 -left-6 opacity-70 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="py-12 mx-auto max-w-7xl sm:px-6 sm:py-16 lg:px-8">
          <motion.div 
            className="relative px-6 py-12 overflow-hidden text-center border border-green-200 shadow-xl isolate bg-gradient-to-br from-green-50 to-blue-50 sm:rounded-3xl sm:px-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="absolute w-64 h-64 bg-green-200 rounded-full -top-24 -right-24 opacity-20 blur-3xl -z-10"
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
              className="absolute w-64 h-64 bg-blue-200 rounded-full -bottom-24 -left-24 opacity-20 blur-3xl -z-10"
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
            
            <h2 className="max-w-2xl mx-auto text-3xl font-bold tracking-tight text-gray-800">
              Ready to help improve your <span className="text-green-600">community</span>?
            </h2>
            <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-600">
              Join thousands of citizens who are using our platform to report issues and make their neighborhoods better.
            </p>
            <motion.div 
              className="flex items-center justify-center mt-8 gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="default" size="lg" className="text-white bg-green-600 hover:bg-green-700">
                  Get Started
                </Button>
              </motion.div>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-green-600 transition-all duration-300 hover:text-green-700 group">
                Learn more <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}