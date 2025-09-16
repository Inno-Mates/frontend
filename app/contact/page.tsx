"use client";

import { Button } from "../../components/ui/Button";
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
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
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-white via-gray-50 to-green-50 px-6 py-24 sm:py-32 lg:px-8">        
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
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
              Get in Touch
            </h2>
          </motion.div>
          <motion.p 
            className="mt-4 text-lg leading-8 text-gray-600"
            variants={itemVariants}
          >
            Have questions or feedback? We&apos;d love to hear from you.
          </motion.p>
          <motion.div 
            className="flex justify-center gap-4 mt-6"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center gap-2 text-primary-600"
              whileHover={{ scale: 1.05 }}
            >
              <FaEnvelope /> support@magicui.com
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 text-primary-600"
              whileHover={{ scale: 1.05 }}
            >
              <FaPhone /> +1 (555) 123-4567
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.form 
          className="mx-auto mt-16 max-w-xl sm:mt-20 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                Phone number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 transition-all duration-300"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center justify-center gap-2"
              >
                Send message
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.5 }}
                >
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </motion.svg>
              </motion.span>
            </Button>
          </motion.div>
        </motion.form>

        <motion.div 
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-blue-600"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <FaEnvelope className="h-6 w-6 text-white" />
            </motion.div>
            <h3 className="mt-4 text-lg font-semibold leading-7 text-gray-900">Email</h3>
            <p className="mt-2 text-gray-600">support@magicui.com</p>
          </motion.div>

          <motion.div 
            className="rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-blue-600"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <FaPhone className="h-6 w-6 text-white" />
            </motion.div>
            <h3 className="mt-4 text-lg font-semibold leading-7 text-gray-900">Phone</h3>
            <p className="mt-2 text-gray-600">+1 (555) 234-5678</p>
          </motion.div>

          <motion.div 
            className="rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-blue-600"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <FaMapMarkerAlt className="h-6 w-6 text-white" />
            </motion.div>
            <h3 className="mt-4 text-lg font-semibold leading-7 text-gray-900">Office</h3>
            <p className="mt-2 text-gray-600">123 Main Street, Suite 456, Anytown, USA 12345</p>
          </motion.div>
         </motion.div>
        </div>
      </>
   );
}