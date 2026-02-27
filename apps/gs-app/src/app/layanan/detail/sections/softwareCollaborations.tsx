'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { SoftwareCollaborationsData } from '../types';

interface SoftwareCollaborationsSectionProps {
  data: SoftwareCollaborationsData;
}

export default function SoftwareCollaborationsSection({
  data,
}: SoftwareCollaborationsSectionProps) {
  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 w-full"
      >
        <Image
          src="/images/aset.png"
          alt="Integrated Ecosystem"
          width={1200}
          height={200}
          className="w-full h-auto"
        />
      </motion.div>
      <div className="px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12 text-2xl md:text-4xl font-bold"
            style={{ color: '#032972' }}
          >
            {data.title}
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {data.collaborations.map((collab, index) => (
              <motion.div
                key={collab.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32">
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
