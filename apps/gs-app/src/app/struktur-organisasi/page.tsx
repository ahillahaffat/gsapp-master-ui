'use client';

import React, { useEffect } from 'react';
import BoardDirections from '../components/struktur-organisasi/board-directions';

export default function StrukturOrganisasiPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BoardDirections />
    </>
  );
}