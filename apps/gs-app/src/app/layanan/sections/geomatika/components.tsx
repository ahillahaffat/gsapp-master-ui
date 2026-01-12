'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { GeomatikaData } from './data';

interface GeomatikaSectionProps {
  data: GeomatikaData;
}

export function GeomatikaSection({ data }: GeomatikaSectionProps) {
  return (
    <section className="relative w-full bg-white py-24 px-6 md:px-16 lg:px-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 text-3xl md:text-4xl font-bold underline"
          style={{ color: '#032972' }}
        >
          {data.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row rounded-[20px] overflow-hidden"
          style={{ backgroundColor: '#0460D9', minHeight: '477px' }}
        >
          <div className="md:w-1/2 relative h-[300px] md:h-[477px]">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="md:w-1/2 p-8 md:p-10 lg:p-12 flex flex-col justify-between bg-[#0460D9] relative">
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
                {data.serviceTitle}
              </h3>
              <p className="text-white text-base md:text-lg leading-relaxed">
                {data.description}
              </p>
            </div>
            <div className="mt-auto pt-8">
              <Link
                href="/layanan/detail"
                className="inline-block px-8 py-3 rounded-full text-white font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#032972' }}
              >
                {data.buttonText}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
