import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { HeroSection } from '@/components/sections/HeroSection';
import { WorkSection } from '@/components/sections/WorkSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Project } from '@/types';

const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of this amazing project and its features.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://project1.com"
  },
  // Add more projects...
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {activeSection === 'hero' && (
          <HeroSection
            name="John Doe"
            title="Full Stack Developer & Designer"
            onViewWork={() => setActiveSection('work')}
          />
        )}
        {activeSection === 'work' && (
          <WorkSection
            projects={projects}
            onContact={() => setActiveSection('contact')}
          />
        )}
        {activeSection === 'contact' && (
          <ContactSection
            onBackToTop={() => setActiveSection('hero')}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );