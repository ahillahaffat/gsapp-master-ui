'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Solution {
  title: string;
  description: string;
  color: string;
  image: string;
}

interface SolutionCardProps {
  solution: Solution;
  isEven: boolean;
  index: number;
}

interface CarouselButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  descriptionDetail?: React.ReactNode;
}

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  descriptionDetail?: React.ReactNode;
}

// Data
const solutions: Solution[] = [
  {
    title: 'Geometry',
    description:
      'Berperan sebagai dasar dalam membangun solusi konstruksi dengan teknologi terbaru, yang memfasilitasi pembuatan model bangunan yang lebih efisien dan presisi.',
    color: 'var(--color-primary)',
    image: '/images/geo1.jpg',
  },
  {
    title: 'Geometrika',
    description:
      'Berfokus pada pengolahan data spasial, memastikan bahwa semua langkah perencanaan dan eksekusi proyek dimulai dengan informasi yang akurat dan terperinci.',
    color: 'var(--color-primary-dark)',
    image: '/images/geo2.jpg',
  },
];

// Hook
function useCarousel(itemsLength: number) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % itemsLength);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + itemsLength) % itemsLength);
  };

  return {
    current,
    handleNext,
    handlePrev,
  };
}

// Components
function SolutionCard({ solution, isEven, index }: SolutionCardProps) {
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
          className="md:w-1/2 p-6 sm:p-8 md:pl-10 lg:pl-12"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <h3
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
            style={{ color: solution.color }}
          >
            {solution.title}
          </h3>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl">
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
        className="md:w-1/2 p-6 sm:p-8 md:pl-10 lg:pl-12"
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <h3
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
          style={{ color: solution.color }}
        >
          {solution.title}
        </h3>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
          {solution.description}
        </p>
      </motion.div>
    </>
  );
}

function CarouselButton({ onClick, children }: CarouselButtonProps) {
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

function SectionHeader({
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
      className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 px-4"
    >
      {subtitle && (
        <h2 className="text-sm md:text-base uppercase tracking-widest text-gray-500 mb-3">
          {subtitle}
        </h2>
      )}
      <h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-7 md:mb-8"
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

// Main Component
export default function AboutSection({
  title = 'Profil Perusahaan',
  subtitle = '',
  descriptionDetail = (
    <>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800 mb-4 sm:mb-5 md:mb-6">
        <span className="font-bold text-[var(--color-primary-dark)]">
          Geometrika Studio
        </span>{' '}
        merupakan perusahaan dibidang jasa konsultan independen konstruksi sekaligus mitra strategis dalam proyek infrastruktur yang berdiri tanggal 28 Oktober 2024 dengan nama resmi{' '}
        <span className="font-bold text-[var(--color-primary-dark)]">
          CV. Graha Sinergi Adiwidia
        </span>
        .
      </p>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800">
        Kami Berfokus Pada Pengembangan Solusi Konstruksi Berbasis Teknologi yang Terintegrasi, dengan memberikan layanan yang didasarkan pada 2 Bidang Utama,{' '}
        <span className="font-bold text-[var(--color-primary)]">Geometry</span>{' '}
        dan{' '}
        <span className="font-bold text-[var(--color-primary-dark)]">
          Geometrika
        </span>
        .
      </p>
    </>
  ),
}: AboutSectionProps) {
  const { current, handleNext, handlePrev } = useCarousel(solutions.length);

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-32 font-[family-name:var(--font-montserrat)] overflow-hidden">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        descriptionDetail={descriptionDetail}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-tr from-primary/30 to-transparent blur-3xl pointer-events-none"
      />

      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="relative flex flex-col md:flex-row items-center rounded-xl overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <SolutionCard
              solution={solutions[current]}
              isEven={current % 2 === 0}
              index={current}
            />
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-4 gap-4">
          <CarouselButton onClick={handlePrev}>Prev</CarouselButton>
          <CarouselButton onClick={handleNext}>Next</CarouselButton>
        </div>
      </div>
    </section>
  );
}
