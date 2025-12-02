import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-navbar' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <NavLink
              to="/"
              className={`text-2xl font-bold tracking-tight ${
                scrolled
                  ? 'text-glassTextLight hover:text-glassGold'
                  : 'text-glassTextLight'
              } transition-colors duration-300`}
            >
              Portfolio
            </NavLink>
          </motion.div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      scrolled
                        ? isActive
                          ? 'text-glassAccent font-semibold'
                          : 'text-slate-200 hover:text-glassAccent'
                        : isActive
                        ? 'text-glassTextLight'
                        : 'text-slate-200 hover:text-glassTextLight'
                    }`
                  }
                >
                  {item.name}
                  {({ isActive }) => isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                        scrolled ? 'bg-glassAccent' : 'bg-glassAccent'
                      }`}
                    />
                  )}
                </NavLink>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-glassTextLight bg-white/5 border border-white/10 hover:text-glassAccent hover:bg-white/10"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/90 backdrop-blur-glass border-t border-white/10"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-base font-medium rounded-md ${
                      isActive
                        ? 'text-glassAccent bg-white/10'
                        : 'text-slate-200 hover:text-glassTextLight hover:bg-white/5'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 