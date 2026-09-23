import PortfolioHero from '../components/PortfolioHero';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, ExternalLink, FileDown, MapPin, Code2, Sparkles, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { profile, experiences, certificates } from '../data/content';

const skills = [
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    category: 'Backend & DevOps',
    items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'JWT Auth', 'Jenkins', 'GitHub Actions', 'Docker'],
  },
  {
    category: 'Tools & Practices',
    items: ['Git & GitHub', 'Agile/Scrum', 'CI/CD', 'Unit Testing', 'Clean Code', 'Performance Optimization'],
  },
];

const projects = [
  {
    name: 'AI Chat Assistant WebApp',
    description: 'An AI-powered chat assistant built using Next.js, LangChain, and OpenAI API. Features context-aware conversations, session persistence, secure backend integration, and production-ready deployment.',
    tech: ['Next.js', 'LangChain', 'OpenAI API', 'MongoDB'],
    liveUrl: 'https://langchain-nextjs-template.vercel.app/',
    repoUrl: 'https://github.com/langchain-ai/langchain-nextjs-template',
  },
  {
    name: 'Task Manager API (MERN Stack)',
    description: 'A secure task management platform featuring JWT authentication, protected routes, CRUD operations, MongoDB schema design, and API documentation using Swagger.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    liveUrl: 'https://mern-task-manager.netlify.app/',
    repoUrl: 'https://github.com/aayush301/MERN-task-manager',
  },
  {
    name: 'Food Finder WebApp',
    description: 'A full-stack food discovery application built with React and Node.js. Includes restaurant browsing, map-based search, user login, reviews, and food image uploads.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Maps API'],
    liveUrl: 'https://mern-food-ordering.netlify.app/',
    repoUrl: 'https://github.com/shivam6862/Map-My-Food',
  },
  {
    name: 'React UI',
    description: 'A modern React UI component library built with TypeScript, TailwindCSS, and Framer Motion. It includes animated components, gradients, effects, loaders, cards, and reusable design elements with fast performance using Vite.',
    tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Framer Motion', 'React Router', 'Lucide Icons'],
    liveUrl: 'https://reactuikaif.netlify.app/',
    repoUrl: 'https://github.com/rockxkaif/reactUIs',
  },
  {
    name: 'Marvel webApp',
    description: 'An interactive Marvel universe explorer built with React. Browse characters, comics, and movies using the Marvel API. Features search functionality, favorites, and detailed character profiles.',
    tech: ['React.js', 'Marvel API', 'CSS3', 'React Router'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    name: 'WeatherSphere',
    description: 'A global weather web application that provides current conditions, 7-day forecasts, and interactive location search. Includes dynamic background visuals and detailed climate metrics per city.',
    tech: ['React.js', 'OpenWeatherMap API', 'GeoLocation', 'CSS3'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

const fadeUp = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Home() {
  const scrollToSection = (id) => {
    if (typeof document === 'undefined') return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="portfolio-page page-home text-slate-50">

      <div className="page-container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <PortfolioHero />

        {/* Content Sections */}
        <div className="portfolio-sections">
          {/* About */}
          <section id="about" className="portfolio-section space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-400" />
              <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">About</h2>
            </div>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              I&apos;m a Software Engineer focused on frontend-heavy products with strong fundamentals in full-stack development.
              I enjoy taking vague product ideas and shaping them into clear, shippable interfaces with a strong emphasis on
              UX, performance, and maintainable architecture.
            </p>
          </section>

          {/* Skills */}
          <section id="skills" className="portfolio-section space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-400" />
                <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">Skills</h2>
              </div>
              <span className="text-sm text-slate-400">Crafted for full-stack, frontend & backend roles</span>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {skills.map((group) => (
                <Card key={group.category} className="border-slate-800 bg-slate-900/70">
                  <CardContent className="p-4 sm:p-5">
                    <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">{group.category}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-sm text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="portfolio-section space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-400" />
                <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">Experience</h2>
              </div>
              <span className="text-sm text-slate-400">Professional journey & achievements</span>
            </div>
            <div className="space-y-4 border-l border-slate-800 pl-4 sm:pl-6">
              {experiences.map((exp, idx) => (
                <div key={exp.company} className="relative">
                  <div className="absolute -left-5 top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-cyan-400 bg-slate-950 sm:-left-6">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  </div>
                  <Card className="border-slate-800 bg-slate-900/70">
                    <CardContent className="p-4 sm:p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">{exp.company}</p>
                          <p className="text-sm font-medium text-slate-50">{exp.title}</p>
                        </div>
                        <div className="text-right text-sm text-slate-400">
                          <p>{exp.period}</p>
                          <p className="flex items-center justify-end gap-1">
                            <MapPin className="h-3 w-3" /> {exp.company.includes('Remote') ? 'Remote' : 'Bengaluru, India'}
                          </p>
                        </div>
                      </div>
                      <ul className="mt-3 space-y-1.5 text-sm text-slate-300 text-sm">
                        {exp.responsibilities.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.techStack && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {exp.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-slate-900/90 px-2 py-1 text-sm text-slate-300 ring-1 ring-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="portfolio-section space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-400" />
                <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">Projects</h2>
              </div>
              <span className="text-sm text-slate-400">Built with production-quality practices</span>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {projects.map((project) => (
                <motion.div
                  key={project.name}
                  
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <Card className="flex h-full flex-col border-slate-800 bg-slate-900/70">
                    <CardContent className="flex h-full flex-col p-4 sm:p-5">
                      <div className="mb-3 flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">Featured Project</p>
                          <h3 className="text-sm font-semibold text-slate-50 sm:text-[15px]">{project.name}</h3>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-300 text-sm">{project.description}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.tech.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-slate-900/90 px-2 py-1 text-sm text-slate-300 ring-1 ring-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                        {project.liveUrl && project.liveUrl !== '#' && (
                          <>
                            <button
                              className="inline-flex items-center gap-1 hover:text-cyan-200"
                              onClick={() => {
                                if (typeof window !== 'undefined' && project.liveUrl !== '#') {
                                  window.open(project.liveUrl, '_blank');
                                }
                              }}
                            >
                              Live Demo
                              <ExternalLink className="h-3 w-3" />
                            </button>
                            <span className="h-1 w-1 rounded-full bg-slate-500" />
                          </>
                        )}
                        {project.repoUrl && project.repoUrl !== '#' && (
                          <button
                            className="inline-flex items-center gap-1 hover:text-cyan-200"
                            onClick={() => {
                              if (typeof window !== 'undefined' && project.repoUrl !== '#') {
                                window.open(project.repoUrl, '_blank');
                              }
                            }}
                          >
                            Code
                            <Github className="h-3 w-3" />
                          </button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="certificates" className="portfolio-section space-y-4">
            <div className="flex items-center gap-2"><div className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-400" /><h2 className="text-xl font-semibold">Certificates</h2></div>
            <div className="grid gap-4 md:grid-cols-3">{certificates.map(cert => <Card key={cert.title}><CardContent><p className="section-kicker">{cert.issuer}</p><h3 className="text-lg font-semibold">{cert.title}</h3><p className="mt-2 text-sm text-slate-400">{cert.date}</p><p className="mt-3 text-slate-300">{cert.description}</p><a className="certificate-link" href={cert.url} target="_blank" rel="noopener noreferrer">View credential <ExternalLink size={16} /></a></CardContent></Card>)}</div>
          </section>
          {/* Contact */}
          <section id="contact" className="portfolio-section space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-400" />
              <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">Contact</h2>
            </div>
            <Card className="border-slate-800 bg-slate-900/75">
              <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">Let&apos;s build something sharp</p>
                  <p className="mt-1 text-sm font-medium text-slate-50 sm:text-base">
                    I&apos;m open to full-time roles, apprenticeships, and impactful freelance work.
                  </p>
                  <p className="mt-1 text-sm text-slate-400 sm:text-sm">
                    Share a role, product idea, or codebase you&apos;d like help improving.
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <Button
                    className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 text-sm font-semibold text-slate-950 shadow-cyan-500/30 hover:bg-cyan-400 sm:text-sm"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.location.href = profile.socialLinks.find((l) => l.name === 'Email')?.url || '#';
                      }
                    }}
                  >
                    <Mail className="h-4 w-4" />
                    Email Me
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-2 rounded-xl border-slate-700 bg-slate-900 text-sm font-semibold text-slate-100 hover:bg-slate-800 sm:text-sm"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open(profile.socialLinks.find((l) => l.name === 'LinkedIn')?.url || '#', '_blank');
                      }
                    }}
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>


      </div>
    </div>
  );
}

