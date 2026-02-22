'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export interface GeomatikaData {
  title: string;
  description: string;
  image: string;
}

const defaultGeomatikaData: GeomatikaData = {
  title: 'GEOMATIKA',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  image: '/images/geo2.jpg',
};

export default function GeomatikaLayanan({ data = defaultGeomatikaData }: { data?: GeomatikaData }) {
  return (
    <section className="relative w-full bg-white py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16 text-2xl sm:text-3xl md:text-4xl font-bold underline"
          style={{ color: '#032972' }}
        >
          {data.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row rounded-lg md:rounded-xl lg:rounded-[20px] overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[477px]"
          style={{ backgroundColor: '#0460D9' }}
        >
          <div className="md:w-1/2 relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[477px]">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between bg-[#0460D9] relative">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6 uppercase">
                {data.title}
              </h3>
              <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                {data.description}
              </p>
            </div>
            <div className="mt-auto pt-6 sm:pt-7 md:pt-8">
              <Link
                href="/layanan/detail"
                className="inline-block px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-full text-white font-semibold text-sm sm:text-base transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#032972' }}
              >
                See Details
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}