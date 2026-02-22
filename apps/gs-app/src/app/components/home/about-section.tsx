'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface AboutSectionProps {
  companyName?: string;
}

export default function AboutSection({
  companyName = 'Geometrika Studio',
}: AboutSectionProps) {
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

          <p className="text-base lg:text-lg leading-relaxed text-gray-800 mb-5 text-justify">
            <span className="font-bold text-[#0E2A66]">
              {companyName}
            </span>{' '}
            merupakan perusahaan dibidang jasa konsultan independen konstruksi
            sekaligus mitra strategis dalam proyek infrastruktur yang berdiri
            tanggal 28 Oktober 2024 dengan nama resmi{' '}
            <span className="font-bold text-[#0E2A66]">
              CV. Graha Sinergi Adiwidia
            </span>.
          </p>

          <p className="text-base lg:text-lg leading-relaxed text-gray-800 text-justify">
            Kami Berfokus Pada Pengembangan Solusi Konstruksi Berbasis
            Teknologi yang Terintegrasi, dengan memberikan layanan yang
            didasarkan pada 2 Bidang Utama,{' '}
            <span className="font-bold text-[#1E5CC8]">Geometry</span> dan{' '}
            <span className="font-bold text-[#0E2A66]">Geomatika</span>.
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
            src="/images/geometrika.png"
            alt="Geometrika Logo"
            width={220}
            height={220}
            className="w-40 lg:w-52 h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}