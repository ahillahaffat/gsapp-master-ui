'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { solutions } from './aboutSection/data';
import { useCarousel } from './aboutSection/hooks';
import {
  SolutionCard,
  CarouselButton,
  SectionHeader,
} from './aboutSection/components';

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  descriptionDetail?: React.ReactNode;
}

export default function AboutSection({
  title = 'Profil Perusahaan',
  subtitle = '',
  descriptionDetail = (
    <>
      <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-6">
        <span className="font-bold text-[var(--color-primary-dark)]">
          Geometrika Studio
        </span>{' '}
        merupakan perusahaan dibidang jasa konsultan independen <br />
        konstruksi sekaligus mitra strategis dalam proyek infrastruktur yang
        berdiri tanggal 28 <br />
        Oktober 2024 dengan nama resmi{' '}
        <span className="font-bold text-[var(--color-primary-dark)]">
          CV. Graha Sinergi Adiwidia
        </span>
        .
      </p>
      <p className="text-base md:text-lg leading-relaxed text-gray-800">
        Kami Berfokus Pada Pengembangan Solusi Konstruksi Berbasis Teknologi
        yang <br />
        Terintegrasi, dengan memberikan layanan yang didasarkan pada 2 Bidang
        Utama, <br />
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
    <section className="relative w-full bg-white py-24 px-6 md:px-16 lg:px-32 font-[family-name:var(--font-montserrat)] overflow-hidden">
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
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-primary/30 to-transparent blur-3xl pointer-events-none"
      />

      <div className="mt-24 max-w-5xl mx-auto">
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
