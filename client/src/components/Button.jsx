import React from 'react';

const Button = ({ children, onClick, variant = 'primary', size = 'md', disabled = false, className = '', ...props }) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const disabledClass = disabled ? 'btn-disabled' : '';

  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${disabledClass} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 