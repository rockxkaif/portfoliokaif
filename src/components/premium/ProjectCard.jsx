import React from 'react';
import { motion } from 'framer-motion';
import Tag from '../ui/Tag';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ 
  title, 
  description, 
  tags = [], 
  demo, 
  repo, 
  image,
  index = 0
}) {
  return (
    <motion.article
      className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-md p-5 hover:shadow-xl transition-shadow h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
    >
      {image && (
        <img 
          src={image} 
          alt={`${title} screenshot`} 
          className="rounded-lg w-full h-40 object-cover mb-4" 
          loading="lazy"
        />
      )}
      
      <h3 className="text-lg font-semibold text-glassTextLight mb-2">
        {title}
      </h3>
      
      <p className="mt-2 text-sm text-slate-300/80 flex-grow mb-4">
        {description}
      </p>

      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <Tag key={i} variant="default" size="sm">
              {tag}
            </Tag>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center gap-3 pt-2">
        {demo && (
          <a 
            href={demo} 
            target="_blank" 
            rel="noreferrer noopener"
            className="text-sm text-glassAccent hover:text-glassGold transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-glassAccent rounded"
            aria-label={`View live demo of ${title}`}
          >
            <FaExternalLinkAlt className="w-3 h-3" />
            Live Demo
          </a>
        )}
        {repo && (
          <a 
            href={repo} 
            target="_blank" 
            rel="noreferrer noopener"
            className="text-sm text-glassAccent hover:text-glassGold transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-glassAccent rounded"
            aria-label={`View source code for ${title} on GitHub`}
          >
            <FaGithub className="w-4 h-4" />
            Code
          </a>
        )}
      </div>
    </motion.article>
  );
}

