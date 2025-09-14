"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { FaChartLine, FaClipboardCheck, FaExclamationTriangle, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

export default function DashboardPage() {
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
      <div className="relative bg-gradient-to-br from-white via-gray-50 to-green-50 py-16 overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-green-100 opacity-30 blur-3xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-green-100 opacity-30 blur-3xl -z-10"
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
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mb-12 text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600"
              variants={itemVariants}
            >
              Your Dashboard
            </motion.h1>
            <motion.p 
              className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Welcome to your Civic Connect dashboard. Here you can track your reports, initiatives, and monitor community progress.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-white">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sm font-medium text-gray-500">Total Reports</CardTitle>
                    <motion.div 
                      className="bg-blue-100 p-2 rounded-full"
                      whileHover={{ rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaClipboardCheck className="h-4 w-4 text-blue-600" />
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="text-3xl font-bold text-gray-900"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    12
                  </motion.div>
                  <div className="mt-1 text-xs text-green-600 flex items-center gap-1">
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-3 w-3" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </motion.svg>
                    +3 from last month
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-2 bg-gradient-to-r from-green-50 to-white">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sm font-medium text-gray-500">Resolved Issues</CardTitle>
                    <motion.div 
                      className="bg-green-100 p-2 rounded-full"
                      whileHover={{ rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaCheckCircle className="h-4 w-4 text-green-600" />
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="text-3xl font-bold text-gray-900"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    8
                  </motion.div>
                  <div className="mt-1 text-xs text-green-600">75% resolution rate</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-2 bg-gradient-to-r from-amber-50 to-white">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sm font-medium text-gray-500">Pending Issues</CardTitle>
                    <motion.div 
                      className="bg-amber-100 p-2 rounded-full"
                      whileHover={{ rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaExclamationTriangle className="h-4 w-4 text-amber-600" />
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="text-3xl font-bold text-gray-900"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    4
                  </motion.div>
                  <div className="mt-1 text-xs text-yellow-600">2 in progress</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-2 bg-gradient-to-r from-purple-50 to-white">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sm font-medium text-gray-500">Community Events</CardTitle>
                    <motion.div 
                      className="bg-purple-100 p-2 rounded-full"
                      whileHover={{ rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaCalendarAlt className="h-4 w-4 text-purple-600" />
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="text-3xl font-bold text-gray-900"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    3
                  </motion.div>
                  <div className="mt-1 text-xs text-blue-600">Upcoming this month</div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div 
              className="lg:col-span-2"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">Recent Reports</CardTitle>
                      <CardDescription>Your most recent issue reports and their status</CardDescription>
                    </div>
                    <motion.div 
                      className="bg-blue-100 p-2 rounded-full"
                      whileHover={{ rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaClipboardCheck className="h-5 w-5 text-blue-600" />
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3">Report ID</th>
                          <th scope="col" className="px-6 py-3">Issue</th>
                          <th scope="col" className="px-6 py-3">Location</th>
                          <th scope="col" className="px-6 py-3">Status</th>
                          <th scope="col" className="px-6 py-3">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <motion.tr 
                          className="bg-white border-b hover:bg-gray-50 transition-colors duration-200"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                          whileHover={{ scale: 1.01 }}
                        >
                          <td className="px-6 py-4 font-medium">#1234</td>
                          <td className="px-6 py-4">Pothole</td>
                          <td className="px-6 py-4">Main St & 5th Ave</td>
                          <td className="px-6 py-4">
                            <motion.span 
                              className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full inline-flex items-center gap-1"
                              whileHover={{ scale: 1.05 }}
                            >
                              <FaCheckCircle className="h-3 w-3" /> Resolved
                            </motion.span>
                          </td>
                          <td className="px-6 py-4">2023-08-15</td>
                        </motion.tr>
                        <motion.tr 
                          className="bg-white border-b hover:bg-gray-50 transition-colors duration-200"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          whileHover={{ scale: 1.01 }}
                        >
                          <td className="px-6 py-4 font-medium">#1235</td>
                          <td className="px-6 py-4">Broken Streetlight</td>
                          <td className="px-6 py-4">Park Ave & 10th St</td>
                          <td className="px-6 py-4">
                            <motion.span 
                              className="px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full inline-flex items-center gap-1"
                              whileHover={{ scale: 1.05 }}
                            >
                              <motion.div 
                                animate={{ rotate: [0, 360] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="h-3 w-3 border-2 border-yellow-500 border-t-transparent rounded-full"
                              />
                              In Progress
                            </motion.span>
                          </td>
                          <td className="px-6 py-4">2023-08-20</td>
                        </motion.tr>
                        <motion.tr 
                          className="bg-white border-b hover:bg-gray-50 transition-colors duration-200"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                          whileHover={{ scale: 1.01 }}
                        >
                          <td className="px-6 py-4 font-medium">#1236</td>
                          <td className="px-6 py-4">Graffiti</td>
                          <td className="px-6 py-4">Community Center</td>
                          <td className="px-6 py-4">
                            <motion.span 
                              className="px-2 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded-full inline-flex items-center gap-1"
                              whileHover={{ scale: 1.05 }}
                            >
                              <FaExclamationTriangle className="h-3 w-3" /> Pending
                            </motion.span>
                          </td>
                          <td className="px-6 py-4">2023-08-25</td>
                        </motion.tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Button variant="outline">View All Reports</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Community events in your area</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h4 className="font-medium text-gray-900">Community Cleanup</h4>
                      <p className="text-sm text-gray-500 mt-1">Sep 15, 2023 • 9:00 AM</p>
                      <p className="text-sm text-gray-600 mt-2">Join us for a community cleanup event at Central Park.</p>
                    </div>
                    <div className="border-b pb-4">
                      <h4 className="font-medium text-gray-900">Town Hall Meeting</h4>
                      <p className="text-sm text-gray-500 mt-1">Sep 20, 2023 • 6:00 PM</p>
                      <p className="text-sm text-gray-600 mt-2">Discuss upcoming infrastructure projects with city officials.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Farmers Market</h4>
                      <p className="text-sm text-gray-500 mt-1">Sep 25, 2023 • 8:00 AM</p>
                      <p className="text-sm text-gray-600 mt-2">Local farmers market at the community center parking lot.</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Button variant="outline">View All Events</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}