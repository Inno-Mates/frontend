import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
};

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '' 
}: ButtonProps) => {
  const baseStyles = 'rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300';
  
  const variantStyles = {
    primary: 'bg-[#FF8F00] hover:bg-[#F57C00] text-white shadow-lg',
    secondary: 'bg-[#1E88E5] hover:bg-[#1976D2] text-white shadow-lg',
    outline: 'bg-transparent hover:bg-white/10 border-2 border-white text-white'
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;