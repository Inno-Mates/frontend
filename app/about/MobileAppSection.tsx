'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { FaMobileAlt, FaCamera, FaMapMarkerAlt, FaBell, FaCheckCircle, FaRocket, FaChartLine, FaArrowRight, FaCheck, FaLongArrowAltRight, FaDownload, FaStar } from 'react-icons/fa';
// Stable phone mockup component without animations for better stability
interface PhoneMockupProps {
  children: React.ReactNode;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, width, height, className, style }) => {
  return (
    <div 
       className={`relative rounded-[40px] bg-black p-3 shadow-xl overflow-hidden ${className}`}
       style={{ 
         width: `${width}px`, 
         height: `${height}px`,
         boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15), 0 0 8px rgba(59, 130, 246, 0.3)",
         ...style
       }}
     >
      {/* Phone notch with camera and sensors - simplified for stability */}
      <div 
        className="absolute top-0 z-10 flex items-center justify-center w-1/2 h-6 transform -translate-x-1/2 bg-black left-1/2 rounded-b-2xl"
      >
        {/* Front camera */}
        <div 
          className="absolute w-2 h-2 bg-gray-700 rounded-full right-6"
        />
        
        {/* Proximity sensor */}
        <div 
          className="absolute w-4 h-1 bg-gray-800 rounded-full left-6"
        />
      </div>
      
      {/* Phone frame */}
      <div 
        className="absolute inset-0 rounded-[40px] opacity-30"
        style={{ 
          boxShadow: "0 0 10px 2px rgba(59, 130, 246, 0.3), inset 0 0 5px rgba(255, 255, 255, 0.2)"
        }}
      ></div>
      
      {/* Screen with glass effect - simplified for stability */}
      <div 
        className="relative w-full h-full bg-white rounded-[32px] overflow-hidden"
        style={{ 
          background: "linear-gradient(145deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.3)"
        }}
      >
        {children}
      </div>
    </div>
  );
};

// Custom button component
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  href?: string;
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({ children, className, asChild, ...props }) => {
  const Comp = asChild ? 'a' : 'button';
  return (
    <Comp 
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};

const MobileAppSection = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // App screens data
  const screens = [
    {
      id: 0,
      title: "Step 1: Capture Issue",
      description: "Take a photo and let AI automatically categorize the problem",
      icon: <FaCamera className="w-5 h-5" />,
      color: "#16a34a",
      lightColor: "#f0fdf4",
      mockupContent: (
        <div className="flex flex-col h-full bg-white">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-4 rounded-t-[32px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                  <FaCamera className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Report Issue</h3>
                  <p className="text-xs text-primary-100">Step 1 of 4</p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-white/20"></div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="px-4 py-2 bg-primary-50">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 overflow-hidden rounded-full bg-primary-200">
                <div className="w-1/4 h-full transition-all duration-500 rounded-full bg-primary-500"></div>
              </div>
              <span className="text-xs font-medium text-primary-600">25%</span>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 p-4 space-y-4 bg-gray-50">
            {/* Camera Preview with AI Analysis */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-green-400/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-white/80">
                  <FaCamera className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <div className="absolute flex items-center justify-center w-8 h-8 rounded-full top-3 right-3 bg-black/50">
                <div className="w-4 h-4 border-2 border-white rounded-full"></div>
              </div>
              
              {/* AI Analysis Overlay */}
              <div className="absolute p-2 rounded-lg shadow-lg top-3 left-3 bg-white/90">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-700">AI Analyzing...</span>
                </div>
              </div>
              
              <div className="absolute flex gap-2 bottom-3 left-3 right-3">
                <div className="flex-1 h-1 rounded-full bg-white/50"></div>
                <div className="flex-1 h-1 bg-white rounded-full"></div>
                <div className="flex-1 h-1 rounded-full bg-white/50"></div>
                <div className="flex-1 h-1 rounded-full bg-white/50"></div>
              </div>
            </div>
            
            {/* AI Detection Results */}
            <div className="p-3 bg-white border-l-4 border-green-500 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">AI Detected</span>
              </div>
              <div className="text-sm text-gray-600">Pothole detected with 94% confidence</div>
              <div className="mt-1 text-xs text-green-600">✓ Automatically categorized</div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3">
              <div className="flex items-center justify-center flex-1 h-10 bg-gray-200 rounded-lg">
                <span className="text-sm text-gray-500">Retake</span>
              </div>
              <div className="flex items-center justify-center flex-1 h-10 rounded-lg shadow-lg bg-gradient-to-r from-primary-500 to-primary-600">
                <span className="text-sm font-semibold text-white">Next Step</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Step 2: Location & Routing",
      description: "GPS tagging and intelligent routing to the right department",
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      color: "#14b8a6",
      lightColor: "#f0fdfa",
      mockupContent: (
        <div className="flex flex-col h-full bg-white">
          {/* Header */}
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white p-4 rounded-t-[32px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Location & Routing</h3>
                  <p className="text-xs text-accent-100">Step 2 of 4</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs">Live</span>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="px-4 py-2 bg-accent-50">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 overflow-hidden rounded-full bg-accent-200">
                <div className="w-1/2 h-full transition-all duration-500 rounded-full bg-accent-500"></div>
              </div>
              <span className="text-xs font-medium text-accent-600">50%</span>
            </div>
          </div>
          
          {/* Map Content */}
          <div className="relative flex-1 bg-gradient-to-br from-accent-50 to-accent-100">
            {/* Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-100 to-accent-200">
              {/* Street Grid */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute left-0 right-0 h-px top-1/4 bg-accent-300"></div>
                <div className="absolute left-0 right-0 h-px top-1/2 bg-accent-300"></div>
                <div className="absolute left-0 right-0 h-px top-3/4 bg-accent-300"></div>
                <div className="absolute top-0 bottom-0 w-px left-1/4 bg-accent-300"></div>
                <div className="absolute top-0 bottom-0 w-px left-1/2 bg-accent-300"></div>
                <div className="absolute top-0 bottom-0 w-px left-3/4 bg-accent-300"></div>
              </div>
              
              {/* Location Marker */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2">
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 text-white rounded-full shadow-lg bg-primary-600 animate-pulse">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <div className="absolute rounded-full -inset-4 bg-primary-500/20 animate-ping"></div>
                </div>
              </div>
              
              {/* Department Routing Lines */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2">
                <div className="absolute top-8 left-8 w-16 h-0.5 bg-accent-500 transform rotate-45"></div>
                <div className="absolute top-8 right-8 w-16 h-0.5 bg-accent-500 transform -rotate-45"></div>
              </div>
              
              {/* Department Icons */}
              <div className="absolute flex items-center justify-center w-8 h-8 text-xs font-bold text-white rounded-full top-1/4 left-1/4 bg-accent-500">
                PW
              </div>
              <div className="absolute flex items-center justify-center w-8 h-8 text-xs font-bold text-white rounded-full top-1/4 right-1/4 bg-accent-500">
                UT
              </div>
            </div>
            
            {/* Routing Info Card */}
            <div className="absolute p-4 shadow-xl bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-100">
                  <FaRocket className="w-4 h-4 text-accent-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Auto-Routed</div>
                  <div className="text-xs text-gray-600">Public Works Department</div>
                </div>
              </div>
              <div className="mb-2 text-sm text-gray-700">123 Main Street, Downtown</div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>Priority: High</span>
                <span>ETA: 2 days</span>
              </div>
            </div>
            
            {/* Map Controls */}
            <div className="absolute flex flex-col gap-2 top-4 right-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg shadow-lg bg-white/90">
                <div className="w-4 h-4 border-2 border-gray-400 rounded"></div>
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded-lg shadow-lg bg-white/90">
                <div className="text-xs font-bold text-gray-600">+</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Step 3: Track Progress",
      description: "Real-time updates on your complaint status and resolution progress",
      icon: <FaBell className="w-5 h-5" />,
      color: "#22c55e",
      lightColor: "#f0fdf4",
      mockupContent: (
        <div className="flex flex-col h-full bg-white">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-4 rounded-t-[32px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                  <FaBell className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Track Progress</h3>
                  <p className="text-xs text-primary-100">Step 3 of 4</p>
                </div>
              </div>
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                <span className="text-xs font-bold">3</span>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="px-4 py-2 bg-primary-50">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 overflow-hidden rounded-full bg-primary-200">
                <div className="w-3/4 h-full transition-all duration-500 rounded-full bg-primary-500"></div>
              </div>
              <span className="text-xs font-medium text-primary-600">75%</span>
            </div>
          </div>
          
          {/* Status Timeline */}
          <div className="flex-1 p-4 space-y-4 bg-gray-50">
            {/* Current Status */}
            <div className="p-4 bg-white border-l-4 border-green-500 shadow-sm rounded-xl">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-green-100 rounded-full">
                  <FaRocket className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-green-800">In Progress</span>
                    <span className="text-xs text-gray-500">2h ago</span>
                  </div>
                  <p className="mb-2 text-sm text-gray-700">Public Works team dispatched to location</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600">Estimated completion: 1 day</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Progress Steps */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                  <FaCheckCircle className="w-3 h-3 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Issue Reported</div>
                  <div className="text-xs text-gray-500">2 hours ago</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                  <FaCheckCircle className="w-3 h-3 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Auto-Routed to Department</div>
                  <div className="text-xs text-gray-500">1 hour ago</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                  <FaCheckCircle className="w-3 h-3 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Work Started</div>
                  <div className="text-xs text-gray-500">30 minutes ago</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-500">Work Completed</div>
                  <div className="text-xs text-gray-400">Pending</div>
                </div>
              </div>
            </div>
            
            {/* Action Button */}
            <div className="pt-2">
              <div className="flex items-center justify-center w-full h-10 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600">
                <span className="text-sm font-semibold text-white">Get Notifications</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Step 4: Resolution & Impact",
      description: "Issue resolved and community impact analytics",
      icon: <FaChartLine className="w-5 h-5" />,
      color: "#0d9488",
      lightColor: "#f0fdfa",
      mockupContent: (
        <div className="flex flex-col h-full bg-white">
          {/* Header */}
          <div className="bg-gradient-to-r from-accent-600 to-accent-700 text-white p-4 rounded-t-[32px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                  <FaChartLine className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Resolution Complete</h3>
                  <p className="text-xs text-accent-100">Step 4 of 4</p>
                </div>
              </div>
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                <span className="text-xs">✓</span>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="px-4 py-2 bg-accent-50">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 overflow-hidden rounded-full bg-accent-200">
                <div className="w-full h-full transition-all duration-500 rounded-full bg-accent-500"></div>
              </div>
              <span className="text-xs font-medium text-accent-600">100%</span>
            </div>
          </div>
          
          {/* Completion Content */}
          <div className="flex-1 p-4 space-y-4 bg-gray-50">
            {/* Success Message */}
            <div className="p-4 bg-white border-l-4 border-green-500 shadow-sm rounded-xl">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-green-100 rounded-full">
                  <FaCheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-green-800">Issue Resolved!</span>
                    <span className="text-xs text-gray-500">1 hour ago</span>
                  </div>
                  <p className="mb-2 text-sm text-gray-700">Pothole on Main Street has been successfully repaired</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Completed by Public Works Team</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-white shadow-sm rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                  <span className="text-xs text-gray-600">Resolution Time</span>
                </div>
                <div className="text-2xl font-bold text-primary-600">2.5 days</div>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <span>↗</span>
                  <span>Faster than average</span>
                </div>
              </div>
              
              <div className="p-4 bg-white shadow-sm rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                  <span className="text-xs text-gray-600">Community Impact</span>
                </div>
                <div className="text-2xl font-bold text-accent-600">High</div>
                <div className="text-xs text-gray-500">50+ citizens benefited</div>
              </div>
            </div>
            
            {/* Community Feedback */}
            <div className="p-4 bg-white shadow-sm rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-secondary-500"></div>
                <span className="text-sm font-semibold text-gray-700">Community Response</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Positive Feedback</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">12</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Similar Issues Reported</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">3</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Preventive Actions</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">2</span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3">
              <div className="flex items-center justify-center flex-1 h-10 bg-gray-200 rounded-lg">
                <span className="text-sm text-gray-500">Report Another</span>
              </div>
              <div className="flex items-center justify-center flex-1 h-10 rounded-lg shadow-lg bg-gradient-to-r from-accent-500 to-accent-600">
                <span className="text-sm font-semibold text-white">View Analytics</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];
  
  // Auto-cycle through screens every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [screens.length]);
  
  // Track mouse position for interactive particles
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => {
        section.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 300, damping: 24 }
    }
  };

  // Stable animation variants for phone - removed floating effects for stability
  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
        duration: 0.8 
      }
    },
    hover: {
      boxShadow: "0 40px 80px rgba(0,0,0,0.2)",
      filter: "brightness(1.1)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10
      }
    }
    // Removed float animation for stability
  };
  
  // Enhanced animation for floating elements with 3D perspective
  const floatingAnimation = {
    y: [-10, 10, -10],
    x: [-5, 5, -5],
    rotateY: [-5, 5, -5],
    rotateX: [2, -2, 2],
    z: [0, 30, 0],
    filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: 'loop' as const,
      ease: 'easeInOut'
    }
  };

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-primary-50/30 to-white">
      {/* Clean Green Decorative Elements */}
      <div className="absolute top-0 left-0 rounded-full w-96 h-96 bg-primary-100/50 opacity-60 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-accent-100/50 opacity-60 blur-3xl -z-10"></div>
      <div className="absolute w-64 h-64 rounded-full opacity-50 top-1/3 right-1/4 bg-primary-200/40 blur-3xl -z-10"></div>
      
      {/* Enhanced 3D particles and effects with perspective */}
      <motion.div 
        className="absolute inset-0 overflow-hidden -z-5 "
        style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Clean Green Theme Floating Particles */}
        {[...Array(12)].map((_, i) => { // Optimized for clean green theme
          const size = 2 + Math.random() * 4;
          const color = i % 4 === 0 ? '#22c55e' : 
                       i % 4 === 1 ? '#14b8a6' : 
                       i % 4 === 2 ? '#16a34a' : '#0d9488';
          const depth = Math.random() * 100 - 50; // Reduced depth for cleaner look
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                top: `${initialY}%`,
                left: `${initialX}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                boxShadow: `0 0 ${size * 2}px ${color}`, // Reduced shadow size
                filter: 'blur(0.5px)',
                zIndex: Math.floor(depth),
                transformStyle: "preserve-3d",
                transform: `translateZ(${depth}px)`,
              }}
              animate={{
                y: [0, Math.random() * 150 - 75], // Reduced movement range
                x: [0, Math.random() * 150 - 75], // Reduced movement range
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.5, 1], // Reduced scale range
              }}
              transition={{
                duration: 8 + Math.random() * 12, // Reduced animation duration
                repeat: Infinity,
                repeatType: "mirror", // Changed to mirror for better performance
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 2,
                opacity: 0.9,
                boxShadow: `0 0 ${size * 4}px ${color}`,
                transition: { duration: 0.3 }
              }}
            >
              {/* Interactive glow that follows mouse - simplified calculations */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundColor: color,
                  boxShadow: `0 0 ${size * 3}px ${color}`, // Reduced glow size
                  opacity: 0,
                  filter: 'blur(1px)',
                }}
                animate={{
                  opacity: mousePosition.x > 0 ? 
                    Math.max(0, 0.6 - (Math.abs(mousePosition.x / window.innerWidth * 100 - initialX) + 
                                     Math.abs(mousePosition.y / window.innerHeight * 100 - initialY)) / 60) : 0,
                  scale: mousePosition.x > 0 ? 
                    1 + (0.8 - (Math.abs(mousePosition.x / window.innerWidth * 100 - initialX) + 
                              Math.abs(mousePosition.y / window.innerHeight * 100 - initialY)) / 60) : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          );
        })}
        
        {/* Clean Green Theme Floating Shapes */}
        {[...Array(3)].map((_, i) => { // Clean minimal shapes for green theme
          const shapes = [
            'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)', // pentagon
            'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // diamond
            'circle(50% at 50% 50%)', // circle
          ];
          
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;
          const size = 25 + Math.random() * 30; // Smaller for cleaner look
          
          return (
            <motion.div
              key={`shape-${i}`}
              className="absolute opacity-10"
              style={{
                top: `${initialY}%`,
                left: `${initialX}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: 'transparent',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                clipPath: shapes[i % shapes.length],
                zIndex: -1,
                perspective: '1000px',
                transformStyle: "preserve-3d"
              }}
              animate={{
                y: [0, Math.random() * 80 - 40], // Reduced movement range
                x: [0, Math.random() * 80 - 40], // Reduced movement range
                rotateX: [0, 180], // Reduced rotation for better performance
                rotateY: [0, 180], // Reduced rotation for better performance
                opacity: [0.05, 0.15, 0.05] // Reduced opacity change
              }}
              transition={{
                duration: 15 + Math.random() * 10, // Reduced animation duration
                repeat: Infinity,
                repeatType: "mirror", // Changed to mirror for better performance
                ease: "linear"
              }}
              whileHover={{
                scale: 1.2, // Cleaner scale effect
                opacity: 0.2,
                borderColor: 'rgba(34, 197, 94, 0.6)',
                borderWidth: '2px',
                transition: { duration: 0.3 }
              }}
            >
              {/* Simplified interactive glow effect that follows mouse */}
              {mousePosition.x > 0 && ( // Only render when mouse is over the section
                <motion.div
                  className="absolute inset-0"
                  style={{
                    clipPath: shapes[i % shapes.length],
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    opacity: Math.max(0, 0.5 - (Math.abs(mousePosition.x / window.innerWidth * 100 - initialX) + 
                                      Math.abs(mousePosition.y / window.innerHeight * 100 - initialY)) / 50),
                    transform: `rotateX(${(mousePosition.y / window.innerHeight - 0.5) * 15}deg) 
                               rotateY(${(mousePosition.x / window.innerWidth - 0.5) * -15}deg)`
                  }}
                />
              )}
            </motion.div>
          );
        })}
        
        {/* Clean Green Gradient Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full opacity-15 blur-3xl"
            style={{
              top: `${20 + (i * 30)}%`,
              left: `${20 + (i * 30)}%`,
              width: '120px',
              height: '120px',
              background: i === 0 ? 'radial-gradient(circle, rgba(34,197,94,0.4) 0%, rgba(34,197,94,0) 70%)' :
                         i === 1 ? 'radial-gradient(circle, rgba(20,184,166,0.4) 0%, rgba(20,184,166,0) 70%)' :
                                   'radial-gradient(circle, rgba(22,163,74,0.4) 0%, rgba(22,163,74,0) 70%)',
              zIndex: -2
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      
      <div className="container px-4 mx-auto">
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-600 font-medium text-sm tracking-wide mb-4 shadow-sm">
              <motion.span 
                className="inline-flex items-center gap-1.5"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                <FaMobileAlt className="mr-1" /> Mobile App Experience
              </motion.span>
            </span>
          </motion.div>
          
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-neutral-900">
            How Our App <span className="relative text-primary-600">
              Works
              <motion.span 
                className="absolute left-0 w-full h-1 rounded-full -bottom-2 bg-gradient-to-r from-primary-500 to-accent-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg leading-relaxed text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Follow the complete journey from issue reporting to resolution in just 4 simple steps. Our AI-powered platform ensures every civic problem gets the right attention and quick resolution.
          </motion.p>
        </motion.div>

        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left side: Enhanced Phone mockup */}
          <motion.div 
            className="relative z-10 flex justify-center"
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={phoneVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              {/* Connection lines between phone and steps */}
              <svg className="absolute inset-0 hidden w-full h-full -z-10 opacity-70 lg:block" viewBox="0 0 400 650" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                  d="M320 150 Q 400 150, 450 100" 
                  stroke="#E0E7FF" 
                  strokeWidth="2" 
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                <motion.path 
                  d="M320 250 Q 400 250, 450 250" 
                  stroke="#E0E7FF" 
                  strokeWidth="2" 
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
                <motion.path 
                  d="M320 350 Q 400 350, 450 400" 
                  stroke="#E0E7FF" 
                  strokeWidth="2" 
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.1 }}
                />
                <motion.path 
                  d="M320 450 Q 400 450, 450 550" 
                  stroke="#E0E7FF" 
                  strokeWidth="2" 
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.4 }}
                />
              </svg>
              
              {/* Clean Green Phone Glow Effect */}
              <div 
                className="absolute inset-0 rounded-[40px] blur-xl -z-10"
                style={{ 
                  background: `linear-gradient(135deg, ${screens[activeScreen].color}20, ${screens[activeScreen].color}10)`,
                  opacity: 0.8
                }}
              />
              
              {/* Enhanced custom phone mockup with improved screen transitions */}
              <div className="relative overflow-hidden perspective-1000">
                <motion.div
                  animate="float"
                  variants={phoneVariants}
                  className="relative z-10"
                >
                  <PhoneMockup width={320} height={650} className="drop-shadow-2xl" style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeScreen}
                        style={{ transformStyle: "preserve-3d" }}
                        initial={{ 
                          opacity: 0, 
                          scale: 0.85, 
                          filter: "blur(10px)", 
                          rotateY: 45,
                          z: -100,
                          transformPerspective: 1000
                        }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1, 
                          filter: "blur(0px)",
                          rotateY: 0,
                          z: 0,
                          transformPerspective: 1000,
                          transition: { 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 20,
                            duration: 0.7 
                          }
                        }}
                        exit={{ 
                          opacity: 0, 
                          scale: 0.85, 
                          filter: "blur(10px)",
                          rotateY: -45,
                          z: -100,
                          transformPerspective: 1000,
                          transition: { 
                            type: "spring", 
                            stiffness: 200, 
                            damping: 25,
                            duration: 0.5 
                          } 
                        }}
                        className="relative w-full h-full perspective-1000"
                      >
                        {/* Step navigation buttons */}
                        <div className="absolute left-0 right-0 z-20 flex justify-center space-x-3 bottom-6">
                          {screens.map((screen, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveScreen(idx)}
                              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeScreen === idx ? 'bg-white w-5' : 'bg-white/50'}`}
                              aria-label={`View ${screen.title}`}
                            />
                          ))}
                        </div>
                        {/* Stable screen glow effect */}
                        <div 
                          className="absolute inset-0 rounded-[35px] blur-xl -z-10"
                          style={{ 
                            backgroundColor: screens[activeScreen].color,
                            opacity: 0.3
                          }}
                        />
                        
                        {/* App screen content with 3D perspective */}
                        <motion.div 
                          className="relative z-10 w-full h-full"
                          style={{ transformStyle: "preserve-3d" }}
                          initial={{ opacity: 0, scale: 0.95, z: -20 }}
                          animate={{ 
                            opacity: 1, 
                            scale: 1, 
                            z: 0,
                            transition: { 
                              delay: 0.2, 
                              duration: 0.5,
                              type: "spring",
                              stiffness: 200,
                              damping: 20
                            }
                          }}
                        >
                          {screens[activeScreen].mockupContent}
                        </motion.div>
                        
                        {/* Enhanced animated screen overlay with 3D depth */}
                        <motion.div 
                          className="absolute inset-0 rounded-[35px] bg-gradient-to-b from-transparent to-black/10 pointer-events-none"
                          style={{ 
                            transformStyle: "preserve-3d",
                            transform: "translateZ(5px)",
                            backgroundSize: "100% 200%"
                          }}
                          animate={{ 
                            opacity: [0.1, 0.25, 0.1],
                            backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            repeatType: "reverse" as const,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Enhanced screen reflection with 3D glass effect */}
                        <motion.div 
                          className="absolute inset-0 rounded-[35px] bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none"
                          style={{ 
                            backgroundSize: "200% 200%",
                            transformStyle: "preserve-3d",
                            transform: "translateZ(10px)",
                            mixBlendMode: "overlay"
                          }}
                          animate={{ 
                            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                            opacity: [0.3, 0.7, 0.3]
                          }}
                          transition={{ 
                            duration: 8, 
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Additional glass highlight effect */}
                        <motion.div 
                          className="absolute inset-0 rounded-[35px] pointer-events-none overflow-hidden"
                          style={{ 
                            transformStyle: "preserve-3d",
                            transform: "translateZ(15px)"
                          }}
                        >
                          <motion.div
                            className="absolute -inset-full w-[300%] h-[300%] bg-gradient-to-br from-white/30 via-white/5 to-transparent"
                            animate={{
                              x: ["-100%", "100%"],
                              y: ["-100%", "100%"],
                              rotate: [0, 15]
                            }}
                            transition={{
                              duration: 10,
                              repeat: Infinity,
                              repeatType: "reverse",
                              ease: "linear"
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </PhoneMockup>
                </motion.div>
                
                {/* Enhanced screen indicator dots */}
                <div className="absolute flex space-x-3 transform -translate-x-1/2 bottom-4 left-1/2">
                  {screens.map((screen, index) => (
                    <motion.button
                      key={index}
                      className={`w-3 h-3 rounded-full overflow-hidden relative`}
                      style={{ 
                        backgroundColor: activeScreen === index ? screen.color : 'rgba(209, 213, 219, 0.8)',
                        boxShadow: activeScreen === index ? `0 0 10px ${screen.color}80` : 'none'
                      }}
                      onClick={() => setActiveScreen(index)}
                      whileHover={{ scale: 1.3, boxShadow: `0 0 12px ${screen.color}90` }}
                      whileTap={{ scale: 0.9 }}
                      animate={activeScreen === index ? {
                        scale: [1, 1.2, 1],
                        boxShadow: [`0 0 5px ${screen.color}50`, `0 0 10px ${screen.color}80`, `0 0 5px ${screen.color}50`]
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: activeScreen === index ? Infinity : 0,
                        repeatType: "reverse"
                      }}
                    >
                      {activeScreen === index && (
                        <motion.div 
                          className="absolute inset-0 bg-white opacity-30"
                          animate={{ 
                            scale: [1.5, 1],
                            opacity: [0.8, 0]
                          }}
                          transition={{ 
                            duration: 1,
                            repeat: Infinity
                          }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              {/* Clean Green Animated Decorative Elements */}
              <motion.div 
                className="absolute w-40 h-40 rounded-full -bottom-8 -left-8 bg-primary-200/60 opacity-60 blur-xl -z-10"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.8, 0.6],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
              <motion.div 
                className="absolute w-40 h-40 rounded-full -top-8 -right-8 bg-accent-200/60 opacity-60 blur-xl -z-10"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.7, 0.6],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              />
              
              {/* Floating feature badges */}
              <motion.div
                className="absolute z-40 flex items-center gap-2 p-2 text-sm font-medium bg-white rounded-lg shadow-lg -left-16 top-1/4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: floatingAnimation.y,
                  rotateY: floatingAnimation.rotateY,
                  rotateX: floatingAnimation.rotateX,
                  z: floatingAnimation.z,
                  filter: floatingAnimation.filter
                }}
                transition={{ 
                  delay: 1.5,
                  duration: floatingAnimation.transition.duration,
                  repeat: floatingAnimation.transition.repeat,
                  repeatType: floatingAnimation.transition.repeatType as any,
                  ease: floatingAnimation.transition.ease as any
                }}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600">
                  <FaCamera />
                </div>
                <span className="text-neutral-700">Step 1: Capture</span>
              </motion.div>
              
              <motion.div
                className="absolute z-30 flex items-center gap-2 p-2 text-sm font-medium bg-white rounded-lg shadow-lg -right-16 top-2/3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: floatingAnimation.y,
                  rotateY: floatingAnimation.rotateY,
                  rotateX: floatingAnimation.rotateX,
                  z: floatingAnimation.z,
                  filter: floatingAnimation.filter
                }}
                transition={{ 
                  delay: 2,
                  duration: floatingAnimation.transition.duration,
                  repeat: floatingAnimation.transition.repeat,
                  repeatType: floatingAnimation.transition.repeatType as any,
                  ease: floatingAnimation.transition.ease as any
                }}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-100 text-accent-600">
                  <FaRocket />
                </div>
                <span className="text-neutral-700">Step 4: Complete</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side: Enhanced Process steps */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {/* Process flow connector */}
            <div className="absolute hidden w-1 h-full transform -translate-x-1/2 opacity-50 left-1/2 bg-gradient-to-b from-transparent via-primary-200 to-transparent lg:block" />
            
            {screens.map((screen) => (
              <motion.div 
                key={screen.id}
                variants={itemVariants}
                className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${activeScreen === screen.id ? 'bg-white shadow-xl border-l-4 scale-105' : 'bg-white/70 border-neutral-200 hover:bg-white hover:shadow-lg'}`}
                style={{ 
                  borderLeftColor: activeScreen === screen.id ? screen.color : 'transparent',
                  boxShadow: activeScreen === screen.id ? `0 10px 25px -5px ${screen.color}20, 0 10px 10px -5px ${screen.color}10` : ''
                }}
                onClick={() => setActiveScreen(screen.id)}
                whileHover={{ x: 8, scale: activeScreen === screen.id ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-5">
                  <motion.div 
                    className="relative flex items-center justify-center text-white rounded-full w-14 h-14 shrink-0"
                    style={{ backgroundColor: screen.color }}
                    whileHover={{ rotate: 10 }}
                    animate={activeScreen === screen.id ? { 
                      scale: [1, 1.1, 1],
                      boxShadow: [`0 0 0 0 ${screen.color}50`, `0 0 0 10px ${screen.color}00`]
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: activeScreen === screen.id ? Infinity : 0,
                      repeatType: "reverse"
                    }}
                  >
                    {screen.icon}
                    
                    {/* Ripple effect for active screen */}
                    {activeScreen === screen.id && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ border: `2px solid ${screen.color}` }}
                        animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <motion.span 
                        className="flex items-center justify-center text-xs font-bold text-white rounded-full w-7 h-7"
                        style={{ backgroundColor: screen.color }}
                        whileHover={{ scale: 1.1 }}
                        animate={activeScreen === screen.id ? { y: [0, -3, 0] } : {}}
                        transition={{ duration: 1, repeat: activeScreen === screen.id ? Infinity : 0 }}
                      >
                        {screen.id + 1}
                      </motion.span>
                      
                      <h3 className="text-xl font-bold text-neutral-900">
                        {screen.title}
                      </h3>
                      
                      {activeScreen === screen.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring" }}
                        >
                          <FaCheck className="text-primary-600" />
                        </motion.div>
                      )}
                    </div>
                    
                    <p className="mt-1 leading-relaxed text-neutral-600">{screen.description}</p>
                    
                    {activeScreen === screen.id && (
                      <motion.div
                        className="flex items-center mt-3 text-sm font-medium"
                        style={{ color: screen.color }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span>Learn more</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="ml-1"
                        >
                          <FaLongArrowAltRight />
                        </motion.span>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            
            <motion.div 
              variants={itemVariants}
              className="flex justify-center mt-12"
            >
              <Button
                className="relative px-8 py-6 overflow-hidden text-lg font-medium text-white rounded-full shadow-lg group bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 btn-hover-lift"
                asChild={true}
                href="#download"
              >
                <motion.span 
                  className="inline-block w-full"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-primary-700 to-accent-700 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  <motion.div 
                    className="relative flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, 0, -10, 0],
                        scale: [1, 1.1, 1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                      }}
                    >
                      <FaDownload className="text-xl" />
                    </motion.div>
                    
                    <span>Download the App</span>
                    
                    <motion.div 
                      className="ml-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <FaArrowRight />
                    </motion.div>
                  </motion.div>
                  
                  {/* Clean Green Star Effect */}
                  <motion.div 
                    className="absolute top-0 right-0 -mt-1 -mr-1"
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 text-xs font-bold text-white rounded-full bg-gradient-to-r from-primary-500 to-accent-500">
                      <FaStar />
                    </div>
                  </motion.div>
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;