import React from 'react';

export default function Container({ 
  children, 
  className = '',
  size = 'xl'
}) {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  const cls = `${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`;

  return (
    <div className={cls}>
      {children}
    </div>
  );
}

