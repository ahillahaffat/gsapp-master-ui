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
    <section className="relative w-full bg-white py-24 px-6 md:px-16 lg:px-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div
            className="inline-block px-6 py-3 rounded-[10px] text-white font-bold text-lg md:text-xl mb-8"
            style={{ backgroundColor: '#3B82F6' }}
          >
            {data.title}
          </div>
        </motion.div>

        <div className="relative mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 relative">
            {data.steps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-6 py-4 rounded-[10px] text-white font-semibold text-sm md:text-base text-center min-w-[150px] md:min-w-[180px]"
                  style={{ backgroundColor: step.color }}
                >
                  {step.label}
                </motion.div>
                {index < data.steps.length - 1 && (
                  <div className="hidden md:block">
                    <svg
                      width="40"
                      height="20"
                      viewBox="0 0 40 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 10L35 15L30 20M35 10L40 15L35 20"
                        stroke="#9CA3AF"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
            <div className="relative w-full h-full">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 128 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  stroke="#9CA3AF"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  fill="none"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-600 text-sm font-semibold text-center">
                  {data.digitalTwinLabel}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 border-t-2 border-dashed border-gray-300 pt-4">
            <p className="text-center text-gray-800 font-bold text-lg md:text-xl">
              {data.qualityControlLabel}
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative w-full h-[300px] md:h-[400px] rounded-[10px] overflow-hidden">
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
