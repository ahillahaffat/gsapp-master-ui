'use client';

import React from 'react';
import { DisciplinesSection } from './components';
import type { DisciplinesSectionData } from '../../types';

interface DisciplinesSectionWrapperProps {
  data: DisciplinesSectionData;
}

export default function DisciplinesSectionWrapper({ data }: DisciplinesSectionWrapperProps) {
  return <DisciplinesSection data={data} />;
}
