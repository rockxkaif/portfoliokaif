import PortfolioHero from '../components/PortfolioHero';
import About from '../components/About';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

export default function HomePremium() {
  return (
    <div className="portfolio-page premium-page">
      <div className="page-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><PortfolioHero /></div>
      <About />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}


