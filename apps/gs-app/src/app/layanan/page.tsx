'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import HeroIntroSection from './sections/heroIntro';
import GeomatikaSectionWrapper from './sections/geomatika';
import GeometrySectionWrapper from './sections/geometry';

export default function LayananPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="relative w-full bg-white overflow-hidden">
        <div className="relative w-full h-screen min-h-[600px]">
          <Image
            src="/images/hero.jpg"
            alt="Layanan"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>
      <HeroIntroSection />
      <GeomatikaSectionWrapper />
      <GeometrySectionWrapper />
    </>
  );
}
