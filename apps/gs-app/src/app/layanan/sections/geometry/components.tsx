'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { GeometryData, GeometryService } from './data';

interface ServiceCardProps {
  service: GeometryService;
  buttonText: string;
  index: number;
}

function ServiceCard({ service, buttonText, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-[20px] overflow-hidden flex flex-col border border-gray-200"
      style={{ aspectRatio: '4/3' }}
    >
      <div className="relative w-full h-1/2">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover rounded-t-[20px]"
        />
      </div>
      <div className="h-1/2 p-6 flex flex-col justify-between">
        <h3
          className="text-2xl md:text-3xl font-bold mb-4 text-left"
          style={{ color: '#032972' }}
        >
          {service.title}
        </h3>
        <div>
          <Link
            href="/layanan/detail"
            className="inline-block px-6 py-3 rounded-full text-white font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#032972' }}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

interface GeometrySectionProps {
  data: GeometryData;
}

export function GeometrySection({ data }: GeometrySectionProps) {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              buttonText={data.buttonText}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
