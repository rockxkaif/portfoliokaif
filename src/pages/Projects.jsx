import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const projects = [
  {
    name: 'AI Chat Assistant WebApp',
    description:
      'An AI-powered chat assistant built using Next.js, LangChain, and OpenAI API. Features context-aware conversations, session persistence, secure backend integration, and production-ready deployment.',
    tech: ['Next.js', 'LangChain', 'OpenAI API', 'MongoDB'],
    liveUrl: 'https://langchain-nextjs-template.vercel.app/',
    repoUrl: 'https://github.com/langchain-ai/langchain-nextjs-template',
  },
  {
    name: 'Task Manager API (MERN Stack)',
    description:
      'A secure task management platform featuring JWT authentication, protected routes, CRUD operations, MongoDB schema design, and API documentation using Swagger.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    liveUrl: 'https://mern-task-manager.netlify.app/',
    repoUrl: 'https://github.com/aayush301/MERN-task-manager',
  },
  {
    name: 'Food Finder WebApp',
    description:
      'A full-stack food discovery application built with React and Node.js. Includes restaurant browsing, map-based search, user login, reviews, and food image uploads.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Maps API'],
    liveUrl: 'https://mern-food-ordering.netlify.app/',
    repoUrl: 'https://github.com/shivam6862/Map-My-Food',
  },
  {
    name: 'React UI',
    description:
      'A modern React UI component library built with TypeScript, TailwindCSS, and Framer Motion. It includes animated components, gradients, effects, loaders, cards, and reusable design elements with fast performance using Vite.',
    tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Framer Motion', 'React Router', 'Lucide Icons'],
    liveUrl: 'https://kaifreactui.netlify.app/',
    repoUrl: 'https://github.com/rockxkaif/reactUIs',
  },
  {
    name: 'Marvel webApp',
    description:
      'An interactive Marvel universe explorer built with React. Browse characters, comics, and movies using the Marvel API. Features search functionality, favorites, and detailed character profiles.',
    tech: ['React.js', 'Marvel API', 'CSS3', 'React Router'],
    liveUrl: 'https://marvel-explorer.netlify.app/',
    repoUrl: 'https://github.com/yourusername/marvel-app',
  },
  {
    name: 'WeatherSphere',
    description:
      'A global weather web application that provides current conditions, 7-day forecasts, and interactive location search. Includes dynamic background visuals and detailed climate metrics per city.',
    tech: ['React.js', 'OpenWeatherMap API', 'GeoLocation', 'CSS3'],
    liveUrl: 'https://weathersphere-demo.netlify.app/',
    repoUrl: 'https://github.com/yourusername/weathersphere',
  },
  {
    name: 'RecipeMaster',
    description:
      'A recipe discovery platform that lets users search dishes by ingredients, cuisine, or dietary needs. Pulls recipes from an external API and shows cooking steps, nutrition, and favorites.',
    tech: ['React.js', 'Spoonacular API', 'React Router', 'Styled Components'],
    liveUrl: 'https://recipemaster-demo.netlify.app/',
    repoUrl: 'https://github.com/yourusername/recipemaster',
  },
  {
    name: 'TodoList',
    description:
      'A modern and intuitive todo list application built with React. Features task creation, editing, deletion, task completion tracking, local storage persistence, and a clean, responsive user interface.',
    tech: ['React.js', 'CSS3', 'Local Storage'],
    liveUrl: 'https://todolist-app.netlify.app/',
    repoUrl: 'https://github.com/yourusername/todolist',
  },
  {
    name: 'iCrochet',
    description:
      'A clean and minimal React website to showcase handmade crochet products, gallery, and contact form for inquiries. This project includes Home, Products, About, and Contact pages with a responsive layout.',
    tech: ['React.js', 'CSS3', 'React Router'],
    liveUrl: 'https://icrochet.netlify.app/',
    repoUrl: 'https://github.com/yourusername/icrochet',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-cyan-500/15 via-transparent to-transparent blur-3xl" />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-12"
        >
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-400" />
              <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">Projects</h1>
            </div>
            <span className="text-xs text-slate-400">Built with production-quality practices</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base max-w-3xl">
            A collection of my recent work and personal projects showcasing my skills and expertise.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 260, damping: 20 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <Card className="flex h-full flex-col border-slate-800 bg-slate-900/70">
                <CardContent className="flex h-full flex-col p-4 sm:p-5">
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-cyan-300">Featured Project</p>
                      <h3 className="text-sm font-semibold text-slate-50 sm:text-[15px]">{project.name}</h3>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-300 sm:text-[13px]">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-900/90 px-2 py-1 text-[10px] text-slate-300 ring-1 ring-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-cyan-300">
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
      </div>
    </div>
  );
}
