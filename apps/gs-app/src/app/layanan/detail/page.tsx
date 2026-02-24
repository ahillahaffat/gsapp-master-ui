import React from 'react';
import { notFound } from 'next/navigation';
import { client } from '@/lib/sanity.client';
import { urlFor } from '@/lib/sanity.client';
import DynamicDetailRenderer from '@/app/components/layanan/dynamic-detail-renderer';

export const revalidate = 60;

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function getServiceDetail(type: string, idx: number) {
  try {
    let query = '';

    if (type === 'geomatika') {
      query = `*[_type == "layananGeomatikaSection"][0]`;
    } else if (type === 'geometry') {
      query = `*[_type == "layananGeometrySection"][0]`;
    } else {
      return null;
    }

    const res = await client.fetch(query);
    if (!res) return null;

    let feature;
    if (type === 'geomatika') {
      feature = res;
    } else {
      if (!res.features || !res.features[idx]) return null;
      feature = res.features[idx];
    }

    return {
      title: feature.title || 'Detail Layanan',
      image: feature.image ? urlFor(feature.image).url() : undefined,
      detail: feature.detail || [], // The PortableText block array
    };
  } catch (error) {
    console.error("Failed to fetch detail:", error);
    return null;
  }
}

export default async function LayananDetailPage({ searchParams }: PageProps) {
  // In Next.js 15, searchParams is a Promise
  const params = await searchParams;

  const type = typeof params.type === 'string' ? params.type : null;
  const idxStr = typeof params.idx === 'string' ? params.idx : '0';

  if (!type || isNaN(parseInt(idxStr))) {
    return notFound();
  }

  const idx = parseInt(idxStr);
  const data = await getServiceDetail(type, idx);

  if (!data) {
    return notFound();
  }

  return (
    <DynamicDetailRenderer
      title={data.title}
      image={data.image}
      detail={data.detail}
    />
  );
}
