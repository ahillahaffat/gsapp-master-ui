'use client';

import React from 'react';
import { HeroIntro } from './components';
import { heroIntroData } from './data';

export default function HeroIntroSection() {
  return <HeroIntro data={heroIntroData} />;
}
