'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeroIntroData } from './data';

interface HeroIntroProps {
  data: HeroIntroData;
}

export function HeroIntro({ data }: HeroIntroProps) {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-32 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4"
              style={{ color: '#032972' }}
            >
              {data.titleLine1}
            </h1>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
              style={{ color: '#032972' }}
            >
              {data.titleLine2}
            </h1>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto px-4">
            {data.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
