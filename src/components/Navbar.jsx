import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, FileDown } from 'lucide-react';
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

  return (
    <header className="sticky top-3 z-50 mx-3 sm:mx-auto sm:max-w-7xl">
      <div className="nav-shell">
        <NavLink to="/" className="flex items-center gap-3 min-w-0">
          <div className="brand-mark">KA</div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">{profile.name}</p>
            <p className="truncate text-[11px] uppercase tracking-[0.15em] text-slate-500">Full-Stack · AI · UI</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 'nav-link ' + (isActive ? 'nav-link-active' : '')}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            className="hidden sm:inline-flex"
            onClick={() => {
              if (location.pathname === '/') document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              else window.location.href = '/#projects';
            }}
          >
            <Sparkles className="mr-1.5 h-4 w-4" />
            Work
          </Button>
          <Button size="sm" href="/resume.pdf" target="_blank" rel="noreferrer">
            <FileDown className="mr-1.5 h-4 w-4" />
            Resume
          </Button>
          <button
            type="button"
            className="social-orb lg:hidden"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-nav-panel lg:hidden">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 'mobile-nav-link ' + (isActive ? 'mobile-nav-link-active' : '')}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
