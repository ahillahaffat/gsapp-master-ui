'use client';

import React from 'react';
import { GeomatikaSection } from './components';
import { geomatikaData } from './data';

export default function GeomatikaSectionWrapper() {
  return <GeomatikaSection data={geomatikaData} />;
}
