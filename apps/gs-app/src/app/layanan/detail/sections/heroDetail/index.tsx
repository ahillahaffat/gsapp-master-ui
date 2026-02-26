'use client';

import React from 'react';
import { HeroDetail } from './components';
import type { HeroDetailData } from '../../types';

interface HeroDetailSectionProps {
  data: HeroDetailData;
}

export default function HeroDetailSection({ data }: HeroDetailSectionProps) {
  return <HeroDetail data={data} />;
}
