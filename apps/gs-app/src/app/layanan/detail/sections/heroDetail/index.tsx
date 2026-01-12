'use client';

import React from 'react';
import { HeroDetail } from './components';
import { heroDetailData } from './data';

export default function HeroDetailSection() {
  return <HeroDetail data={heroDetailData} />;
}
