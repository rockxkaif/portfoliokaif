import React from 'react';

export function Card({ children, className = '' }) {
  return (
    <div
      className={
        'rounded-[1.5rem] border border-white/[0.07] bg-white/[0.025] shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300 hover:border-white/[0.12] hover:bg-white/[0.035] ' +
        className
      }
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return <div className={'p-5 sm:p-6 ' + className}>{children}</div>;
}
