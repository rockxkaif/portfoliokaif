import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

const projects = [
  {
    title: "AI Chat Assistant WebApp",
    description:
      "An AI-powered chat assistant built using Next.js, LangChain, and OpenAI API. Features context-aware conversations, session persistence, secure backend integration, and production-ready deployment.",
    image: "/ai-chat.jpg",
    technologies: ["Next.js", "LangChain", "OpenAI API", "MongoDB"],
    github: "https://github.com/langchain-ai/langchain-nextjs-template",
    live: "https://langchain-nextjs-template.vercel.app/"
  },
  {
    title: "Task Manager API (MERN Stack)",
    description:
      "A secure task management platform featuring JWT authentication, protected routes, CRUD operations, MongoDB schema design, and API documentation using Swagger.",
    image: "/task-manager.jpg",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/aayush301/MERN-task-manager",
    live: "https://mern-task-manager.netlify.app/" 
  },
  {
    title: "Food Finder WebApp",
    description:
      "A full-stack food discovery application built with React and Node.js. Includes restaurant browsing, map-based search, user login, reviews, and food image uploads.",
    image: "/food-finder.jpg.png",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Maps API"],
    github: "https://github.com/shivam6862/Map-My-Food",
    live: "https://mern-food-ordering.netlify.app/" 
  },
  {
    title: "React UI",
    description:
      "A modern React UI component library built with TypeScript, TailwindCSS, and Framer Motion. It includes animated components, gradients, effects, loaders, cards, and reusable design elements with fast performance using Vite.",
    image: "/reactuikaif.png",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Framer Motion",
      "React Router",
      "Lucide Icons"
    ],
    github: "https://github.com/rockxkaif/reactUIs",
    live: "https://kaifreactui.netlify.app/"
  },
  {
    title: "Marvel webApp",
    description:
      "An interactive Marvel universe explorer built with React. Browse characters, comics, and movies using the Marvel API. Features search functionality, favorites, and detailed character profiles.",
    image: "/marvel.jpg",
    technologies: ["React.js", "Marvel API", "CSS3", "React Router"],
    github: "https://github.com/yourusername/marvel-app",
    live: "https://marvel-explorer.netlify.app/"
  },
  {
    title: "TodoList",
    description:
      "A modern and intuitive todo list application built with React. Features task creation, editing, deletion, task completion tracking, local storage persistence, and a clean, responsive user interface.",
    image: "/todo.png",
    technologies: ["React.js", "CSS3", "Local Storage"],
    github: "https://github.com/yourusername/todolist",
    live: "https://todolist-app.netlify.app/"
  },
  {
    title: "iCrochet",
    description:
      "A clean and minimal React website to showcase handmade crochet products, gallery, and contact form for inquiriesThis project includes Home, Products, About, and Contact pages with a responsive layout.",
    image: "/icrochet.jpeg",
    technologies: ["React.js", "CSS3", "React Router"],
    github: "https://github.com/yourusername/icrochet",
    live: "https://icrochet.netlify.app/"
  },
  {
    title: "WeatherSphere",
    description:
      "A global weather web application that provides current conditions, 7-day forecasts, and interactive location search. Includes dynamic background visuals and detailed climate metrics per city.",
    image: "/weathersphere.jpg",
    technologies: ["React.js", "OpenWeatherMap API", "GeoLocation", "CSS3"],
    github: "https://github.com/yourusername/weathersphere",
    live: "https://weathersphere-demo.netlify.app/"
  },
  {
    title: "RecipeMaster",
    description:
      "A recipe discovery platform that lets users search dishes by ingredients, cuisine, or dietary needs. Pulls recipes from an external API and shows cooking steps, nutrition, and favorites.",
    image: "/recipemaster.jpg",
    technologies: ["React.js", "Spoonacular API", "React Router", "Styled Components"],
    github: "https://github.com/yourusername/recipemaster",
    live: "https://recipemaster-demo.netlify.app/"
  }
];

function ProjectCard({ project, index }) {
  const [imageError, setImageError] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative card-tilt h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-glassAccent to-glassLavender rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative glass-card p-0 overflow-hidden h-full flex flex-col">
        <div className="relative h-48 overflow-hidden bg-slate-900/60 rounded-t-[14px]">
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center text-slate-300 text-sm">
              Image not found
            </div>
          ) : (
            <img
              src={project.image}
              alt={`${project.title} - Project screenshot`}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          )}
        </div>

        <div className="p-6 flex flex-col flex-1 justify-between">
          <h3 className="text-xl font-semibold text-glassTextLight mb-2">
            {project.title}
          </h3>

          <p className="text-slate-300/80 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 text-xs bg-white/5 text-slate-200 rounded-full border border-white/10 uppercase tracking-wide cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>

        <div className="flex space-x-4 mt-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-glassAccent hover:text-glassGold transition-colors focus:outline-none focus:ring-2 focus:ring-glassAccent rounded"
              aria-label={`View live demo of ${project.title}`}
            >
              <FaExternalLinkAlt className="mr-2" aria-hidden="true" />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-glassAccent hover:text-glassGold transition-colors focus:outline-none focus:ring-2 focus:ring-glassAccent rounded"
              aria-label={`View source code for ${project.title} on GitHub`}
            >
              <FaGithub className="mr-2" aria-hidden="true" />
              Code
            </a>
          )}
        </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 id="projects-heading" className="text-4xl font-bold text-glassTextLight mb-4">
            My Projects
          </h2>
          <p className="text-slate-300/80">
            A collection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

