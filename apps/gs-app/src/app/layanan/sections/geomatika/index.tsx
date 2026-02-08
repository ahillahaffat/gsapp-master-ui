'use client';

import React, { useEffect, useState } from 'react';
import { GeomatikaSection } from './components';
import { geomatikaData, GeomatikaData } from './data';
import { client, urlFor } from '../../../../lib/sanity.client';
import { serviceByCategoryQuery, Service } from '../../../../lib/sanity.queries';

export default function GeomatikaSectionWrapper() {
  const [data, setData] = useState<GeomatikaData>(geomatikaData);

  useEffect(() => {
    async function fetchData() {
      try {
        const result: Service = await client.fetch(serviceByCategoryQuery, { category: 'geomatika' });
        if (result) {
          setData({
            ...geomatikaData,
            serviceTitle: result.title,
            description: result.shortDescription || geomatikaData.description,
            image: result.mainImage ? urlFor(result.mainImage).url() : geomatikaData.image,
          });
        }
      } catch (error) {
        console.error('Error fetching CMS data:', error);
      }
    }
    fetchData();
  }, []);

  return <GeomatikaSection data={data} />;
}
