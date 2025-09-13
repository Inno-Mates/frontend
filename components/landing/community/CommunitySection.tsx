"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft, FaStar, FaUsers, FaComments, FaHandshake } from 'react-icons/fa';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

const Testimonial = ({ quote, author, role, avatar }: TestimonialProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-teal-100">
          <Image 
            src={avatar} 
            alt={author} 
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      
      <div className="relative">
        <FaQuoteLeft className="absolute -left-2 -top-2 text-teal-100 text-4xl opacity-50" />
        <p className="text-gray-700 italic relative z-10 pl-4">"{quote}"</p>
      </div>
      
      <div className="flex mt-4 text-amber-400">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
    </motion.div>
  );
};

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mb-4 text-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const CommunitySection = () => {
  const testimonials = [
    {
      quote: "This platform transformed how our neighborhood addresses local issues. Response times have improved dramatically!",
      author: "Sarah Johnson",
      role: "Community Leader",
      avatar: "/avatars/user-1.jpeg"
    },
    {
      quote: "I reported a broken street light and it was fixed within 48 hours. Incredible service that makes a real difference.",
      author: "Michael Chen",
      role: "Resident",
      avatar: "/avatars/user-2.jpeg"
    },
    {
      quote: "The transparency of seeing issues reported and resolved gives me confidence in our local government.",
      author: "Priya Patel",
      role: "Business Owner",
      avatar: "/avatars/user-3.jpeg"
    }
  ];
  
  const features = [
    {
      icon: <FaUsers />,
      title: "Community Forums",
      description: "Connect with neighbors to discuss local issues and collaborate on solutions."
    },
    {
      icon: <FaComments />,
      title: "Issue Updates",
      description: "Receive notifications and follow the progress of reported issues until resolution."
    },
    {
      icon: <FaHandshake />,
      title: "Volunteer Opportunities",
      description: "Join community initiatives and be part of the solution in your neighborhood."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 font-medium text-sm tracking-wide mb-3">
              Community Voices
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join a <span className="text-[#009688]">Thriving</span> Community
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what our users are saying and discover how our platform brings communities together to create positive change.
            </p>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              },
              hidden: {
                opacity: 0
              }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 }
                }}
                transition={{ duration: 0.5 }}
              >
                <Testimonial {...testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features */}
        <div>
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-gray-900"
            >
              Engage With Your Community
            </motion.h3>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              },
              hidden: {
                opacity: 0
              }
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 }
                }}
                transition={{ duration: 0.5 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;