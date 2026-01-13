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
        className="text-white mb-4 sm:mb-5 md:mb-6"
        style={{
          fontFamily: "'Nunito Sans', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(18px, 2.5vw, 24px)',
          lineHeight: 'clamp(24px, 3vw, 32px)'
        }}
      >
        {discipline.title}
      </h3>
      <ul className="space-y-3 sm:space-y-4">
        {discipline.items.map((item, itemIndex) => (
          <li
            key={itemIndex}
            className="text-white flex items-start"
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(14px, 2vw, 18px)',
              lineHeight: 'clamp(20px, 2.5vw, 28px)'
            }}
          >
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
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden"
      style={{ backgroundColor: '#274F9A' }}
    >
      <div className="max-w-[1502px] mx-auto w-full">
        <div className="px-4 sm:px-6 md:px-8 lg:px-0 lg:pl-[120px] xl:pl-[180px] 2xl:pl-[255px]">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24"
          >
            <h2
              className="text-white max-w-full sm:max-w-[400px] md:max-w-[450px] lg:max-w-[511px]"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 64px)',
                lineHeight: '100%'
              }}
            >
              {data.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 xl:gap-[120px] 2xl:gap-[150px] items-start">
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
