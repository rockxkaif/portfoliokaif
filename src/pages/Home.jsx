import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { profile } from '../data/content';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '../context/ThemeContext'; // Import useTheme hook

// Single twinkling star component for the background
function Star({ size, x, y, delay, isDarkMode }) {
  const starColor = isDarkMode ? 'white' : '#CBD5E1'; // Light gray in light mode, white in dark mode
  const glowColor = isDarkMode ? 'white' : '#94A3B8'; // Darker gray glow in light mode

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0.5, 1, 0], // Animate opacity for a twinkling effect
        scale: [0, 1, 0.8, 1, 0], // Animate scale for a subtle size variation
      }}
      transition={{
        repeat: Infinity, // Repeat the animation indefinitely
        duration: 4 + Math.random() * 3, // Randomize duration slightly for natural look
        delay, // Delay animation start
        ease: 'easeInOut', // Smooth animation
      }}
      style={{
        position: 'absolute',
        top: `${y}%`, // Position star vertically
        left: `${x}%`, // Position star horizontally
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: starColor, // Dynamic star color
        filter: `drop-shadow(0 0 4px ${glowColor})`, // Dynamic glow color
        pointerEvents: 'none', // Ensure stars don't interfere with clicks
        zIndex: 0, // Place stars behind content
      }}
    />
  );
}

// Starfield background container component
function Starfield({ count = 60, isDarkMode }) {
  // Generate an array of random star properties
  const stars = Array.from({ length: count }).map(() => ({
    size: `${Math.random() * 2 + 1}px`, // Random size between 1px and 3px
    x: Math.random() * 100, // Random horizontal position (0-100%)
    y: Math.random() * 100, // Random vertical position (0-100%)
    delay: Math.random() * 5, // Random animation delay
  }));

  return (
    <div
      aria-hidden="true" // Hide from screen readers
      className="fixed inset-0 pointer-events-none z-0"
      style={{ overflow: 'hidden' }} // Hide stars that go beyond the screen
    >
      {stars.map(({ size, x, y, delay }, i) => (
        <Star key={i} size={size} x={x} y={y} delay={delay} isDarkMode={isDarkMode} />
      ))}
    </div>
  );
}

export default function Home() {
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

  // State to trigger sparkle animation on button click
  const [sparkle, setSparkle] = useState(false);
  const { isDarkMode } = useTheme(); // Use the useTheme hook to get dark mode status

  // Variants for the sparkle burst animation
  const sparkleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: [1, 1, 0], // Fade in quickly, hold, then fade out
      scale: [0, 1.5, 0], // Scale up from zero, reach max, then scale back to zero
      rotate: [0, 90, 180], // Rotate during the animation
      transition: { duration: 0.6, ease: "easeOut" }, // Animation duration and easing
    },
  };

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Star sparkle background */}
      {/* Render Starfield component as a fixed background, passing isDarkMode */}
      <Starfield count={60} isDarkMode={isDarkMode} />

      {/* Main content container with relative z-index to appear above starfield */}
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
                {/* TypeAnimation component for typing effect */}
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    1000, // wait 1s
                    'UI/UX Designer',
                    1000,
                    'Problem Solver',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity} // Repeat the animation
                />
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300/80 leading-relaxed"
            >
              {profile.bio}
            </motion.p>

            {/* Action Buttons: Resume Download and Contact */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download
                className="btn-glass-primary btn-press"
              >
                <FaDownload className="mr-2" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="btn-glass-outline btn-press"
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
                    whileHover={{ scale: 1.1 }} // Scale up slightly on hover
                    whileTap={{ scale: 0.95 }} // Scale down slightly on tap
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
              {/* Optional: Add a subtle effect around the image */}
              {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div> */}
              
              <div className="profile-ring-inner">
                <img
                  src="/src/assets/ka-logo.png" // Assuming the image is here
                  alt="KA Text Logo"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[{
            title: "Modern Web Development",
            description: "Building responsive and performant web applications using React, Next.js, and modern JavaScript.",
            icon: "💻",
          }, {
            title: "UI/UX Design",
            description: "Creating intuitive and beautiful user interfaces with a focus on user experience and accessibility.",
            icon: "🎨",
          }, {
            title: "Problem Solving",
            description: "Tackling complex challenges with elegant solutions and clean, maintainable code.",
            icon: "🔧",
          }, ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="group relative card-tilt"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-glassAccent to-glassLavender rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass-card">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-glassTextLight">
                  {item.title}
                </h3>
                <p className="text-slate-300/80">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>
    </div>
  );
}
