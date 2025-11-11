import React from 'react';

const Button = ({ 
  title, 
  onClick, 
  type = 'button', 
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ariaLabel,
  ...rest 
}) => {
  const baseStyles = 'font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-tate-platinum text-tate-black hover:bg-opacity-90 focus:ring-tate-platinum',
    secondary: 'bg-tate-black text-tate-platinum border-2 border-tate-platinum hover:bg-tate-platinum hover:text-tate-black focus:ring-tate-black',
    outline: 'bg-transparent text-tate-platinum border-2 border-tate-platinum hover:bg-tate-platinum hover:text-tate-black focus:ring-tate-platinum'
  };
  
  const sizes = {
    sm: 'text-sm px-3 py-2',
    md: 'text-lg px-4 py-3',
    lg: 'text-xl px-6 py-4'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      aria-label={ariaLabel || title}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;