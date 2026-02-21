'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    key: 'BIM',
    title: 'BIM - Technologies',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend magna vitae pharetra finibus. Integer hendrerit vehicula magna.',
    image: '/images/geo1.jpg',
  },
  { key: 'GEOMATIKA', title: 'Geomatika', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend magna vitae pharetra finibus. Integer hendrerit vehicula magna.', image: '/images/geo1.jpg' },
  { key: 'GEOMETRY', title: 'Geometry', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend magna vitae pharetra finibus. Integer hendrerit vehicula magna.', image: '/images/geo2.jpg' },
  { key: 'TRAINING', title: 'Training', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend magna vitae pharetra finibus. Integer hendrerit vehicula magna.', image: '/images/geo2.jpg' },
];

export default function ServiceSection() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <section className="w-full bg-[#264F9A] py-20 px-6 lg:px-20 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-14">
          Layanan Kami
        </h2>

        <div className="bg-[#1E63C6] rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-1/2 relative min-h-[320px]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
            <h3 className="text-3xl lg:text-4xl font-semibold mb-6">
              {service.title}
            </h3>

            <p className="text-white/90 leading-relaxed mb-8">
              {service.description}
            </p>

            <button className="bg-[#0D2E6D] px-6 py-3 rounded-full w-fit hover:opacity-90 transition">
              See Details
            </button>
          </div>
        </div>
        <div className="mt-14 bg-[#1E63C6] rounded-full p-2 flex justify-between">
          {services.map((item, index) => (
            <button
              key={item.key}
              onClick={() => setActive(index)}
              className={`flex-1 py-3 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 ${
                active === index
                  ? 'bg-[#0D2E6D]'
                  : 'bg-transparent hover:bg-white/10'
              }`}
            >
              {item.key}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}