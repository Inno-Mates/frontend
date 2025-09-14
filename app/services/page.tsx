"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCamera, FaUsers, FaBuilding, FaCalendarAlt, FaFileAlt, FaComments, FaMapMarkerAlt, FaBell, FaChartLine, FaRocket } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      title: "Smart Issue Reporting",
      description: "AI-powered categorization and GPS tagging for instant issue classification. Report potholes, broken streetlights, and other civic problems with just a photo.",
      icon: <FaCamera className="h-8 w-8" />,
      color: "from-primary-500 to-primary-600",
      bgColor: "bg-primary-50",
      textColor: "text-primary-600",
      features: ["AI Categorization", "GPS Tagging", "Photo Upload", "Real-time Status"]
    },
    {
      title: "Automated Routing",
      description: "Intelligent routing to appropriate departments based on issue type and location. Ensures every complaint reaches the right authority.",
      icon: <FaRocket className="h-8 w-8" />,
      color: "from-accent-500 to-accent-600",
      bgColor: "bg-accent-50",
      textColor: "text-accent-600",
      features: ["Smart Routing", "Department Assignment", "Priority Management", "Workflow Automation"]
    },
    {
      title: "Real-time Tracking",
      description: "Monitor complaint status from submission to resolution with live updates. Stay informed about the progress of your reports.",
      icon: <FaBell className="h-8 w-8" />,
      color: "from-secondary-500 to-secondary-600",
      bgColor: "bg-secondary-50",
      textColor: "text-secondary-600",
      features: ["Live Updates", "Status Tracking", "Notifications", "Progress Monitoring"]
    },
    {
      title: "Community Analytics",
      description: "Crowdsourced validation and community forums for collective problem-solving. See how your community is improving together.",
      icon: <FaChartLine className="h-8 w-8" />,
      color: "from-primary-600 to-accent-500",
      bgColor: "bg-primary-50",
      textColor: "text-primary-600",
      features: ["Community Insights", "Trend Analysis", "Performance Metrics", "Data Visualization"]
    },
    {
      title: "Government Dashboard",
      description: "Comprehensive dashboard for municipal staff to manage complaints, track performance, and allocate resources efficiently.",
      icon: <FaBuilding className="h-8 w-8" />,
      color: "from-accent-600 to-primary-500",
      bgColor: "bg-accent-50",
      textColor: "text-accent-600",
      features: ["Admin Panel", "Resource Management", "Performance Tracking", "Team Collaboration"]
    },
    {
      title: "Citizen Engagement",
      description: "Foster community participation through forums, polls, and collaborative initiatives. Build stronger neighborhoods together.",
      icon: <FaUsers className="h-8 w-8" />,
      color: "from-secondary-500 to-primary-500",
      bgColor: "bg-secondary-50",
      textColor: "text-secondary-600",
      features: ["Community Forums", "Public Polls", "Volunteer Opportunities", "Collaborative Projects"]
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-24 sm:py-32">
        {/* Animated background elements */}
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
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1
          }}
        />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight sm:text-6xl"
            >
              Our <span className="text-accent-300">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-white/90"
            >
              Comprehensive solutions to bridge the gap between citizens and municipal authorities. 
              From AI-powered issue reporting to real-time tracking and community analytics.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Services Grid */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-24 sm:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-100 opacity-50 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent-100 opacity-50 blur-3xl -z-10"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to <span className="text-primary-600">transform</span> civic engagement
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our platform addresses the 73% categorization gap with AI-powered solutions that make civic engagement simple, transparent, and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:border-primary-300 transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${service.bgColor} ${service.textColor}`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300"
                      >
                        Learn more
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Issue Resolution Rate", value: "75%", icon: <FaChartLine className="h-8 w-8" /> },
              { label: "Average Response Time", value: "2.5 days", icon: <FaBell className="h-8 w-8" /> },
              { label: "Citizen Satisfaction", value: "4.2/5", icon: <FaUsers className="h-8 w-8" /> },
              { label: "Cities Served", value: "98+", icon: <FaBuilding className="h-8 w-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/90 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl px-6 py-16 text-center shadow-2xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white">
              Ready to transform your community?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
              Join thousands of citizens and municipal authorities who are already using our platform to build better communities.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Get Started Free
              </Button>
              <Link 
                href="/contact" 
                className="text-white hover:text-white/80 text-lg font-semibold flex items-center gap-2"
              >
                Schedule a Demo <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}