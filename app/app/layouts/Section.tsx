import React from 'react';
import { motion } from 'framer-motion';
import { Section } from 'lucide-react';

interface HeroSectionProps {
  name: string;
  title: string;
  onViewWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ name, title, onViewWork }) => (
  <Section className="flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
    <div className="text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-6xl font-bold mb-4"
      >
        Hello, I'm
        <span className="text-blue-600 ml-3">{name}</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl text-gray-600 mb-8"
      >
        {title}
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onViewWork}
        className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg"
      >
        View My Work
      </motion.button>
    </div>
  </Section>
);

export { Section };
