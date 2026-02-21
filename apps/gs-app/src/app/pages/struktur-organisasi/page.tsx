'use client';

import React, { useEffect } from 'react';
import BoardOfDirectionsSection from './sections/boardOfDirections';
import VisiMisiSection from './sections/visiMisi';

export default function StrukturOrganisasiPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BoardOfDirectionsSection />
      <VisiMisiSection />
    </>
  );
}
