'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IntegratedEcosystemData } from './data';

interface IntegratedEcosystemProps {
  data: IntegratedEcosystemData;
}

export function IntegratedEcosystem({ data }: IntegratedEcosystemProps) {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <div
            className="inline-block px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg md:rounded-[10px] text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-7 md:mb-8"
            style={{ backgroundColor: '#3B82F6' }}
          >
            {data.title}
          </div>
        </motion.div>

        <div className="relative mb-6 sm:mb-7 md:mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 relative">
            {data.steps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-lg md:rounded-[10px] text-white font-semibold text-xs sm:text-sm md:text-base text-center min-w-[120px] sm:min-w-[140px] md:min-w-[150px] lg:min-w-[180px]"
                  style={{ backgroundColor: step.color }}
                >
                  {step.label}
                </motion.div>
                {index < data.steps.length - 1 && (
                  <div className="hidden md:block text-gray-400 text-xl font-bold">
                    →
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 items-center justify-center">
            <div className="relative w-full h-full border-2 border-dashed border-gray-400 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-xs md:text-sm font-semibold text-center px-2">
                {data.digitalTwinLabel}
              </span>
            </div>
          </div>

          <div className="mt-6 sm:mt-7 md:mt-8 lg:mt-10 xl:mt-12 border-t-2 border-dashed border-gray-300 pt-3 sm:pt-3.5 md:pt-4">
            <p className="text-center text-gray-800 font-bold text-base sm:text-lg md:text-xl">
              {data.qualityControlLabel}
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 md:mt-14 lg:mt-16"
        >
          <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] rounded-lg md:rounded-[10px] overflow-hidden">
            <Image
              src="/images/aset.png"
              alt="Software Collaborations"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
