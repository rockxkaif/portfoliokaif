import React from 'react';

export function Button({ 
  children, 
  onClick, 
  variant = 'default',
  size = 'default',
  className = '',
  disabled = false,
  type = 'button',
  href,
  ...props
}) {
  const base = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    default: 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 hover:bg-cyan-400 focus:ring-cyan-500',
    outline: 'border border-slate-700 bg-slate-900/60 text-slate-100 hover:bg-slate-800 focus:ring-slate-700',
    ghost: 'bg-transparent text-slate-300 hover:bg-slate-800 focus:ring-slate-700',
    solid: 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 hover:bg-cyan-400 focus:ring-cyan-500',
  };

  const sizes = {
    default: 'px-4 py-2 text-sm',
    sm: 'px-3 py-1.5 text-xs',
    lg: 'px-5 py-2.5 text-sm',
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cls}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
