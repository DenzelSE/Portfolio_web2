import React from 'react';
import { Project } from '@/types';
import { ProjectCard } from './ProjectCard';
import { Section } from '../layout/Section';

interface WorkSectionProps {
  projects: Project[];
  onContact: () => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ projects, onContact }) => (
  <Section className="flex flex-col items-center justify-center p-8">
    <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onContact}
      className="mt-12 bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg"
    >
      Contact Me
    </motion.button>
  </Section>
);