import { useMemo } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  ArrowUpRight,
  Braces,
  Code2,
  Cpu,
  ExternalLink,
  FileDown,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { profile, experiences, certificates } from '../data/content';
import kaifPhoto from '../assets/kaif.jpg';

const skillGroups = [
  {
    icon: Braces,
    title: 'Frontend Engineering',
    description: 'Interfaces that feel fast, deliberate, and production-ready.',
    items: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    icon: Layers3,
    title: 'Backend & Architecture',
    description: 'Clean APIs, predictable data flow, and secure application boundaries.',
    items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'JWT', 'Redux Toolkit'],
  },
  {
    icon: Cpu,
    title: 'AI & Delivery',
    description: 'AI features and shipping workflows that move projects from idea to release.',
    items: ['OpenAI API', 'LangChain', 'Docker', 'Jenkins', 'GitHub Actions', 'CI/CD'],
  },
];

const featuredProjects = [
  {
    name: 'AI Chat Assistant',
    eyebrow: 'AI PRODUCT',
    description:
      'Context-aware chat experience with a production-focused interface, session flows, and secure API integration.',
    tech: ['Next.js', 'LangChain', 'OpenAI', 'MongoDB'],
    image: '/ai-chat.jpg',
    liveUrl: 'https://langchain-nextjs-template.vercel.app/',
    repoUrl: 'https://github.com/langchain-ai/langchain-nextjs-template',
  },
  {
    name: 'React UI',
    eyebrow: 'DESIGN SYSTEM',
    description:
      'Reusable interface library with motion, interactive surfaces, gradients, loaders, and composable React patterns.',
    tech: ['React', 'TypeScript', 'Vite', 'Framer Motion'],
    image: '/reactuikaif.png',
    liveUrl: 'https://reactuikaif.netlify.app/',
    repoUrl: 'https://github.com/rockxkaif/reactUIs',
  },
  {
    name: 'Task Manager',
    eyebrow: 'FULL STACK',
    description:
      'Task workflow with authentication, protected routes, CRUD operations, persistence, and API-first architecture.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: '/task-manager.jpg',
    liveUrl: 'https://mern-task-manager.netlify.app/',
    repoUrl: 'https://github.com/aayush301/MERN-task-manager',
  },
  {
    name: 'Food Finder',
    eyebrow: 'DISCOVERY APP',
    description:
      'Food discovery experience combining search, maps, account flows, reviews, and image-driven browsing.',
    tech: ['React', 'Node.js', 'MongoDB', 'Maps API'],
    image: '/food-finder.jpg.png',
    liveUrl: 'https://mern-food-ordering.netlify.app/',
    repoUrl: 'https://github.com/shivam6862/Map-My-Food',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

function TiltPortrait() {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 180, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 180, damping: 22 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-9, 9]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);

  const onMove = (event) => {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div className="portrait-perspective">
      <motion.div
        className="portrait-stage"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={reducedMotion ? undefined : { rotateX, rotateY }}
      >
        <div className="portrait-halo" />
        <div className="portrait-orbit portrait-orbit-a" />
        <div className="portrait-orbit portrait-orbit-b" />
        <div className="portrait-grid-plane" />

        <div className="portrait-frame depth-layer">
          <img src={kaifPhoto} alt="Kaif Ansari" className="portrait-photo" />
          <div className="portrait-scanline" />
        </div>

        <motion.div
          className="floating-tech floating-tech-react"
          animate={reducedMotion ? undefined : { y: [0, -9, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Code2 className="h-4 w-4" />
          React
        </motion.div>
        <motion.div
          className="floating-tech floating-tech-ai"
          animate={reducedMotion ? undefined : { y: [0, 8, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkles className="h-4 w-4" />
          GenAI
        </motion.div>
        <motion.div
          className="floating-tech floating-tech-node"
          animate={reducedMotion ? undefined : { x: [0, 7, 0], y: [0, -4, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Terminal className="h-4 w-4" />
          Node
        </motion.div>
      </motion.div>
    </div>
  );
}

function SocialButton({ label, onClick, children }) {
  return (
    <button type="button" aria-label={label} onClick={onClick} className="social-orb">
      {children}
    </button>
  );
}

export default function Home() {
  const social = useMemo(
    () => Object.fromEntries(profile.socialLinks.map((item) => [item.name, item.url])),
    []
  );

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative overflow-hidden text-slate-50">
      <div className="neo-grid pointer-events-none fixed inset-0 -z-10" aria-hidden="true" />
      <div className="ambient-blob ambient-blob-one" aria-hidden="true" />
      <div className="ambient-blob ambient-blob-two" aria-hidden="true" />

      <section className="mx-auto grid min-h-[calc(100vh-90px)] max-w-7xl items-center gap-14 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:pt-6">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-10">
          <motion.div variants={fadeUp} className="availability-pill">
            <span className="availability-dot" />
            OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES
          </motion.div>

          <motion.p variants={fadeUp} className="mt-8 font-mono text-xs uppercase tracking-[0.24em] text-cyan-300/80">
            Hello, I am {profile.name}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.15rem]"
          >
            I build interfaces with
            <span className="spotlight-word block">depth, speed & intelligence.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {profile.bio} I care about polished interactions, maintainable architecture, and products that feel as good as they perform.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <Button size="lg" onClick={() => scrollToSection('projects')} className="group">
              Explore my work
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
            <Button size="lg" variant="outline" href="/resume.pdf" target="_blank" rel="noreferrer">
              <FileDown className="mr-2 h-4 w-4" />
              Resume
            </Button>
            <div className="ml-0 flex items-center gap-2 sm:ml-2">
              <SocialButton label="Open GitHub" onClick={() => window.open(social.GitHub, '_blank', 'noopener,noreferrer')}>
                <Github className="h-4 w-4" />
              </SocialButton>
              <SocialButton label="Open LinkedIn" onClick={() => window.open(social.LinkedIn, '_blank', 'noopener,noreferrer')}>
                <Linkedin className="h-4 w-4" />
              </SocialButton>
              <SocialButton label="Email Kaif" onClick={() => { window.location.href = social.Email; }}>
                <Mail className="h-4 w-4" />
              </SocialButton>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-11 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ['STACK', 'React · Next · Node'],
              ['FOCUS', 'AI + Full Stack'],
              ['BASE', 'Bengaluru, India'],
            ].map(([label, value]) => (
              <div className="mini-depth-card" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <TiltPortrait />
        </motion.div>
      </section>

      <section id="about" className="section-shell">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">01 / PROFILE</p>
            <h2>Engineering with product taste.</h2>
          </div>
          <p>
            I combine frontend craft, backend fundamentals, AI integrations, and delivery tooling so the result is not only visually sharp — it is shippable.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="terminal-topbar">
                <span />
                <span />
                <span />
                <p>kaif@portfolio:~/profile</p>
              </div>
              <div className="terminal-body">
                <p><span className="terminal-key">const</span> developer = {'{'}</p>
                <p className="pl-5">role: <span className="terminal-string">'Full-Stack & AI Developer'</span>,</p>
                <p className="pl-5">strengths: [<span className="terminal-string">'UI engineering'</span>, <span className="terminal-string">'APIs'</span>, <span className="terminal-string">'CI/CD'</span>],</p>
                <p className="pl-5">mindset: <span className="terminal-string">'build → measure → refine'</span>,</p>
                <p className="pl-5">qualityBar: <span className="terminal-string">'production-ready'</span></p>
                <p>{'};'}</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-5">
            <Card>
              <CardContent>
                <ShieldCheck className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-5 text-xl font-semibold text-white">Built beyond the happy path</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Authentication, error states, accessibility, responsiveness, and deployment are part of the build — not cleanup work.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <MapPin className="h-6 w-6 text-violet-300" />
                <h3 className="mt-5 text-xl font-semibold text-white">Product-minded execution</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  I translate loose requirements into clear UI systems, reusable components, and predictable user flows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">02 / CAPABILITIES</p>
            <h2>A full-stack toolkit with a frontend edge.</h2>
          </div>
          <p>Strong visual execution backed by APIs, state management, security fundamentals, AI workflows, and modern delivery practices.</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="h-full">
                  <CardContent className="h-full">
                    <div className="icon-cube"><Icon className="h-5 w-5" /></div>
                    <h3 className="mt-6 text-xl font-semibold text-white">{group.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{group.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.items.map((item) => <span key={item} className="tech-chip">{item}</span>)}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="experience" className="section-shell">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">03 / EXPERIENCE</p>
            <h2>From enterprise systems to independent builds.</h2>
          </div>
          <p>Experience across Cisco, product development teams, and freelance full-stack work.</p>
        </div>

        <div className="experience-rail mt-10">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company + experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-90px' }}
              className="experience-item"
            >
              <div className="experience-node"><span>{String(index + 1).padStart(2, '0')}</span></div>
              <Card>
                <CardContent>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-300">{experience.company}</p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{experience.title}</h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">{experience.period}</span>
                  </div>
                  <ul className="mt-5 grid gap-2.5 text-sm leading-6 text-slate-400">
                    {experience.responsibilities.slice(0, 3).map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.techStack.slice(0, 7).map((tech) => <span className="tech-chip" key={tech}>{tech}</span>)}
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">04 / SELECTED WORK</p>
            <h2>Projects designed to feel alive.</h2>
          </div>
          <p>Each card keeps the technical story visible while using depth, imagery, and motion to make the work easier to scan.</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-90px' }}
              transition={{ delay: index * 0.07 }}
            >
              <Card className="project-card h-full overflow-hidden">
                <div className="project-media">
                  <img src={project.image} alt="" loading="lazy" />
                  <div className="project-media-overlay" />
                  <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <CardContent>
                  <p className="font-mono text-[11px] tracking-[0.18em] text-cyan-300">{project.eyebrow}</p>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight text-white">{project.name}</h3>
                    <div className="flex gap-2">
                      <a className="project-link" href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={'Open ' + project.name + ' source code'}>
                        <Github className="h-4 w-4" />
                      </a>
                      <a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={'Open ' + project.name + ' live demo'}>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => <span className="tech-chip" key={item}>{item}</span>)}
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="certificates" className="section-shell">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">05 / CREDENTIALS</p>
            <h2>Fundamentals validated by hands-on learning.</h2>
          </div>
          <p>Networking, Python, and full-stack foundations that support the way I build and debug systems.</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {certificates.map((certificate) => (
            <Card key={certificate.title} className="h-full">
              <CardContent className="flex h-full flex-col">
                <div className="certificate-mark"><ShieldCheck className="h-5 w-5" /></div>
                <h3 className="mt-5 text-lg font-semibold text-white">{certificate.title}</h3>
                <p className="mt-2 text-xs font-medium text-cyan-300">{certificate.issuer} · {certificate.date}</p>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">{certificate.description}</p>
                <a href={certificate.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-cyan-300">
                  View credential <ArrowUpRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell pb-24">
        <div className="cta-panel">
          <div className="cta-glow" aria-hidden="true" />
          <div className="relative z-10">
            <p className="section-eyebrow">06 / LET'S BUILD</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Have a product, role, or codebase that needs sharper engineering?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              I am open to software engineering opportunities and selected freelance work across modern web, AI features, and frontend systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => { window.location.href = social.Email; }}>
                <Mail className="mr-2 h-4 w-4" />
                Start a conversation
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open(social.LinkedIn, '_blank', 'noopener,noreferrer')}>
                LinkedIn <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
