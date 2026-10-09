'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.7, delay: 0.8 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#f8fafc] via-white to-blue-50"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#081b34] to-blue-600 text-xl font-black text-white shadow-[0_20px_50px_rgba(8,27,52,0.32)]">
            TT
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-4xl font-black tracking-[-0.06em] text-[#081b34] md:text-5xl"
        >
          Titán-Tech
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-3 text-xs font-bold uppercase tracking-[0.32em] text-blue-700"
        >
          Bau Kft.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-8 flex justify-center gap-2"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{ scaleY: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: index * 0.18 }}
              className="h-8 w-2 rounded-full bg-blue-600"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
