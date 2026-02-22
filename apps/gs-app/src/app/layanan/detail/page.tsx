'use client';

import React, { useEffect } from 'react';
import HeroDetailSection from './sections/HeroDetailSection';
import ProjectsSection from './sections/ProjectsSection';
import DisciplinesSection from './sections/DisciplinesSection';
import SoftwareCollaborationsSection from './sections/SoftwareCollaborationsSection';

export default function LayananDetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroDetailSection />
      <ProjectsSection />
      <DisciplinesSection />
      <SoftwareCollaborationsSection />
    </>
  );
}
