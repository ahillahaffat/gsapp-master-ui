'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

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
