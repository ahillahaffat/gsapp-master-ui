'use client';

import React from 'react';
import { ProjectsSection } from './components';
import type { ProjectsSectionData } from '../../types';

interface ProjectsSectionWrapperProps {
  data: ProjectsSectionData;
}

export default function ProjectsSectionWrapper({ data }: ProjectsSectionWrapperProps) {
  return <ProjectsSection data={data} />;
}
