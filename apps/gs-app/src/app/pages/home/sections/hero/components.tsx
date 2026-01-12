'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroContentProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  align: 'left' | 'center' | 'right';
}

export function HeroContent({
  title,
  subtitle,
  tagline,
  align,
}: HeroContentProps) {
  const alignment =
    align === 'center'
      ? 'items-center text-center'
      : align === 'right'
        ? 'items-end text-right'
        : 'items-start text-left';

  return (
    <div
      className={`absolute bottom-32 left-4 sm:left-6 md:left-8 lg:left-20 right-4 md:right-auto max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl py-2 md:px-0 ${alignment}`}
    >
      {subtitle && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-light text-white drop-shadow-md"
          style={{ fontSize: 'clamp(1rem, 3.2vw, 2rem)' }}
        >
          {subtitle}
        </motion.h2>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-extrabold text-white leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]"
        style={{ fontSize: 'clamp(1.75rem, 6vw, 4.5rem)' }}
      >
        {title}
      </motion.h1>

      {tagline && (
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-light text-white drop-shadow-md"
          style={{ fontSize: 'clamp(1rem, 3.5vw, 3rem)' }}
        >
          {tagline}
        </motion.h2>
      )}
    </div>
  );
}
