'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaAirbnb, FaApple, FaGoogle, FaUber } from 'react-icons/fa';
import { FaMeta } from 'react-icons/fa6';

interface PartnerSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const partners = [
  { name: 'Uber', logo: <FaUber size={48} color="#000" /> },
  { name: 'Apple', logo: <FaApple size={48} color="#000" /> },
  { name: 'Meta', logo: <FaMeta size={48} color="#1877F3" /> },
  { name: 'Airbnb', logo: <FaAirbnb size={48} color="#FF5A5F" /> },
  { name: 'Google', logo: <FaGoogle size={48} color="#4285F4" /> },
];

export default function PartnerSection({
  title = 'Our Partners',
  subtitle = 'Trusted by leading companies',
  description = 'Kami bangga bekerja sama dengan berbagai perusahaan ternama untuk menghadirkan solusi terbaik dalam setiap proyek.',
}: PartnerSectionProps) {
  return (
    <section className="relative w-full bg-gray-50 dark:bg-neutral-900 py-24 px-6 md:px-16 lg:px-32 overflow-hidden font-[family-name:var(--font-montserrat)]">
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

      <div className="mt-16 max-w-5xl mx-auto overflow-x-auto scrollbar-hide">
        <div className="flex gap-12 md:justify-center md:flex-wrap snap-x snap-mandatory md:snap-none">
          {partners.map((partner, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 snap-center md:snap-none flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {partner.logo}
            <span className="mt-2 text-sm text-gray-500">{partner.name}</span>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
