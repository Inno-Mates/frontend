"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FaCamera, FaUsers, FaBuilding, FaCalendarAlt, FaFileAlt, FaComments, 
  FaMapMarkerAlt, FaBell, FaChartLine, FaRocket, FaShieldAlt, FaCog, 
  FaMobile, FaDesktop, FaCloud, FaDatabase, FaLock, FaStar, FaArrowRight,
  FaCheck, FaTimes, FaPlay, FaDownload, FaPhone, FaEnvelope, FaGlobe,
  FaSearch, FaFilter, FaChevronDown, FaExternalLinkAlt, FaHeart,
  FaLightbulb, FaHandsHelping, FaAward, FaClock, FaThumbsUp, FaEye
} from "react-icons/fa";
import { useState, useRef } from "react";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<any>(null);
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const serviceCategories = [
    { id: "all", name: "All Services", icon: <FaGlobe className="h-5 w-5" /> },
    { id: "citizen", name: "Citizen Tools", icon: <FaUsers className="h-5 w-5" /> },
    { id: "government", name: "Government", icon: <FaBuilding className="h-5 w-5" /> },
    { id: "analytics", name: "Analytics", icon: <FaChartLine className="h-5 w-5" /> },
    { id: "mobile", name: "Mobile", icon: <FaMobile className="h-5 w-5" /> }
  ];

  const services = [
    {
      id: 1,
      title: "Smart Issue Reporting",
      description: "Revolutionary AI-powered platform that transforms how citizens report civic issues. Simply take a photo and our advanced AI instantly categorizes, geotags, and routes your complaint to the right department.",
      shortDescription: "AI-powered issue reporting with instant categorization and GPS tagging",
      icon: <FaCamera className="h-10 w-10" />,
      category: "citizen",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
      textColor: "text-red-600",
      borderColor: "border-red-200",
      features: [
        "AI-Powered Categorization", "Automatic GPS Tagging", "Photo & Video Upload", 
        "Real-time Status Updates", "Multi-language Support", "Offline Mode"
      ],
      pricing: "Free",
      rating: 4.9,
      reviews: 1247,
      popular: true,
      demo: "/demo/issue-reporting",
      details: {
        "AI Accuracy": "95% categorization accuracy",
        "Response Time": "Instant processing",
        "Languages": "15+ supported languages",
        "Offline Support": "Full offline functionality"
      }
    },
    {
      id: 2,
      title: "Municipal Dashboard",
      description: "Comprehensive command center for municipal staff to manage, prioritize, and track civic issues. Advanced analytics, resource allocation, and team collaboration tools in one powerful platform.",
      shortDescription: "Complete municipal management dashboard with analytics and team tools",
      icon: <FaBuilding className="h-10 w-10" />,
      category: "government",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      features: [
        "Issue Management", "Team Collaboration", "Resource Allocation", 
        "Performance Analytics", "Custom Workflows", "Integration APIs"
      ],
      pricing: "Custom",
      rating: 4.8,
      reviews: 89,
      popular: false,
      demo: "/demo/municipal-dashboard",
      details: {
        "Dashboard Views": "Customizable layouts",
        "Team Size": "Unlimited users",
        "Integrations": "50+ third-party tools",
        "Support": "24/7 dedicated support"
      }
    },
    {
      id: 3,
      title: "Real-time Analytics",
      description: "Advanced analytics platform providing deep insights into civic issues, community trends, and municipal performance. Make data-driven decisions with comprehensive reporting and visualization tools.",
      shortDescription: "Advanced analytics and insights for data-driven municipal decisions",
      icon: <FaChartLine className="h-10 w-10" />,
      category: "analytics",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      textColor: "text-green-600",
      borderColor: "border-green-200",
      features: [
        "Real-time Dashboards", "Predictive Analytics", "Custom Reports", 
        "Trend Analysis", "Performance Metrics", "Data Export"
      ],
      pricing: "From $99/month",
      rating: 4.7,
      reviews: 156,
      popular: false,
      demo: "/demo/analytics",
      details: {
        "Data Points": "Unlimited data processing",
        "Report Types": "20+ pre-built templates",
        "Export Formats": "PDF, Excel, CSV, JSON",
        "Retention": "7 years data retention"
      }
    },
    {
      id: 4,
      title: "Mobile App Suite",
      description: "Native mobile applications for iOS and Android providing seamless civic engagement on-the-go. Full feature parity with web platform plus mobile-specific enhancements.",
      shortDescription: "Native mobile apps for iOS and Android with full feature parity",
      icon: <FaMobile className="h-10 w-10" />,
      category: "mobile",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
      features: [
        "Native Performance", "Offline Sync", "Push Notifications", 
        "Camera Integration", "GPS Tracking", "Biometric Auth"
      ],
      pricing: "Free",
      rating: 4.9,
      reviews: 2156,
      popular: true,
      demo: "/demo/mobile-app",
      details: {
        "Platforms": "iOS 14+, Android 8+",
        "Offline Storage": "Unlimited local storage",
        "Push Notifications": "Real-time updates",
        "Security": "End-to-end encryption"
      }
    },
    {
      id: 5,
      title: "Community Engagement",
      description: "Foster stronger communities through interactive forums, public polls, volunteer coordination, and collaborative initiatives. Build civic participation and neighborhood pride.",
      shortDescription: "Community building tools with forums, polls, and volunteer coordination",
      icon: <FaHandsHelping className="h-10 w-10" />,
      category: "citizen",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
      features: [
        "Community Forums", "Public Polls", "Volunteer Matching", 
        "Event Management", "Neighborhood Groups", "Achievement System"
      ],
      pricing: "Free",
      rating: 4.6,
      reviews: 892,
      popular: false,
      demo: "/demo/community",
      details: {
        "Active Users": "10,000+ monthly active",
        "Events": "Unlimited event creation",
        "Moderation": "AI-powered content moderation",
        "Gamification": "Points and achievement system"
      }
    },
    {
      id: 6,
      title: "API & Integrations",
      description: "Robust API platform enabling seamless integration with existing municipal systems, third-party tools, and custom applications. Enterprise-grade security and scalability.",
      shortDescription: "Enterprise API platform for seamless system integrations",
      icon: <FaCog className="h-10 w-10" />,
      category: "government",
      color: "from-gray-500 to-slate-500",
      bgColor: "bg-gradient-to-br from-gray-50 to-slate-50",
      textColor: "text-gray-600",
      borderColor: "border-gray-200",
      features: [
        "RESTful APIs", "Webhook Support", "SDK Libraries", 
        "Rate Limiting", "Authentication", "Documentation"
      ],
      pricing: "From $199/month",
      rating: 4.8,
      reviews: 67,
      popular: false,
      demo: "/demo/api",
      details: {
        "API Endpoints": "100+ available endpoints",
        "Rate Limits": "10,000 requests/hour",
        "SDKs": "Python, Node.js, PHP, Java",
        "Documentation": "Interactive API explorer"
      }
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "City Manager",
      city: "Springfield",
      avatar: "/avatars/user-1.jpeg",
      content: "This platform has revolutionized how we handle citizen complaints. Response times improved by 60% and citizen satisfaction is at an all-time high.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "IT Director",
      city: "Riverside",
      avatar: "/avatars/user-2.jpeg",
      content: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions about resource allocation.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Community Coordinator",
      city: "Oakdale",
      avatar: "/avatars/user-3.jpeg",
      content: "The community engagement features have brought our neighborhood together. People are more involved in local issues than ever before.",
      rating: 5
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <div ref={heroRef} className="relative isolate overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-32 sm:py-40">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent-500/20 opacity-50 blur-3xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-secondary-500/20 opacity-50 blur-3xl -z-10"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-white/10 opacity-30 blur-3xl -z-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 2
          }}
        />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              style={{ y, opacity }}
              className="space-y-8"
            >
              <motion.span 
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-accent-500/20 to-secondary-500/20 backdrop-blur-sm border border-white/20 text-accent-200 font-semibold text-sm tracking-wide"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                🚀 Comprehensive Civic Solutions
              </motion.span>
              
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Transform Your{" "}
                <span className="bg-gradient-to-r from-accent-300 via-secondary-300 to-accent-400 bg-clip-text text-transparent">
                  Community
                </span>
                <br />
                with Our Services
              </motion.h1>
              
              <motion.p 
                className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                From AI-powered issue reporting to real-time analytics and community engagement tools. 
                Everything you need to build a smarter, more connected city.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-accent-500 to-secondary-500 hover:from-accent-600 hover:to-secondary-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl"
                  >
                    <FaRocket className="mr-2" />
                    Explore Services
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
                  >
                    <FaPlay className="mr-2" />
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>
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

      {/* Search and Filter Section */}
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category.icon}
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-5"></div>
        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary-100/30 opacity-50 blur-3xl -z-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-accent-100/30 opacity-50 blur-3xl -z-10"
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
        />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Our <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to bridge the gap between citizens and municipal authorities, 
              powered by cutting-edge technology and user-centered design.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <Card className={`h-full ${service.bgColor} border-2 ${service.borderColor} hover:shadow-2xl transition-all duration-500 group-hover:border-opacity-60 relative overflow-hidden`}>
                  {/* Popular badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold shadow-lg">
                        <FaStar className="mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4 relative">
                    {/* Icon with enhanced styling */}
                    <motion.div 
                      className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-xl ${service.textColor} group-hover:shadow-2xl relative overflow-hidden mb-6`}
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 rounded-3xl`} />
                      <div className="text-4xl relative z-10">
                        {service.icon}
                      </div>
                    </motion.div>
                    
                    <div className="flex items-start justify-between mb-4">
                      <CardTitle className={`text-2xl font-bold text-gray-900 group-hover:bg-gradient-to-r ${service.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                        {service.title}
                      </CardTitle>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <FaStar className="h-4 w-4" />
                        <span className="text-sm font-semibold text-gray-700">{service.rating}</span>
                        <span className="text-xs text-gray-500">({service.reviews})</span>
                      </div>
                    </div>
                    
                    <CardDescription className="text-gray-700 leading-relaxed">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <motion.span
                            key={featureIndex}
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/80 ${service.textColor} shadow-sm`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                        {service.features.length > 4 && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            +{service.features.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">{service.pricing}</span>
                        <span className="text-sm text-gray-500">per month</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto space-y-3">
                      <Button 
                        className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg`}
                      >
                        <FaEye className="mr-2" />
                        View Details
                      </Button>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                        >
                          <FaPlay className="mr-1" />
                          Demo
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                        >
                          <FaDownload className="mr-1" />
                          Docs
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Hover effect overlay */}
                  <motion.div 
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    initial={false}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              What Our <span className="text-primary-600">Customers</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their communities with our platform.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.city}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-24 relative overflow-hidden">
        {/* Background decorations */}
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent-500/20 opacity-50 blur-3xl -z-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-secondary-500/20 opacity-50 blur-3xl -z-10"
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
        />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Ready to Transform Your Community?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              Join thousands of cities and citizens who are already using our platform to build smarter, 
              more connected communities. Start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-accent-500 to-secondary-500 hover:from-accent-600 hover:to-secondary-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl"
                >
                  <FaRocket className="mr-2" />
                  Get Started Free
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
                >
                  <FaPhone className="mr-2" />
                  Schedule Demo
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
                >
                  <FaEnvelope className="mr-2" />
                  Contact Sales
                </Button>
              </motion.div>
            </div>
            
            <p className="mt-8 text-white/80 text-sm">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <motion.div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedService(null)}
        >
          <motion.div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${selectedService.color} text-white`}>
                    {selectedService.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{selectedService.title}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <FaStar className="h-4 w-4 text-yellow-400" />
                        <span className="font-semibold">{selectedService.rating}</span>
                        <span className="text-gray-500">({selectedService.reviews} reviews)</span>
                      </div>
                      <span className="text-2xl font-bold text-gray-900">{selectedService.pricing}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FaTimes className="h-6 w-6 text-gray-500" />
                </button>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {selectedService.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Features</h4>
                  <div className="space-y-2">
                    {selectedService.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <FaCheck className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h4>
                  <div className="space-y-3">
                    {Object.entries(selectedService.details).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600">{key}:</span>
                        <span className="font-semibold text-gray-900">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button className="flex-1 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white py-3 rounded-xl">
                  <FaRocket className="mr-2" />
                  Get Started
                </Button>
                <Button variant="outline" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-xl">
                  <FaPlay className="mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}