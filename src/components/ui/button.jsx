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
  const base =
    'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 disabled:cursor-not-allowed disabled:opacity-50';

  const variants = {
    default:
      'border border-cyan-200/20 bg-gradient-to-r from-cyan-300 to-sky-300 text-slate-950 shadow-[0_14px_38px_rgba(34,211,238,0.18)] hover:-translate-y-0.5 hover:brightness-105',
    solid:
      'border border-cyan-200/20 bg-gradient-to-r from-cyan-300 to-sky-300 text-slate-950 shadow-[0_14px_38px_rgba(34,211,238,0.18)] hover:-translate-y-0.5 hover:brightness-105',
    outline:
      'border border-white/[0.10] bg-white/[0.03] text-slate-200 backdrop-blur-xl hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-cyan-300/[0.06] hover:text-cyan-100',
    ghost:
      'border border-transparent bg-transparent text-slate-400 hover:bg-white/[0.04] hover:text-white',
  };

  const sizes = {
    default: 'px-4 py-2 text-sm',
    sm: 'px-3 py-2 text-xs',
    lg: 'px-5 py-3 text-sm',
  };

  const classes = [base, variants[variant], sizes[size], className].join(' ');

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  );
}
