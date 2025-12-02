import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-700 via-navy-600 to-navy-800 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gold-500 dark:text-gold-400 mb-4">
            Experience
          </h2>
          <p className="text-navy-100 dark:text-navy-200">
            Professional journey and achievements
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg dark:bg-navy-800/50 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-navy-600/20 p-6"
            >
              <h3 className="text-xl font-semibold text-gold-500 dark:text-gold-400 mb-2">
                {exp.title}
              </h3>
              <p className="text-navy-100 dark:text-navy-200 mb-2">
                {exp.company}
              </p>
              <p className="text-navy-200 dark:text-navy-300 mb-4">
                {exp.period}
              </p>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="text-navy-100 dark:text-navy-200">
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 