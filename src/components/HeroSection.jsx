import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { profile } from '../data/content';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '../context/ThemeContext';

// Single twinkling star component for the background
function Star({ size, x, y, delay, isDarkMode }) {
  const starColor = isDarkMode ? 'white' : '#CBD5E1';
  const glowColor = isDarkMode ? 'white' : '#94A3B8';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0.5, 1, 0],
        scale: [0, 1, 0.8, 1, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4 + Math.random() * 3,
        delay,
        ease: 'easeInOut',
      }}
      style={{
        position: 'absolute',
        top: `${y}%`,
        left: `${x}%`,
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: starColor,
        filter: `drop-shadow(0 0 4px ${glowColor})`,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

// Starfield background container component
function Starfield({ count = 60, isDarkMode }) {
  const stars = Array.from({ length: count }).map(() => ({
    size: `${Math.random() * 2 + 1}px`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
  }));

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ overflow: 'hidden' }}
    >
      {stars.map(({ size, x, y, delay }, i) => (
        <Star key={i} size={size} x={x} y={y} delay={delay} isDarkMode={isDarkMode} />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const socialIcons = {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const { isDarkMode } = useTheme();

  return (
    <section id="hero" className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Starfield count={60} isDarkMode={isDarkMode} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 glass-hero motion-fade-up">
        <div className="glass-hero-inner">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-glassTextLight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-glassAccent to-glassLavender bg-clip-text text-transparent">
                    {profile.name}
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300">
                  <TypeAnimation
                    sequence={[
                      'Full Stack Developer',
                      1000,
                      'UI/UX Designer',
                      1000,
                      'Problem Solver',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </h2>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-300/80 leading-relaxed"
              >
                {profile.bio}
              </motion.p>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download
                className="btn-glass-primary btn-press focus:outline-none focus:ring-2 focus:ring-glassAccent"
                aria-label="Download resume PDF"
              >
                <FaDownload className="mr-2" aria-hidden="true" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="btn-glass-outline btn-press focus:outline-none focus:ring-2 focus:ring-glassAccent"
                aria-label="Navigate to contact section"
              >
                Contact Me
              </a>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                variants={itemVariants}
                className="flex space-x-6"
              >
                {profile.socialLinks.map((link) => {
                  const Icon = socialIcons[link.icon];
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300/80 hover:text-glassAccent transition-colors glass-glow"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right Column - KA Text Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center"
            >
              <div className="relative w-full max-w-[180px] mx-auto profile-ring">
              <div className="profile-ring-inner">
                <img
                  src="/src/assets/ka-logo.png"
                  alt="Kaif Ansari logo - KA initials"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

