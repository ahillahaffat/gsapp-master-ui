'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { HeroDetailData } from '../../types';

interface HeroDetailProps {
  data: HeroDetailData;
}

export function HeroDetail({ data }: HeroDetailProps) {
  return (
    <section className="relative w-full bg-white">
      <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden rounded-b-[10px]">
        <Image
          src={data.backgroundImage}
          alt={data.title}
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="relative -mt-[200px] left-4 md:left-8 lg:left-[194px] z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-[811px] h-[295px] p-8 md:p-10 lg:p-12 rounded-[10px] flex flex-col justify-between"
          style={{ backgroundColor: '#032972' }}
        >
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {data.title}
            </h1>
            <p className="text-white text-base md:text-lg leading-relaxed">
              {data.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
