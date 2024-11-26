import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
          className="h-1 bg-blue-600 rounded-full w-48"
        />
        <p className="mt-4 text-gray-600">Loading your portfolio...</p>
      </motion.div>
    </div>
  );
};
