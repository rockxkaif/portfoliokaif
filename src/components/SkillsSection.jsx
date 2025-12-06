import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaServer,
  FaNodeJs,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiWebpack,
  SiMongodb,
  SiExpress,
  SiJest,
  SiDocker,
} from 'react-icons/si';

const SkillCard = ({ name, icon: Icon, level, index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ width: `${level}%` });
      const duration = 2000;
      const steps = 60;
      const increment = level / steps;
      const stepDuration = duration / steps;

      let currentCount = 0;
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= level) {
          setCount(level);
          clearInterval(timer);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, level, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative card-tilt"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-glassAccent to-glassLavender rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-glassAccent/20 rounded-lg">
            <Icon className="w-6 h-6 text-glassAccent" />
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-glassTextLight">{name}</h3>
            <p className="text-sm text-slate-300/80">{count}% Proficiency</p>
          </div>
        </div>
        <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={controls}
            transition={{ duration: 2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-glassAccent to-glassLavender"
          />
        </div>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, description, icon: Icon, skills }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-glassAccent/20 rounded-xl">
          <Icon className="w-6 h-6 text-glassAccent" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-glassTextLight">{title}</h2>
          <p className="text-slate-300/80">{description}</p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const skills = [
    {
      title: 'Frontend Development',
      description: 'Building modern and responsive user interfaces',
      icon: FaReact,
      skills: [
        { name: 'React.js', icon: FaReact, level: 90 },
        { name: 'JavaScript (ES6+)', icon: FaJs, level: 85 },
        { name: 'TypeScript', icon: SiTypescript, level: 80 },
        { name: 'HTML5 & CSS3', icon: FaHtml5, level: 95 },
      ],
    },
    {
      title: 'Backend Development',
      description: 'Creating robust and scalable server-side applications',
      icon: FaServer,
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 85 },
        { name: 'Express.js', icon: SiExpress, level: 80 },
        { name: 'MongoDB', icon: SiMongodb, level: 75 },
        { name: 'REST APIs', icon: FaDatabase, level: 85 },
      ],
    },
    {
      title: 'Tools & Technologies',
      description: 'Essential tools and technologies for modern development',
      icon: FaGitAlt,
      skills: [
        { name: 'Git & GitHub', icon: FaGitAlt, level: 90 },
        { name: 'Docker', icon: SiDocker, level: 70 },
        { name: 'Webpack', icon: SiWebpack, level: 75 },
        { name: 'Jest', icon: SiJest, level: 80 },
      ],
    },
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="skills-heading" className="text-4xl font-bold text-glassTextLight mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-300/80 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="space-y-16">
          {skills.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <SkillCategory {...category} />
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold text-glassTextLight mb-8">
            Additional Skills & Expertise
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Languages',
                items: ['C++', 'Python', 'Java', 'SQL'],
              },
              {
                title: 'Frameworks',
                items: ['Next.js', 'Tailwind CSS', 'Material UI', 'Bootstrap'],
              },
              {
                title: 'Tools',
                items: ['VS Code', 'Postman', 'Jira', 'Figma'],
              },
              {
                title: 'Testing',
                items: ['Jest', 'React Testing Library', 'Cypress', 'Postman'],
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="group relative card-tilt"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-glassAccent to-glassLavender rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-semibold text-glassTextLight mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="text-slate-300/80 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-glassAccent rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

