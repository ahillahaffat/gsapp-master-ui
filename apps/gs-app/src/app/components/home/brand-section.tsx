'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Types
interface Brand {
  name: string;
  color: string;
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
  description: string;
  brands: Brand[];
  type: 'client' | 'partner';
}

interface BrandSectionProps {
  clientsList?: Brand[];
  partnersList?: Brand[];
}

// Data
const baseBrands: Brand[] = [
  { name: 'Uber', color: '#000000' },
  { name: 'Apple', color: '#000000' },
  { name: 'Meta', color: '#1877F3' },
  { name: 'Airbnb', color: '#FF5A5F' },
  { name: 'Google', color: '#4285F4' },
];

const defaultClientsList: Brand[] = [...baseBrands, baseBrands[0]];
const defaultPartnersList: Brand[] = [...baseBrands];

// Sub-components
function BrandLogo({ brand, index, type }: BrandLogoProps) {
  const containerStyle =
    type === 'client'
      ? { width: '140px', height: '100px' }
      : { width: '100px', height: '100px' };

  return (
    <div
      key={`${type}-${index}`}
      className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
      style={containerStyle}
    >
      <span
        className="font-bold text-2xl"
        style={{ color: brand.color }}
      >
        {brand.name}
      </span>
    </div>
  );
}

function BrandRow({ brands, type }: BrandRowProps) {
  const gap = type === 'client' ? '33px' : '79px';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full flex flex-wrap justify-center items-center"
      style={{ gap }}
    >
      {brands.map((brand, idx) => (
        <BrandLogo key={`${type}-${idx}`} brand={brand} index={idx} type={type} />
      ))}
    </motion.div>
  );
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-8 sm:mb-10 md:mb-12"
      style={{
        fontFamily: "'Nunito Sans', sans-serif",
        fontWeight: 900,
        fontSize: 'clamp(24px, 4vw, 40px)',
        lineHeight: '47px',
        textAlign: 'center',
        color: '#032972',
      }}
    >
      {title}
    </motion.h2>
  );
}

function SectionDescription({ text }: SectionDescriptionProps) {
  return (
    <p
      className="mx-auto"
      style={{
        fontFamily: "'Nunito Sans', sans-serif",
        fontWeight: 400,
        fontSize: 'clamp(14px, 2vw, 18px)',
        lineHeight: '28px',
        textAlign: 'center',
        color: '#032972',
        maxWidth: '955px',
      }}
    >
      {text}
    </p>
  );
}

function BrandSectionContent({
  title,
  description,
  brands,
  type,
}: BrandSectionContentProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-10 md:mb-12"
      >
        <SectionTitle title={title} />
        {description && <SectionDescription text={description} />}
      </motion.div>
      <BrandRow brands={brands} type={type} />
    </div>
  );
}

// Main Component
export default function BrandSection({
  clientsList = defaultClientsList,
  partnersList = defaultPartnersList,
}: BrandSectionProps) {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1337px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center gap-12 sm:gap-16 md:gap-20 lg:gap-[60px] xl:gap-[100px]">
        <BrandSectionContent
          title="Our Clients"
          description="Komitmen menjalin kemitraan strategis dengan berbagai pihak terpercaya demi menciptakan sinergi yang kuat dan berkelanjutan"
          brands={clientsList}
          type="client"
        />
        <BrandSectionContent
          title="Our Partners"
          description=""
          brands={partnersList}
          type="partner"
        />
      </div>
    </section>
  );
}