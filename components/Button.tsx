import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md uppercase text-sm";
  
  const variants = {
    primary: "bg-orange-600 text-white hover:bg-orange-700 hover:shadow-lg shadow-orange-900/20 focus:ring-orange-600 border border-transparent",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg shadow-slate-900/20 focus:ring-slate-900 border border-transparent",
    outline: "border-2 border-slate-200 bg-transparent hover:bg-slate-50 text-slate-900 hover:border-slate-300",
    ghost: "bg-transparent hover:bg-orange-50 text-orange-700 hover:text-orange-800"
  };

  const sizes = {
    sm: "h-8 px-4 text-xs",
    md: "h-11 px-6",
    lg: "h-14 px-8 text-base"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};