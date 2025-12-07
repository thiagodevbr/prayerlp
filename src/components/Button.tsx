import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
}

export function Button({ children, variant = 'primary', onClick, className = '' }: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg';
  
  const variants = {
    primary: 'bg-[#5B7CDB] text-white hover:bg-[#4A6BCA]',
    secondary: 'bg-[#8B7FD6] text-white hover:bg-[#7A6EC5]',
    outline: 'border-2 border-[#5B7CDB] text-[#5B7CDB] hover:bg-[#E8F0FE]'
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
