import HeroSection from '../components/HeroSection';
import About from '../components/About';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

export default function HomePremium() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <HeroSection />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

