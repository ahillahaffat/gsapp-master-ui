'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { client, urlFor } from '../../../lib/sanity.client';
import { servicesByCategoryQuery, Service } from '../../../lib/sanity.queries';

export interface GeometryService {
  id: string;
  title: string;
  image: string;
  slug?: string;
}

export interface GeometryData {
  title: string;
  services: GeometryService[];
  buttonText: string;
}

const fallbackData: GeometryData = {
  title: 'GEOMETRY',
  services: [
    { id: '1', title: 'Highway', image: '/images/geo1.jpg' },
    { id: '2', title: 'Structure', image: '/images/geo2.jpg' },
    { id: '3', title: 'Drainage', image: '/images/geo1.jpg' },
  ],
  buttonText: 'See Details',
};

function ServiceCard({ service, buttonText, index }: { service: GeometryService; buttonText: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg md:rounded-xl lg:rounded-[20px] overflow-hidden flex flex-col border border-gray-200"
      style={{ aspectRatio: '4/3' }}
    >
      <div className="relative w-full h-1/2">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover rounded-t-lg md:rounded-t-xl lg:rounded-t-[20px]"
        />
      </div>
      <div className="h-1/2 p-4 sm:p-5 md:p-6 flex flex-col justify-between">
        <h3
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-left"
          style={{ color: '#032972' }}
        >
          {service.title}
        </h3>
        <div>
          <Link
            href="/layanan/detail"
            className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white font-semibold text-sm sm:text-base transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#032972' }}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function GeometryLayanan() {
  const [data, setData] = useState<GeometryData>(fallbackData);

  useEffect(() => {
    async function fetchData() {
      try {
        const results: Service[] = await client.fetch(servicesByCategoryQuery, { category: 'geometry' });
        if (results && results.length > 0) {
          setData({
            ...fallbackData,
            services: results.map((s) => ({
              id: s._id,
              title: s.title,
              image: s.mainImage ? urlFor(s.mainImage).width(600).height(450).url() : '/images/geo1.jpg',
              slug: s.slug,
            })),
          });
        }
      } catch (error) {
        console.error('Error fetching geometry services:', error);
      }
    }
    fetchData();
  }, []);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
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
