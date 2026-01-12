'use client';

import React from 'react';
import { ProjectsSection } from './components';
import { projectsSectionData } from './data';

export default function ProjectsSectionWrapper() {
  return <ProjectsSection data={projectsSectionData} />;
}
