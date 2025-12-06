import React from 'react';
import { motion } from 'framer-motion';

export default function Tag({ 
  children, 
  className = '',
  variant = 'default',
  size = 'md'
}) {
  const variants = {
    default: 'bg-white/5 text-slate-200 border border-white/10',
    accent: 'bg-glassAccent/20 text-glassAccent border border-glassAccent/30',
    highlight: 'bg-glassGold/20 text-glassGold border border-glassGold/30',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-2 text-sm',
  };

  const base = 'rounded-full font-medium uppercase tracking-wide inline-flex items-center';
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <motion.span
      className={cls}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.span>
  );
}

