'use client';

import React from 'react';
import { GeometrySection } from './components';
import { geometryData } from './data';

export default function GeometrySectionWrapper() {
  return <GeometrySection data={geometryData} />;
}
