import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Code2, Sparkles, FileDown } from 'lucide-react';
import { Button } from './ui/button';
import { profile } from '../data/content';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = '/#' + id;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-4 z-20 mb-6 flex items-center justify-between rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-3 backdrop-blur-xl sm:px-6 mx-4 sm:mx-auto max-w-6xl">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-500/40">
          <Code2 className="h-5 w-5 text-cyan-400" />
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-slate-50">{profile.name}</p>
          <p className="text-xs text-slate-400">Full Stack / Frontend Developer</p>
        </div>
      </div>

      <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative transition hover:text-cyan-300 ${
                isActive ? 'text-cyan-300' : ''
              }`
            }
          >
            {item.name}
            <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-transform duration-300 group-hover:scale-x-100" />
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <Button
          size="sm"
          variant="outline"
          className="hidden border-cyan-500/50 bg-cyan-500/5 text-xs font-semibold text-cyan-100 hover:bg-cyan-500/20 sm:inline-flex"
          onClick={() => {
            if (location.pathname === '/') {
              scrollToSection('projects');
            } else {
              window.location.href = '/#projects';
            }
          }}
        >
          <Sparkles className="mr-1.5 h-4 w-4" />
          View Work
        </Button>
        <Button
          size="sm"
          className="bg-cyan-500 text-xs font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 hover:bg-cyan-400"
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.open('/resume.pdf', '_blank');
            }
          }}
        >
          <FileDown className="mr-1.5 h-4 w-4" />
          Resume
        </Button>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:text-cyan-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-slate-800/60 bg-slate-900/95 backdrop-blur-xl p-4 md:hidden">
          <div className="space-y-2">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/10'
                      : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
