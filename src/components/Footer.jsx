import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/content';

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: profile.socialLinks.find((l) => l.name === 'GitHub')?.url || '#',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: profile.socialLinks.find((l) => l.name === 'LinkedIn')?.url || '#',
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: profile.socialLinks.find((l) => l.name === 'Email')?.url || '#',
      icon: Mail,
    },
  ];

  return (
    <footer className="border-t border-slate-800 pt-4 text-xs text-slate-500" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 py-4">
          <nav aria-label="Social media links">
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                    aria-label={`Visit ${link.name} profile`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </nav>
          <p className="text-center">
            © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
