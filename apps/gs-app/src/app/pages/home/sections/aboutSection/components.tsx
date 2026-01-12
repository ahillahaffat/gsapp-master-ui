'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Solution } from './data';

interface SolutionCardProps {
  solution: Solution;
  isEven: boolean;
  index: number;
}

export function SolutionCard({ solution, isEven, index }: SolutionCardProps) {
  if (isEven) {
    return (
      <>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <img
            src={solution.image}
            alt={solution.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 p-8 md:pl-12"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <h3
            className="text-2xl md:text-4xl font-bold mb-4"
            style={{ color: solution.color }}
          >
            {solution.title}
          </h3>
          <p className="text-gray-700 text-lg md:text-xl">
            {solution.description}
          </p>
        </motion.div>
      </>
    );
  }

  return (
    <>
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <img
          src={solution.image}
          alt={solution.title}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        className="md:w-1/2 p-8 md:pl-12"
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <h3
          className="text-2xl md:text-4xl font-bold mb-4"
          style={{ color: solution.color }}
        >
          {solution.title}
        </h3>
        <p className="text-gray-700 text-lg md:text-xl">
          {solution.description}
        </p>
      </motion.div>
    </>
  );
}

interface CarouselButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function CarouselButton({ onClick, children }: CarouselButtonProps) {
  return (
    <button
      style={{ transition: '0.3s' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-primary)';
        e.currentTarget.style.color = 'var(--color-white)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '';
        e.currentTarget.style.color = '';
      }}
      className="px-4 py-2 bg-gray-200 rounded text-gray-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  descriptionDetail?: React.ReactNode;
}

export function SectionHeader({
  title,
  subtitle,
  descriptionDetail,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto text-center mb-16"
    >
      {subtitle && (
        <h2 className="text-sm md:text-base uppercase tracking-widest text-gray-500 mb-3">
          {subtitle}
        </h2>
      )}
      <h1
        className="text-3xl md:text-5xl font-bold mb-8"
        style={{ color: 'var(--color-primary)' }}
      >
        {title}
      </h1>
      {descriptionDetail && (
        <div className="text-center max-w-4xl mx-auto">{descriptionDetail}</div>
      )}
    </motion.div>
  );
}
