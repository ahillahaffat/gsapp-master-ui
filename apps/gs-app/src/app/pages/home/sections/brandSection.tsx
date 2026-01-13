'use client';

import React from 'react';
import { clientsList, partnersList } from './brandSection/data';
import { BrandSectionContent } from './brandSection/components';

export default function BrandSection() {
  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      <div className="max-w-[1337px] mx-auto px-4 md:px-8 flex flex-col items-center gap-[60px] md:gap-[100px]">
        <BrandSectionContent
          title="Our Clients"
          description="Komitmen menjalin kemitraan strategis dengan berbagai pihak terpercaya demi menciptakan sinergi yang kuat dan berkelanjutan"
          brands={clientsList}
          type="client"
        />
        <BrandSectionContent
          title="Our Partners"
          description=""
          brands={partnersList}
          type="partner"
        />
      </div>
    </section>
  );
}
