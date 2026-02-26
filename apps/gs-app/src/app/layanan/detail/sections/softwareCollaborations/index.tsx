'use client';

import React from 'react';
import { SoftwareCollaborations } from './components';
import type { SoftwareCollaborationsData } from '../../types';

interface SoftwareCollaborationsSectionProps {
  data: SoftwareCollaborationsData;
}

export default function SoftwareCollaborationsSection({ data }: SoftwareCollaborationsSectionProps) {
  return <SoftwareCollaborations data={data} />;
}
