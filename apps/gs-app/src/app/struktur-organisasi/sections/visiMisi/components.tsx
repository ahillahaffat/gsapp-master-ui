'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VisiMisiData } from './data';

interface VisiMisiProps {
  data: VisiMisiData;
}

export function VisiMisi({ data }: VisiMisiProps) {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <h2
            className="mb-6 sm:mb-7 md:mb-8"
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 55px)',
              lineHeight: 'clamp(36px, 5vw, 64px)',
              color: '#032972',
            }}
          >
            {data.visi.title}
          </h2>
          <div className="space-y-4 sm:space-y-5 max-w-[1053px] mx-auto px-4">
            {data.visi.statements.map((statement, index) => (
              <p
                key={index}
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: 'clamp(16px, 2.5vw, 28px)',
                  lineHeight: 'clamp(24px, 3vw, 33px)',
                  color: '#032972',
                }}
              >
                &ldquo;{statement}&rdquo;
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            className="mb-6 sm:mb-7 md:mb-8"
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 55px)',
              lineHeight: 'clamp(36px, 5vw, 64px)',
              color: '#032972',
            }}
          >
            {data.misi.title}
          </h2>
          <ul className="text-justify max-w-[1068px] mx-auto space-y-0 px-4">
            {data.misi.items.map((item, index) => (
              <li
                key={index}
                className="flex items-start mb-2 sm:mb-3"
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 2.5vw, 28px)',
                  lineHeight: 'clamp(24px, 3.5vw, 58px)',
                  color: '#032972',
                }}
              >
                <span>
                  <strong>{item.keyword}:</strong> {item.description}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
