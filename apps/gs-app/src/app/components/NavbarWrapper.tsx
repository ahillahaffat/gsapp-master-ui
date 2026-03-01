'use client';

import { AppNavbar } from "@gs-app/ui";

interface NavbarWrapperProps {
  onMenuClick?: (menu: string) => void;
}

export function NavbarWrapper({ onMenuClick }: NavbarWrapperProps) {
  return <AppNavbar onMenuClick={onMenuClick} />;
}
