import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { experiences } from '../data/content';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative card-tilt"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-glassAccent to-glassLavender rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative glass-card">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Left Column - Icon and Timeline */}
          <div className="flex flex-col items-center">
            <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-xl">
              <FaBriefcase className="w-6 h-6 text-primary-500" />
            </div>
            <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 my-2"></div>
          </div>

          {/* Right Column - Content */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h2 className="text-xl font-bold text-glassTextLight">
                {experience.title}
              </h2>
              <div className="flex items-center text-sm text-glassAccent">
                <FaCalendarAlt className="w-4 h-4 mr-1" />
                {experience.period}
              </div>
            </div>

            <div className="mt-2 flex items-center text-slate-300/80">
              <FaMapMarkerAlt className="w-4 h-4 mr-1" />
              <span className="text-sm">{experience.company}</span>
            </div>

            <div className="mt-4 space-y-3">
              {experience.responsibilities.map((responsibility, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="flex items-start"
                >
                  <span className="w-1.5 h-1.5 bg-glassAccent rounded-full mt-2 mr-2 flex-shrink-0" />
                  <p className="text-slate-300/80">
                    {responsibility}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            {experience.techStack && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-glassTextLight mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {experience.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs tracking-wide uppercase bg-white/5 text-slate-200 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-glassTextLight mb-4">
          Work Experience
        </h1>
        <p className="text-lg text-slate-300/80 max-w-2xl mx-auto">
          A journey through my professional experience and achievements
        </p>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
            index={index}
          />
        ))}
      </div>

      {/* Additional Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-20"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Additional Experience
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Freelance Projects',
              description: 'Worked on various freelance projects including web development, UI/UX design, and technical consulting.',
              icon: '💼',
            },
            {
              title: 'Open Source Contributions',
              description: 'Active contributor to open source projects, focusing on React ecosystem and developer tools.',
              icon: '🌟',
            },
            {
              title: 'Technical Writing',
              description: 'Published articles and tutorials on web development, React, and modern JavaScript.',
              icon: '✍️',
            },
            {
              title: 'Community Involvement',
              description: 'Participated in hackathons, tech meetups, and mentoring programs.',
              icon: '👥',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 