'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VisiMisiData } from './data';

interface VisiMisiProps {
  data: VisiMisiData;
}

export function VisiMisi({ data }: VisiMisiProps) {
  return (
    <section className="relative w-full bg-white py-24 px-6 md:px-16 lg:px-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="mb-8"
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(40px, 5vw, 55px)',
              lineHeight: '64px',
              color: '#032972',
            }}
          >
            {data.visi.title}
          </h2>
          <div className="space-y-5 max-w-[1053px] mx-auto">
            {data.visi.statements.map((statement, index) => (
              <p
                key={index}
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: 'clamp(20px, 3vw, 28px)',
                  lineHeight: '33px',
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
            className="mb-8"
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(40px, 5vw, 55px)',
              lineHeight: '64px',
              color: '#032972',
            }}
          >
            {data.misi.title}
          </h2>
          <ul className="text-justify max-w-[1068px] mx-auto space-y-0">
            {data.misi.items.map((item, index) => (
              <li
                key={index}
                className="flex items-start"
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 3vw, 28px)',
                  lineHeight: '58px',
                  color: '#032972',
                }}
              >
                <span className="mr-3 mt-2">•</span>
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
