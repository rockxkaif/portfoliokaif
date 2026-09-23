import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/content';
import GlassScene from './GlassScene';

export default function PortfolioHero() {
  const icons = { GitHub: Github, LinkedIn: Linkedin, Email: Mail };
  return <section className="portfolio-hero" aria-labelledby="hero-title">
    <div className="hero-editorial">
      <p className="section-kicker">FULL-STACK & AI DEVELOPER</p>
      <h1 id="hero-title">Ideas into<br /><span>experiences.</span></h1>
      <p className="hero-name">Hey, I’m {profile.name}.</p>
      <p className="hero-intro">{profile.bio}</p>
      <div className="hero-cta"><Link to="/projects" className="primary-action">Explore my work <ArrowUpRight size={18} /></Link><Link to="/contact" className="secondary-action">Let’s talk <ArrowUpRight size={18} /></Link></div>
      <div className="hero-socials">{profile.socialLinks.map(link => {const Icon = icons[link.name] || Mail;return <a key={link.name} href={link.url} target={link.name === 'Email' ? undefined : '_blank'} rel="noopener noreferrer" aria-label={link.name}><Icon size={19} /></a>;})}<span><MapPin size={14} /> Bengaluru, India</span></div>
    </div>
    <GlassScene />
    <div className="hero-stack"><span>THE STACK</span><b>React</b><b>Next.js</b><b>Node.js</b><b>MongoDB</b><b>Generative AI</b></div>
  </section>;
}
