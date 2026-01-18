'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SoftwareCollaborationsData } from './data';

interface SoftwareCollaborationsProps {
  data: SoftwareCollaborationsData;
}

export function SoftwareCollaborations({ data }: SoftwareCollaborationsProps) {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8 sm:mb-10 md:mb-12 w-full"
      >
        <img
          src="/images/aset.png"
          alt="Integrated Ecosystem"
          className="w-full h-auto"
        />
      </motion.div>
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
            style={{ color: '#032972' }}
          >
            {data.title}
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center">
            {data.collaborations.map((collab, index) => (
              <motion.div
                key={collab.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center"
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32">
                  <Image
                    src={collab.logo}
                    alt={collab.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
