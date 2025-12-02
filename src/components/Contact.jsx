import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-700 via-navy-600 to-navy-800 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gold-500 dark:text-gold-400 mb-4">
            Contact
          </h2>
          <p className="text-navy-100 dark:text-navy-200">
            Get in touch with me
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-lg dark:bg-navy-800/50 rounded-xl shadow-card p-6 border border-navy-600/20"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-navy-100 dark:text-navy-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-navy-700/50 border border-navy-600/20 text-navy-100 dark:text-navy-200 focus:outline-none focus:ring-2 focus:ring-gold-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-navy-100 dark:text-navy-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-navy-700/50 border border-navy-600/20 text-navy-100 dark:text-navy-200 focus:outline-none focus:ring-2 focus:ring-gold-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-navy-100 dark:text-navy-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-navy-700/50 border border-navy-600/20 text-navy-100 dark:text-navy-200 focus:outline-none focus:ring-2 focus:ring-gold-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gold-500 text-navy-900 font-semibold hover:bg-gold-400 transition-colors"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
} 