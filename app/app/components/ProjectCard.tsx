import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';

export const ProjectCard: React.FC<Project> = ({ 
  title, 
  description, 
  imageUrl, 
  tags,
  link 
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className={`h-48 rounded-lg mb-4 ${
      imageUrl ? 'bg-cover bg-center' : 'bg-gray-200'
    }`} 
    style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}} 
    />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
        >
          {tag}
        </span>
      ))}
    </div>
    {link && (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded"
      >
        View Project
      </motion.a>
    )}
  </motion.div>
);