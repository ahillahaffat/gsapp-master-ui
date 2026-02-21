'use client';

import React, { useEffect } from 'react';
import HeroLayanan from '@/app/components/layanan/hero-layanan';
import GeomatikaLayanan from '@/app/components/layanan/geomatika-layanan';
import GeometryLayanan from '@/app/components/layanan/geometry-layanan';

export default function LayananPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroLayanan />
      <GeomatikaLayanan />
      <GeometryLayanan />
    </>
  );
}