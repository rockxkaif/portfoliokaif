import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/content';

export default function Footer() {
  const links = Object.fromEntries(profile.socialLinks.map((item) => [item.name, item.url]));

  return (
    <footer className="border-t border-white/[0.06] bg-black/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-slate-300">{profile.name}</p>
          <p className="mt-1 text-xs">Built with React, Tailwind CSS & Framer Motion.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
          <a className="footer-link" href={links.GitHub} target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a>
          <a className="footer-link" href={links.LinkedIn} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          <a className="footer-link" href={links.Email}><Mail className="h-4 w-4" /> Email</a>
          <a className="footer-link" href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Top <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
