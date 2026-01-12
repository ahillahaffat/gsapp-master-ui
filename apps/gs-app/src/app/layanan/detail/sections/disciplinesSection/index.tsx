'use client';

import React from 'react';
import { DisciplinesSection } from './components';
import { disciplinesSectionData } from './data';

export default function DisciplinesSectionWrapper() {
  return <DisciplinesSection data={disciplinesSectionData} />;
}
