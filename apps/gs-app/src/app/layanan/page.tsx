import React from 'react';
import HeroLayanan from '@/app/components/layanan/hero-layanan';
import GeomatikaLayanan from '@/app/components/layanan/geomatika-layanan';
import GeometryLayanan from '@/app/components/layanan/geometry-layanan';
import { client } from '@/lib/sanity.client';
import { urlFor } from '@/lib/sanity.client';

export const revalidate = 60; // revalidate every 60 seconds

async function getLayananData() {
  try {
    const heroQuery = `*[_type == "layananHeroSection"][0]`;
    const geomatikaQuery = `*[_type == "layananGeomatikaSection"][0]`;
    const geometryQuery = `*[_type == "layananGeometrySection"][0]`;

    const [heroData, geomatikaData, geometryData] = await Promise.all([
      client.fetch(heroQuery),
      client.fetch(geomatikaQuery),
      client.fetch(geometryQuery),
    ]);

    return {
      hero: heroData ? {
        titleLine1: heroData.titleLine1 || 'Technical Disciplines',
        titleLine2: heroData.titleLine2 || '& Workflow',
        description: heroData.description || '',
        backgroundImage: heroData.backgroundImage ? urlFor(heroData.backgroundImage).url() : '/images/hero.jpg',
      } : undefined,

      geomatika: geomatikaData ? {
        title: geomatikaData.title || 'GEOMATIKA',
        description: geomatikaData.description || '',
        image: geomatikaData.image ? urlFor(geomatikaData.image).url() : '/images/geo2.jpg',
      } : undefined,

      geometry: geometryData ? {
        title: geometryData.title || 'GEOMETRY',
        description: geometryData.description || '',
        services: geometryData.features ? geometryData.features.map((f: any, i: number) => ({
          id: String(i),
          title: f.title || '',
          image: f.image ? urlFor(f.image).url() : '/images/geo1.jpg',
        })) : [],
      } : undefined,
    };
  } catch (error) {
    console.error("Failed to fetch Layanan data:", error);
    return { hero: undefined, geomatika: undefined, geometry: undefined };
  }
}

export default async function LayananPage() {
  const dynamicData = await getLayananData();

  return (
    <>
      <HeroLayanan data={dynamicData.hero} />
      <GeomatikaLayanan data={dynamicData.geomatika} />
      {/* Jika layanan geometry features kosong di CMS, kita jangan kirim undefined agar default fallback menyala semua. */}
      {dynamicData.geometry && dynamicData.geometry.services && dynamicData.geometry.services.length > 0 ? (
        <GeometryLayanan data={dynamicData.geometry} />
      ) : (
        <GeometryLayanan />
      )}
    </>
  );
}