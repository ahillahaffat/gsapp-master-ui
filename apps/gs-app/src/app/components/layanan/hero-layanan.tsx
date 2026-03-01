'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface HeroLayananData {
  titleLine1: string;
  titleLine2: string;
  description: string;
  backgroundImage?: string;
  overlayOpacity?: number;
  height?: string;
}

export const heroLayananData: HeroLayananData = {
  titleLine1: 'Technical Disciplines',
  titleLine2: '& Workflow',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
  backgroundImage: '/images/hero.jpg',
  overlayOpacity: 0.1,
  height: '100vh',
};

export default function HeroLayanan({
  data,
}: { data?: HeroLayananData }) {
  const heroData = data ?? heroLayananData;

  return (
    <main
      className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroData.backgroundImage || '/images/hero.jpg'})`,
        minHeight: '100vh',
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: heroData.overlayOpacity ?? 0.4 }}
      />

      {/* Content */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-32 pt-24 pb-16 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4"
              style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(3, 41, 114, 0.8)' }}
            >
              {heroData.titleLine1}
            </h1>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
              style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(3, 41, 114, 0.8)' }}
            >
              {heroData.titleLine2}
            </h1>
          </div>
          {heroData.description && (
            <p
              className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto px-4"
              style={{ textShadow: '0 1px 4px rgba(3, 41, 114, 0.6)' }}
            >
              {heroData.description}
            </p>
          )}
        </motion.div>
      </section>
    </main>
  );
}
