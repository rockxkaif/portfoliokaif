import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { certificates } from '../data/content';

export default function Certificates() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Certificates
          </h2>
          <p className="text-secondary-600 dark:text-secondary-300">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-secondary-800 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 h-full"
            >
              <div className="p-6 flex flex-col h-full break-words">
                <div className="flex items-center justify-between mb-4">
                  <FaCertificate className="text-primary-500 text-2xl" />
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 transition-colors"
                      aria-label={`View ${cert.title} certificate`}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-1">
                  {cert.issuer} &middot; {cert.date}
                </p>
                <p className="text-secondary-600 dark:text-secondary-300 text-sm whitespace-pre-wrap">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
