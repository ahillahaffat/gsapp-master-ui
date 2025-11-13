'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const solutions = [
  {
    title: 'Geometry',
    description:
      'Berperan sebagai dasar dalam membangun solusi konstruksi dengan teknologi terbaru, yang memfasilitasi pembuatan model bangunan yang lebih efisien dan presisi.',
    color: 'var(--color-primary)',
    image: '/images/geom.jpg',
  },
  {
    title: 'Geomatika',
    description:
      'Berfokus pada pengolahan data spasial, memastikan bahwa semua langkah perencanaan dan eksekusi proyek dimulai dengan informasi yang akurat dan terperinci.',
    color: 'var(--color-primary-dark)',
    image: '/images/geo.jpg',
  },
];

export default function AboutSection({
  title = 'Geometrika Studio',
  subtitle = 'Konsultan Independen Konstruksi',
  description = `Geometrika Studio merupakan perusahaan di bidang jasa konsultan independen konstruksi sekaligus mitra strategis dalam proyek infrastruktur yang berdiri tanggal 28 Oktober 2024.`,
}: AboutSectionProps) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => setCurrent((prev) => (prev + 1) % solutions.length);
  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + solutions.length) % solutions.length);

  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-24 px-6 md:px-16 lg:px-32 font-[family-name:var(--font-montserrat)] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-sm md:text-base uppercase tracking-widest text-gray-500 mb-3">
          {subtitle}
        </h2>
        <h1
          className="text-3xl md:text-5xl font-bold mb-6"
          style={{ color: 'var(--color-primary)' }}
        >
          {title}
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-primary/30 to-transparent blur-3xl pointer-events-none"
      />

      <div className="mt-24 max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="relative flex flex-col md:flex-row items-center dark:bg-neutral-900 rounded-xl overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Tentukan arah masuk berdasarkan indeks slide */}
            {current % 2 === 0 ? (
              <>
                {/* Image dari kiri */}
                <motion.div
                  className="md:w-1/2"
                  initial={{ opacity: 0, x: -300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 300 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <img
                    src={solutions[current].image}
                    alt={solutions[current].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Text dari kanan */}
                <motion.div
                  className="md:w-1/2 p-8 md:pl-12"
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <h3
                    className="text-2xl md:text-4xl font-bold mb-4"
                    style={{ color: solutions[current].color }}
                  >
                    {solutions[current].title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
                    {solutions[current].description}
                  </p>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  className="md:w-1/2"
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <img
                    src={solutions[current].image}
                    alt={solutions[current].title}
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
                    style={{ color: solutions[current].color }}
                  >
                    {solutions[current].title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
                    {solutions[current].description}
                  </p>
                </motion.div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-4 gap-4">
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
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-200"
            onClick={handlePrev}
          >
            Prev
          </button>
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
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-200"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
