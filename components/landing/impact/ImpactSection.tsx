"use client"

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaUsers, FaClipboardCheck, FaClock, FaCheckCircle } from 'react-icons/fa';

type StatisticProps = {
  icon: React.ReactNode;
  value: number;
  label: string;
  duration?: number;
  prefix?: string;
  suffix?: string;
  color: string;
  lightColor: string;
};

const AnimatedCounter = ({ value, duration = 2000, prefix = '', suffix = '' }: 
  { value: number; duration?: number; prefix?: string; suffix?: string; }
) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(value * easeOutQuart));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration, inView]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const CircularProgress = ({ value, color, size = 120 }: 
  { value: number; color: string; size?: number; }
) => {
  const circumference = size * Math.PI;
  const strokeWidth = size * 0.1;
  const radius = (size - strokeWidth) / 2;
  const progress = (value / 100) * circumference;

  return (
    <svg
      className="transform -rotate-90"
      width={size}
      height={size}
    >
      {/* Background circle */}
      <circle
        className="opacity-20"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      {/* Progress circle */}
      <motion.circle
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: circumference - progress }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
    </svg>
  );
};

const StatisticCard = ({ icon, value, label, duration, prefix, suffix, color, lightColor }: StatisticProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
    >
      <div 
        className="p-6 rounded-2xl border border-gray-100 shadow-xl bg-white relative z-10 h-full"
        style={{ backgroundColor: `${lightColor}10` }}
      >
        <div className="flex items-center justify-between mb-4">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${color}20` }}
          >
            <span style={{ color }}>{icon}</span>
          </div>
          <CircularProgress value={75} color={color} size={48} />
        </div>
        
        <h3 className="text-3xl font-bold mb-2" style={{ color }}>
          <AnimatedCounter 
            value={value} 
            duration={duration} 
            prefix={prefix} 
            suffix={suffix} 
          />
        </h3>
        <p className="text-gray-600">{label}</p>
      </div>
      
      {/* Decorative background blur */}
      <div 
        className="absolute -inset-1 rounded-2xl opacity-30 blur-xl -z-10"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};

const ImpactSection = () => {
  const statistics = [
    {
      icon: <FaClipboardCheck className="w-6 h-6" />,
      value: 15482,
      label: "Issues Reported",
      color: "#00ACC1",
      lightColor: "#E0F7FA"
    },
    {
      icon: <FaCheckCircle className="w-6 h-6" />,
      value: 12659,
      label: "Problems Resolved",
      prefix: "",
      color: "#26A69A",
      lightColor: "#E0F2F1"
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      value: 48,
      label: "Average Resolution Time",
      suffix: "h",
      color: "#26C6DA",
      lightColor: "#E0F7FA"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      value: 5280,
      label: "Active Community Members",
      color: "#009688",
      lightColor: "#E0F2F1"
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
              Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Making a <span className="text-[#009688]">Difference</span> Together
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our community is transforming cities through active civic engagement and collaborative problem-solving.
            </p>
          </motion.div>
        </div>

        {/* Statistics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <StatisticCard
              key={index}
              {...stat}
              duration={2000 + index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;