'use client';

import React from 'react';
import { HeroContent } from './hero/components';

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  overlayOpacity?: number;
  align?: 'left' | 'center' | 'right';
  height?: string;
}

export default function HeroSection({
  backgroundImage = '/images/hero.jpg',
  title = 'Geometrika Studio',
  subtitle = 'Bergabung Bersama Kami',
  tagline = 'Membangun Negeri',
  overlayOpacity = 0.1,
  align = 'left',
  height = '100vh',
}: HeroProps) {
  const alignment =
    align === 'center'
      ? 'items-center text-center'
      : align === 'right'
        ? 'items-end text-right'
        : 'items-start text-left';

  return (
    <main
      className={`relative flex ${alignment} justify-center bg-cover bg-center`}
      style={{ backgroundImage: `url(${backgroundImage})`, height }}
    >
      <div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />
      <HeroContent
        title={title}
        subtitle={subtitle}
        tagline={tagline}
        align={align}
      />
    </main>
  );
}
