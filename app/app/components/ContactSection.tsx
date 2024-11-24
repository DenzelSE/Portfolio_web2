import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../layout/Section';

interface ContactSectionProps {
  onBackToTop: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onBackToTop }) => (
  <Section className="flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
      <p className="text-xl text-gray-600 mb-8">
        Let's work together on your next project
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onBackToTop}
        className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg"
      >
        Back to Top
      </motion.button>
    </div>
  </Section>
);