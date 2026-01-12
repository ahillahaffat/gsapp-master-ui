'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeroIntroData } from './data';

interface HeroIntroProps {
  data: HeroIntroData;
}

export function HeroIntro({ data }: HeroIntroProps) {
  return (
    <section className="relative w-full bg-white py-24 px-6 md:px-16 lg:px-32 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="mb-12 md:mb-16">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4"
              style={{ color: '#032972' }}
            >
              {data.titleLine1}
            </h1>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              style={{ color: '#032972' }}
            >
              {data.titleLine2}
            </h1>
          </div>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {data.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
