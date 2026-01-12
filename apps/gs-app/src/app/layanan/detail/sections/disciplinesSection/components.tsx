'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DisciplinesSectionData, Discipline } from './data';

interface DisciplineListProps {
  discipline: Discipline;
  index: number;
}

function DisciplineList({ discipline, index }: DisciplineListProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-16 last:mb-0"
    >
      <h3
        className="text-white mb-6"
        style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 800,
            fontSize: '24px',
            lineHeight: '32px'
        }}
      >
        {discipline.title}
      </h3>
      <ul className="space-y-4">
        {discipline.items.map((item, itemIndex) => (
          <li
            key={itemIndex}
            className="text-white flex items-start"
            style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '28px'
            }}
          >
            <span className="mr-3 text-[10px] mt-2.5">●</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

interface DisciplinesSectionProps {
  data: DisciplinesSectionData;
}

export function DisciplinesSection({ data }: DisciplinesSectionProps) {
  return (
    <section
      className="relative w-full py-24 px-4 overflow-hidden"
      style={{ backgroundColor: '#274F9A' }}
    >
      {/* Container Utama */}
      <div className="max-w-[1502px] mx-auto w-full">

        {/* Wrapper Konten:
            - Mobile: Padding standard (px-4)
            - Desktop (lg): Padding Left 255px sesuai Figma (pl-[255px])
            Agar konten terdorong ke kanan */}
        <div className="px-4 lg:px-0 lg:pl-[255px]">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16 md:mb-24"
            >
                <h2
                className="text-white"
                style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: 'clamp(40px, 5vw, 64px)',
                    lineHeight: '100%',
                    maxWidth: '511px'
                }}
                >
                {data.title}
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-[150px] items-start">
              <div className="flex flex-col">
                {data.leftColumn.map((discipline, index) => (
                  <DisciplineList
                    key={index}
                    discipline={discipline}
                    index={index}
                  />
                ))}
              </div>
              <div className="flex flex-col">
                {data.rightColumn.map((discipline, index) => (
                  <DisciplineList
                    key={index}
                    discipline={discipline}
                    index={index + data.leftColumn.length}
                  />
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
