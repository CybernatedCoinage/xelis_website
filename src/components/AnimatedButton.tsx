
import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const AnimatedButton = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  ...props 
}: AnimatedButtonProps) => {
  const baseStyles = "relative overflow-hidden rounded-lg font-medium transition-all duration-300 ease-in-out";
  
  const variantStyles = {
    primary: "bg-xelis-blue text-white hover:bg-xelis-dark-blue shadow-button",
    secondary: "bg-white text-xelis-black border border-gray-200 hover:bg-gray-50 shadow-button",
    ghost: "bg-transparent hover:bg-gray-100 text-xelis-blue"
  };
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        "group",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
      <span className="absolute inset-0 h-full w-full scale-0 rounded-lg bg-black/5 transition-transform duration-300 ease-out group-hover:scale-100" />
    </button>
  );
};

export default AnimatedButton;
