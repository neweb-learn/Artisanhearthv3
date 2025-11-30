
import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-serif transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8C3A28] disabled:opacity-50 disabled:pointer-events-none";
    
    // Soft rectangles: rounded corners (4px-8px -> let's go with rounded-md which is 6px)
    const rounded = "rounded-md";

    const variants = {
      primary: "bg-[#8C3A28] text-[#F9F5E3] hover:bg-[#7A3121] shadow-sm",
      outline: "border-2 border-[#8C3A28] text-[#8C3A28] bg-transparent hover:bg-[#8C3A28] hover:text-[#F9F5E3]",
      ghost: "text-[#4A3B32] hover:bg-[#8C3A28]/10 hover:text-[#8C3A28]"
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-8 text-base",
      lg: "h-14 px-10 text-lg"
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${rounded} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
