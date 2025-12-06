import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { profile } from '../../data/content';
import { TypeAnimation } from 'react-type-animation';

export default function Hero({ 
  name = profile.name, 
  role = profile.title, 
  intro = profile.bio 
}) {
  return (
    <section 
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen flex items-center"
      aria-label="Hero section"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-glassTextLight mb-4">
            {name}
          </h1>
          <p className="mt-3 text-xl md:text-2xl text-slate-300">
            <TypeAnimation
              sequence={[
                role,
                1000,
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
          </p>
          {intro && (
            <p className="mt-6 text-base md:text-lg text-slate-300/80 max-w-2xl mx-auto leading-relaxed">
              {intro}
            </p>
          )}

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              href="/resume.pdf" 
              variant="solid"
              ariaLabel="Download resume PDF"
            >
              Download Resume
            </Button>
            <Button 
              href="#projects" 
              variant="ghost"
              ariaLabel="View projects section"
            >
              See Projects
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

