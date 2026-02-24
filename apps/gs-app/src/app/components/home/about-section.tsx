'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export interface AboutSectionData {
  title?: string; // no longer heavily utilized, kept for type compat if needed
  description: string;
  image?: string;
}

const defaultAboutData: AboutSectionData = {
  description: 'Geometrika Studio merupakan perusahaan dibidang jasa konsultan independen konstruksi...',
};

export default function AboutSection({
  data = defaultAboutData,
}: { data?: AboutSectionData }) {
  return (
    <section className="w-full py-24 px-6 lg:px-12 font-[family-name:var(--font-montserrat)]">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0E2A66] mb-8 leading-tight">
            Profil Perusahaan
          </h1>

          <p className="text-base lg:text-lg leading-relaxed text-gray-800 mb-5 text-justify whitespace-pre-wrap">
            {data.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-center"
        >
          <Image
            src={data.image || "/images/geometrika.png"}
            alt="Profil Perusahaan"
            width={320}
            height={320}
            className="w-48 lg:w-64 h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}