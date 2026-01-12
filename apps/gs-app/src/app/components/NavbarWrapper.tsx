'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Wrapper untuk Navbar yang memastikan App Router context tersedia
// Menggunakan dynamic import dengan ssr: false dan Suspense untuk memastikan
// hooks Next.js hanya dipanggil setelah App Router context tersedia
const AppNavbar = dynamic(() => import('@gs-app/ui').then((mod) => ({ default: mod.AppNavbar })), {
  ssr: false,
  loading: () => <div className="h-[101px] bg-transparent" />,
});

interface NavbarWrapperProps {
  onMenuClick?: (menu: string) => void;
}

export function NavbarWrapper({ onMenuClick }: NavbarWrapperProps) {
  return (
    <Suspense fallback={<div className="h-[101px] bg-transparent" />}>
      <AppNavbar onMenuClick={onMenuClick} />
    </Suspense>
  );
}
