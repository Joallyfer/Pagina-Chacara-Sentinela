import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseClasses = 'font-poppins font-medium transition-all duration-300 cursor-pointer whitespace-nowrap';
  
  const variantClasses = {
    primary: 'bg-moss-green text-light-beige hover:bg-moss-green/90 shadow-lg hover:shadow-xl',
    secondary: 'bg-soft-gold text-matte-black hover:bg-soft-gold/90 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-moss-green text-moss-green hover:bg-moss-green hover:text-light-beige'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}
