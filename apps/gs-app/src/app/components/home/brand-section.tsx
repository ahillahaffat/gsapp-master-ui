'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Brand {
  image: string;
  name?: string;
}

interface BrandLogoProps {
  brand: Brand;
  index: number;
  type: 'client' | 'partner';
}

interface BrandRowProps {
  brands: Brand[];
  type: 'client' | 'partner';
}

interface SectionTitleProps {
  title: string;
}

interface SectionDescriptionProps {
  text: string;
}

interface BrandSectionContentProps {
  title: string;
  description?: string;
  brands: Brand[];
  type: 'client' | 'partner';
}

// interfaces removed

const defaultClientsList: Brand[] = [
  { image: '/images/1.png', name: 'Client 1' },
  { image: '/images/2.png', name: 'Client 2' },
  { image: '/images/3.jpeg', name: 'Client 3' },
  { image: '/images/4.png', name: 'Client 4' },
  { image: '/images/5.png', name: 'Client 5' },
  { image: '/images/6.jpg', name: 'Client 6' },
];

const defaultPartnersList: Brand[] = [
  { image: '/images/7.png', name: 'Partner 1' },
  { image: '/images/8.png', name: 'Partner 2' },
  { image: '/images/9.png', name: 'Partner 3' },
  { image: '/images/10.png', name: 'Partner 4' },
  { image: '/images/11.png', name: 'Partner 5' },
];


function BrandLogo({ brand, index, type }: BrandLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      className={`
        flex items-center justify-center flex-shrink-0
        transition-all duration-300 hover:scale-105
        ${type === 'client'
          ? 'w-[150px] h-[100px] md:w-[180px] md:h-[120px]'
          : 'w-[100px] h-[100px] md:w-[120px] md:h-[120px]'}
      `}
    >
      <Image
        src={brand.image}
        alt={brand.name ?? `brand-logo-${index}`}
        width={180}
        height={120}
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}

function BrandRow({ brands, type }: BrandRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className={`
        w-full flex flex-wrap justify-center items-center
        ${type === 'client'
          ? 'gap-x-10 gap-y-8 md:gap-x-12 md:gap-y-10'
          : 'gap-x-14 gap-y-8 md:gap-x-20 md:gap-y-10'}
      `}
    >
      {brands.map((brand, idx) => (
        <BrandLogo key={`${type}-${idx}`} brand={brand} index={idx} type={type} />
      ))}
    </motion.div>
  );
}


function MobileMarquee({ brands, type }: BrandRowProps) {
  const doubled = [...brands, ...brands];
  const duration = type === 'client' ? 18 : 14;

  return (
    <div className="w-full overflow-hidden relative">
      {/* Fade left edge */}
      <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      {/* Fade right edge */}
      <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((brand, idx) => (
          <div
            key={`marquee-${type}-${idx}`}
            className={`
              flex-shrink-0 flex items-center justify-center mx-5
              ${type === 'client' ? 'w-[120px] h-[80px]' : 'w-[80px] h-[80px]'}
            `}
          >
            <Image
              src={brand.image}
              alt={brand.name ?? `brand-logo-${idx}`}
              width={120}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center font-black text-[#032972] leading-tight mb-4"
      style={{
        fontFamily: "'Nunito Sans', sans-serif",
        fontSize: 'clamp(22px, 4vw, 40px)',
      }}
    >
      {title}
    </motion.h2>
  );
}

function SectionDescription({ text }: SectionDescriptionProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="text-center text-[#032972] mx-auto max-w-[760px]"
      style={{
        fontFamily: "'Nunito Sans', sans-serif",
        fontSize: 'clamp(13px, 2vw, 16px)',
        lineHeight: '1.75',
      }}
    >
      {text}
    </motion.p>
  );
}

function BrandSectionContent({ title, description, brands, type }: BrandSectionContentProps) {
  return (
    <div className="flex flex-col items-center w-full gap-8 sm:gap-10">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 w-full px-4">
        <SectionTitle title={title} />
        {description && <SectionDescription text={description} />}
      </div>

      {/* Mobile: Marquee | Desktop: Grid */}
      <div className="w-full">
        <div className="block md:hidden">
          <MobileMarquee brands={brands} type={type} />
        </div>
        <div className="hidden md:block">
          <BrandRow brands={brands} type={type} />
        </div>
      </div>
    </div>
  );
}

export interface BrandSectionData {
  clientsTitle: string;
  clientsDescription: string;
  clientsList: Brand[];
  partnersTitle: string;
  partnersDescription: string;
  partnersList: Brand[];
}

const defaultBrandData: BrandSectionData = {
  clientsTitle: "Our Clients",
  clientsDescription: "Komitmen menjalin kemitraan strategis dengan berbagai pihak terpercaya demi menciptakan sinergi yang kuat dan berkelanjutan",
  clientsList: defaultClientsList,
  partnersTitle: "Our Partners",
  partnersDescription: "",
  partnersList: defaultPartnersList,
};

export default function BrandSection({
  data = defaultBrandData,
}: { data?: BrandSectionData }) {
  const clients = data.clientsList?.length > 0 ? data.clientsList : defaultClientsList;
  const partners = data.partnersList?.length > 0 ? data.partnersList : defaultPartnersList;

  return (
    <section className="relative w-full bg-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-10 sm:gap-12 md:gap-14">
        <BrandSectionContent
          title={"Our Clients"}
          description={data.clientsDescription || "Komitmen menjalin kemitraan strategis dengan berbagai pihak terpercaya demi menciptakan sinergi yang kuat dan berkelanjutan"}
          brands={clients}
          type="client"
        />
        <BrandSectionContent
          title={"Our Partners"}
          description={data.partnersDescription}
          brands={partners}
          type="partner"
        />
      </div>
    </section>
  );
}