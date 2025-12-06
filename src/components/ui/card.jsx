import React from 'react';

export function Card({ children, className = '' }) {
  return (
    <div className={`border-slate-800 bg-slate-900/70 rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`p-4 sm:p-5 ${className}`}>
      {children}
    </div>
  );
}
