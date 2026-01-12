'use client';

import React, { useEffect } from 'react';
import HeroDetailSection from './sections/heroDetail';
import ProjectsSectionWrapper from './sections/projectsSection';
import DisciplinesSectionWrapper from './sections/disciplinesSection';
import SoftwareCollaborationsSection from './sections/softwareCollaborations';

export default function LayananDetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroDetailSection />
      <ProjectsSectionWrapper />
      <DisciplinesSectionWrapper />
      <SoftwareCollaborationsSection />
    </>
  );
}
