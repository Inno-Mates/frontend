"use client"

import { motion } from 'framer-motion';
import { FaRoad, FaLightbulb, FaTrash, FaSprayCan, FaBuilding, FaTree } from 'react-icons/fa';

type CategoryProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  lightColor: string;
};

const CategoryCard = ({ icon, title, description, color, lightColor }: CategoryProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative group"
    >
      <div 
        className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg transition-all duration-300 h-full"
        style={{ backgroundColor: `${lightColor}10` }}
      >
        <div className="space-y-4">
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-6"
            style={{ backgroundColor: `${color}20` }}
          >
            <span style={{ color }} className="text-2xl">{icon}</span>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#009688]">
              {title}
            </h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>

        {/* Decorative elements */}
        <div 
          className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity -z-10"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
};

const IssueCategoriesSection = () => {
  const categories = [
    {
      icon: <FaRoad />,
      title: "Road Maintenance",
      description: "Report potholes, cracks, and other road infrastructure issues that need attention.",
      color: "#FF8F00",
      lightColor: "#FFF8E1"
    },
    {
      icon: <FaLightbulb />,
      title: "Street Lighting",
      description: "Notify us about broken street lights, dim lighting, or areas needing illumination.",
      color: "#1E88E5",
      lightColor: "#E3F2FD"
    },
    {
      icon: <FaTrash />,
      title: "Waste Management",
      description: "Alert about overflowing bins, illegal dumping, or missed waste collection.",
      color: "#43A047",
      lightColor: "#E8F5E9"
    },
    {
      icon: <FaSprayCan />,
      title: "Graffiti/Vandalism",
      description: "Report unauthorized graffiti, vandalism, or damage to public property.",
      color: "#8E24AA",
      lightColor: "#F3E5F5"
    },
    {
      icon: <FaBuilding />,
      title: "Public Facilities",
      description: "Highlight issues with public buildings, benches, or community facilities.",
      color: "#00ACC1",
      lightColor: "#E0F7FA"
    },
    {
      icon: <FaTree />,
      title: "Green Spaces",
      description: "Report concerns about parks, gardens, or other public green areas.",
      color: "#7CB342",
      lightColor: "#F1F8E9"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
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
              Issue Categories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Can You <span className="text-[#009688]">Report</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform handles various civic issues. Select a category below to learn more and start making a difference in your community.
            </p>
          </motion.div>
        </div>

        {/* Categories grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              transition={{ duration: 0.5 }}
            >
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IssueCategoriesSection;