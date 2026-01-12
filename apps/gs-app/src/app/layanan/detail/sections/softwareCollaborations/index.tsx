'use client';

import React from 'react';
import { SoftwareCollaborations } from './components';
import { softwareCollaborationsData } from './data';

export default function SoftwareCollaborationsSection() {
  return <SoftwareCollaborations data={softwareCollaborationsData} />;
}
