'use client';

import React from 'react';
import { defaultProjects } from './recentProjectSection/data';
import {
  SectionTitle,
  Timeline,
  ShowcaseCard,
} from './recentProjectSection/components';

interface RecentProjectSectionProps {
  title?: string;
  projects?: typeof defaultProjects;
}

export default function RecentProjectSection({
  title = 'Recent Project',
  projects = defaultProjects,
}: RecentProjectSectionProps) {
  const showcaseText =
    'Geometrika Studio menghadirkan ekosistem layanan terpadu berbasis Building Information Modeling (BIM) untuk menghasilkan data dan informasi akurat, sehingga setiap desain, perencanaan, dan pengambilan keputusan sepanjang siklus pekerjaan dapat dilakukan secara lebih cepat, tepat, dan efisien.';

  return (
    <section className="relative w-full bg-white py-24 px-4 md:px-[87px] overflow-hidden">
      <div className="max-w-[1337px] mx-auto">
        <SectionTitle title={title} />
        <Timeline projects={projects} />
        <ShowcaseCard image="/images/hero.jpg" text={showcaseText} />
      </div>
    </section>
  );
}
