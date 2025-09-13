"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCamera, FaCheckCircle } from 'react-icons/fa';

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1E88E5] via-[#1976D2] to-[#0D47A1] text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-repeat opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
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
                className="inline-block px-3 py-1 rounded-full bg-[#FF8F00] text-white font-medium text-sm tracking-wide"
              >
                  Civic Connect
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Make Your City <span className="text-[#43A047]">Better</span>, Together
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-blue-50 max-w-lg"
            >
              Report civic issues in seconds, track progress in real-time, and be part of the solution in your community.
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
                  className="px-8 py-4 bg-[#FF8F00] hover:bg-[#F57C00] rounded-full font-semibold text-white shadow-lg flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <FaMapMarkerAlt />
                  Report an Issue
                </motion.button>
              </Link>
              
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white rounded-full font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                See How It Works
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <Image 
                        src={`/avatars/user-${i}.jpeg`} 
                        alt="Community member" 
                      width={40} 
                      height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
              </div>
              <p className="text-sm text-blue-50">
                <span className="font-bold">5,000+</span> active community members
                </p>
            </motion.div>
          </motion.div>
          
          {/* Right content - Map visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-12 bg-[#F5F7FA] flex items-center px-4 gap-2 z-10">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-4 text-gray-500 text-sm">City Issue Map</div>
              </div>
              
              <div className="pt-12 pb-4 px-4">
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-[#E3F2FD]">
                  <Image 
                    src="/map-placeholder.jpg" 
                    alt="Interactive city map" 
                    fill
                    className="object-cover"
                  />
                  
                  {/* Map pins */}
                  <div className="absolute top-1/4 left-1/3 animate-pulse">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">3</div>
                    </div>
                  <div className="absolute top-1/2 right-1/4 animate-pulse">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs">5</div>
                      </div>
                  <div className="absolute bottom-1/3 left-1/2 animate-pulse">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">2</div>
                    </div>
                  
                  {/* Issue cards */}
                  <div className="absolute top-20 right-12 bg-white p-3 rounded-lg shadow-lg w-48">
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                        <FaCamera className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">Pothole Reported</h4>
                        <p className="text-xs text-gray-500">Main St & 5th Ave</p>
                        <div className="flex items-center gap-1 mt-1 text-xs text-orange-500">
                          <span className="inline-block w-2 h-2 rounded-full bg-orange-500"></span>
                          In Progress
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-16 left-12 bg-white p-3 rounded-lg shadow-lg w-48">
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                        <FaCheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">Graffiti Cleaned</h4>
                        <p className="text-xs text-gray-500">Central Park West</p>
                        <div className="flex items-center gap-1 mt-1 text-xs text-green-500">
                          <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                          Resolved
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs text-blue-500 font-medium">Reports Today</p>
                    <p className="text-2xl font-bold text-blue-700">24</p>
                      </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-xs text-green-500 font-medium">Resolved</p>
                    <p className="text-2xl font-bold text-green-700">18</p>
                    </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-xs text-purple-500 font-medium">Avg. Response</p>
                    <p className="text-2xl font-bold text-purple-700">2.4h</p>
                    </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#43A047] rounded-full opacity-30 blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FF8F00] rounded-full opacity-20 blur-xl"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Video modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-xl overflow-hidden max-w-4xl w-full">
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 text-gray-700 hover:bg-black/20 transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="aspect-video bg-gray-100">
                {/* Video embed would go here */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-500">Video demonstration would play here</p>
                  </div>
                </div>
              </div>
            </div>
      )}
    </section>
  );
};

export default HeroSection;