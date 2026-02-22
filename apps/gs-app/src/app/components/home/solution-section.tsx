'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '../../../lib/sanity.client';

interface ServiceItem {
  key: string;
  title: string;
  description: string;
  image: string;
}

interface SolutionSectionProps {
  services?: {
    _id: string;
    title: string;
    slug: string;
    category: string;
    mainImage?: { asset: { _ref: string }; alt?: string };
    shortDescription?: string;
  }[];
}

// Fallback data jika CMS kosong
const fallbackServices: ServiceItem[] = [
  { key: 'BIM', title: 'BIM - Technologies', description: 'Layanan Building Information Modeling untuk proyek konstruksi modern.', image: '/images/geo1.jpg' },
  { key: 'GEOMATIKA', title: 'Geomatika', description: 'Layanan geospasial dan pemetaan berbasis teknologi terkini.', image: '/images/geo1.jpg' },
  { key: 'GEOMETRY', title: 'Geometry', description: 'Layanan desain struktur dan perencanaan geometri konstruksi.', image: '/images/geo2.jpg' },
];

export default function ServiceSection({ services = [] }: SolutionSectionProps) {
  // Map CMS services to display format, or use fallback
  const displayServices: ServiceItem[] = services.length > 0
    ? services.map((s) => ({
      key: s.category?.toUpperCase() || s.title.toUpperCase(),
      title: s.title,
      description: s.shortDescription || '',
      image: s.mainImage ? urlFor(s.mainImage).width(800).height(600).url() : '/images/geo1.jpg',
    }))
    : fallbackServices;

  const [active, setActive] = useState(0);
  const service = displayServices[active];

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
          {displayServices.map((item, index) => (
            <button
              key={item.key}
              onClick={() => setActive(index)}
              className={`flex-1 py-3 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 ${active === index
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