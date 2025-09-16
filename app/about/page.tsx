"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaUsers, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';
import ClientMobileAppSection from './client-mobile-app';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <>
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          {/* Clean Green Decorative Elements */}
          <motion.div 
            className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white/10 opacity-50 blur-3xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
          <motion.div 
            className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-accent-500/20 opacity-50 blur-3xl -z-10"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.2, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 2
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-secondary-500/20 opacity-30 blur-3xl -z-10"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 1
            }}
          />
          
          {/* Clean Green Floating Elements */}
          <motion.div 
            className="absolute top-20 left-10 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm"
            animate={{
              y: [-10, 10, -10],
              transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut'
              }
            }}
          >
            <FaLightbulb className="text-white text-xl" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-20 right-10 w-10 h-10 rounded-full bg-accent-500/30 flex items-center justify-center backdrop-blur-sm"
            animate={{
              y: [5, -5, 5],
              transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                delay: 1
              }
            }}
          >
            <FaChartLine className="text-white text-lg" />
          </motion.div>
          
          {/* Hero content with enhanced animations */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              className="lg:w-1/2 max-w-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <motion.div 
                className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium text-sm tracking-wide mb-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                About Us
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Bridging the <motion.span 
                  className="text-accent-300 relative inline-block"
                  animate={{ 
                    color: ["#14b8a6", "#0d9488", "#14b8a6"] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  Gap
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </motion.span> Between Citizens & Government
              </motion.h1>
              
              <motion.p 
                className="text-lg leading-8 text-white/90 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Every day, citizens encounter potholes, broken streetlights, and overflowing trash bins, but lack effective ways to report these issues. We're changing that with technology that makes civic engagement simple, transparent, and effective.
              </motion.p>
              
              {/* Key Statistics */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-300 mb-1">73%</div>
                  <div className="text-sm text-white/80">of complaints lack proper categorization</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-300 mb-1">50L+</div>
                  <div className="text-sm text-white/80">citizens already using similar platforms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-300 mb-1">98</div>
                  <div className="text-sm text-white/80">cities in India's Smart City Mission</div>
                </div>
              </motion.div>
              
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <motion.button 
                  className="px-6 py-3 bg-primary-600 text-white font-medium rounded-full hover:bg-primary-700 transition-colors duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
                <motion.button 
                  className="px-6 py-3 bg-white text-primary-600 font-medium rounded-full border border-primary-200 hover:border-primary-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Team
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Hero image/illustration */}
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl overflow-hidden shadow-xl">
                <motion.div 
                  className="absolute inset-0 bg-white/40 backdrop-blur-sm flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <div className="grid grid-cols-2 gap-6 p-8">
                    {[FaUsers, FaLightbulb, FaHandshake, FaChartLine].map((Icon, index) => (
                      <motion.div 
                        key={index}
                        className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                          <Icon className="text-primary-600 text-xl" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-1">
                          {["Community", "Innovation", "Partnership", "Growth"][index]}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {["Building stronger together", "Creating new solutions", "Working as one", "Continuous improvement"][index]}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-secondary-500"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-primary-500"
                animate={{
                  scale: [1, 0.8, 1],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Problem Statement Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The <span className="text-primary-600">Problem</span> We're Solving
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional civic reporting systems create barriers between citizens and their local governments, leading to unresolved issues and frustrated communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaUsers className="h-8 w-8" />,
                title: "Information Asymmetry",
                description: "Municipal governments remain unaware of ground-level issues until they become severe",
                color: "bg-red-100 text-red-600"
              },
              {
                icon: <FaLightbulb className="h-8 w-8" />,
                title: "Inefficient Communication",
                description: "Traditional reporting methods are time-consuming and lack proper tracking",
                color: "bg-yellow-100 text-yellow-600"
              },
              {
                icon: <FaChartLine className="h-8 w-8" />,
                title: "Resource Misallocation",
                description: "Without systematic data, municipalities cannot prioritize issues effectively",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: <FaHandshake className="h-8 w-8" />,
                title: "Lack of Transparency",
                description: "Citizens have no visibility into complaint status, reducing civic engagement",
                color: "bg-green-100 text-green-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mx-auto mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-600">Solution</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive platform that connects citizens with municipal authorities through technology, ensuring faster issue resolution and better community engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Smart Issue Reporting",
                    description: "Capture photos with GPS tagging and automatic categorization using AI",
                    icon: "📱"
                  },
                  {
                    title: "Real-time Tracking",
                    description: "Monitor complaint status from submission to resolution with live updates",
                    icon: "📍"
                  },
                  {
                    title: "Automated Routing",
                    description: "Intelligent routing to appropriate departments based on issue type and location",
                    icon: "🔄"
                  },
                  {
                    title: "Community Engagement",
                    description: "Crowdsourced validation and community forums for collective problem-solving",
                    icon: "👥"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Impact Metrics</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Issue Resolution Rate</span>
                    <span className="text-2xl font-bold text-primary-600">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Response Time</span>
                    <span className="text-2xl font-bold text-accent-600">2.5 days</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Citizen Satisfaction</span>
                    <span className="text-2xl font-bold text-green-600">4.2/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '84%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

          {/* Tabs navigation */}
          <div className="mt-12 flex justify-center space-x-4">
            {['mission', 'story', 'values', 'team'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab ? 'bg-primary-600 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>
          
          <motion.div 
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeTab} // This forces re-render of animation when tab changes
          >
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {(activeTab === 'mission' || activeTab === 'story') && (
                <motion.div 
                  className="relative pl-16"
                  variants={itemVariants}
                >
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <FaLightbulb className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-base leading-7">
                    <h3 className="font-semibold text-gray-900">The Problem We Observed</h3>
                    <p className="mt-2 text-gray-600">
                      After analyzing civic engagement patterns across 98 Smart Cities, we discovered that 73% of complaints lack proper categorization, leading to delayed responses and frustrated citizens. Traditional reporting systems create barriers that prevent effective communication between citizens and municipal authorities.
                    </p>
                  </div>
                </motion.div>
              )}
              {(activeTab === 'mission' || activeTab === 'story') && (
                <motion.div 
                  className="relative pl-16"
                  variants={itemVariants}
                >
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <FaHandshake className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-base leading-7">
                    <h3 className="font-semibold text-gray-900">Our Mission</h3>
                    <p className="mt-2 text-gray-600">
                      To eliminate the gap between citizens and municipal authorities by providing an intuitive, AI-powered platform that ensures every civic issue is reported, tracked, and resolved efficiently. We're building the future of civic engagement in India.
                    </p>
                  </div>
                </motion.div>
              )}
              {(activeTab === 'values' || activeTab === 'mission') && (
                <motion.div 
                  className="relative pl-16"
                  variants={itemVariants}
                >
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <FaChartLine className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-base leading-7">
                    <h3 className="font-semibold text-gray-900">Our Innovation Approach</h3>
                    <p className="mt-2 text-gray-600">
                      We combine AI-powered issue detection, crowdsourced validation, and predictive analytics to create a comprehensive solution. Our platform integrates with existing government systems while providing citizens with a seamless, mobile-first experience.
                    </p>
                  </div>
                </motion.div>
              )}
              {(activeTab === 'team' || activeTab === 'values') && (
                <motion.div 
                  className="relative pl-16"
                  variants={itemVariants}
                >
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <FaUsers className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-base leading-7">
                    <h3 className="font-semibold text-gray-900">Government-Ready Solution</h3>
                    <p className="mt-2 text-gray-600">
                      Built specifically for Indian municipalities, our platform aligns with the Smart Cities Mission objectives and integrates with existing e-governance platforms like MyGov. We're ready for pilot implementation in cities with populations under 50,000.
                    </p>
                  </div>
                </motion.div>
              )}
              
              {/* Team members - only shown when team tab is active */}
              {activeTab === 'team' && (
                <motion.div 
                  className="lg:col-span-2 mt-8"
                  variants={itemVariants}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { 
                        name: 'Tech Innovation Team', 
                        role: 'Full-Stack Development', 
                        skills: ['React Native', 'Node.js', 'AI/ML', 'Government APIs'],
                        icon: '💻'
                      },
                      { 
                        name: 'Civic Engagement Experts', 
                        role: 'UX/UI & Community', 
                        skills: ['User Research', 'Government Relations', 'Community Outreach'],
                        icon: '🎨'
                      },
                      { 
                        name: 'Data & Analytics Team', 
                        role: 'AI & Analytics', 
                        skills: ['Machine Learning', 'Data Visualization', 'Predictive Analytics'],
                        icon: '📊'
                      }
                    ].map((member, index) => (
                      <motion.div 
                        key={index}
                        className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <div className="h-32 bg-gradient-to-br from-primary-50 to-accent-50 relative flex items-center justify-center">
                          <div className="text-4xl">{member.icon}</div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">{member.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{member.role}</p>
                          <div className="flex flex-wrap gap-1">
                            {member.skills.map((skill, skillIndex) => (
                              <span key={skillIndex} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl"
                    variants={itemVariants}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Hackathon Achievement</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Built in 48 hours for SIH 2025, our solution addresses real civic challenges with a working prototype ready for government pilot implementation.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">✅ Working Prototype</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">✅ Government Ready</span>
                      <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">✅ Scalable Architecture</span>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
      
      {/* Stakeholder Benefits Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Benefits for <span className="text-primary-600">All Stakeholders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform creates value for every participant in the civic engagement ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Citizens",
                icon: "👥",
                color: "from-blue-500 to-blue-600",
                benefits: [
                  "Faster resolution of daily civic issues",
                  "Increased trust in governance",
                  "Real-time status updates",
                  "Community collaboration tools"
                ]
              },
              {
                title: "Municipal Staff",
                icon: "🏛️",
                color: "from-green-500 to-green-600",
                benefits: [
                  "Streamlined complaint management",
                  "Improved efficiency & accountability",
                  "Data-driven insights",
                  "Automated workflow routing"
                ]
              },
              {
                title: "Government Bodies",
                icon: "🏛️",
                color: "from-purple-500 to-purple-600",
                benefits: [
                  "Enhanced transparency",
                  "Better resource allocation",
                  "Policy planning insights",
                  "Citizen satisfaction metrics"
                ]
              }
            ].map((stakeholder, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stakeholder.color} flex items-center justify-center text-white text-2xl mb-6`}>
                  {stakeholder.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{stakeholder.title}</h3>
                <ul className="space-y-3">
                  {stakeholder.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <ClientMobileAppSection />

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Community?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of citizens and municipal authorities who are already using our platform to build better communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download the App
              </motion.button>
              <motion.button 
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}