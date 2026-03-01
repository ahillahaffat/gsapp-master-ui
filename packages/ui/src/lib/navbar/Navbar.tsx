'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AppNavbarProps {
  onMenuClick?: (menu: string) => void;
}

const menuItems = [
  { label: 'Beranda', path: '/' },
  { label: 'Layanan', path: '/layanan' },
  { label: 'Struktur Organisasi', path: '/struktur-organisasi' },
  { label: 'Kolaborasi', path: '/kolaborasi' },
];

export default function AppNavbar({ onMenuClick }: AppNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const heroHeight = window.innerHeight * 0.8;
      setIsScrolled(scrollY > heroHeight);
    };

    // Langsung hitung posisi scroll tanpa reset & tanpa delay
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const handleMenuClick = (item: { label: string; path: string }) => {
    if (item.path === '#') {
      onMenuClick?.(item.label);
    }
  };

  const isActiveRoute = (path: string) => {
    if (path === '/') {
      return pathname === '/' || pathname === '';
    }
    return pathname === path;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#032972] rounded-b-[10px] shadow-lg'
            : 'bg-[#032972]'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32 py-4 max-w-[1920px] mx-auto">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" aria-label="Geometrika home">
              <Image
                src="/images/logo-white.png"
                alt="Geometrika"
                width={180}
                height={60}
                priority
                className="object-contain h-12 w-auto"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-2 xl:gap-4 bg-[#0460D9] rounded-full px-3 py-2">
            {menuItems.map((item) => {
              const isActive = isActiveRoute(item.path);
              if (item.path === '#') {
                return (
                  <a
                    key={item.label}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(item);
                    }}
                    className={`px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? 'bg-white text-[#032972] shadow-md'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-[#032972] shadow-md'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/images/id.svg"
                alt="Indonesia"
                width={24}
                height={24}
                className="object-cover"
              />
            </div>
            <span className="text-white font-medium">ID</span>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white ml-auto"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-white transition-all ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`fixed inset-0 h-screen w-full bg-[#032972] z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-white.png"
                alt="Geometrika"
                width={126}
                height={56}
                className="object-contain"
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white"
              aria-label="Close menu"
            >
              <div className="w-6 h-6 relative">
                <span className="block absolute top-1/2 left-0 w-6 h-0.5 bg-white rotate-45" />
                <span className="block absolute top-1/2 left-0 w-6 h-0.5 bg-white -rotate-45" />
              </div>
            </button>
          </div>

          <nav className="flex flex-col gap-0 flex-1">
            {menuItems.map((item) => {
              const isActive = isActiveRoute(item.path);
              if (item.path === '#') {
                return (
                  <a
                    key={item.label}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      handleMenuClick(item);
                    }}
                    className={`w-full text-white text-xl font-medium flex items-center py-5 border-b border-white/20 ${
                      isActive ? 'bg-white/10' : ''
                    }`}
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full text-white text-xl font-medium flex items-center py-5 border-b border-white/20 ${
                    isActive ? 'bg-white/10' : ''
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <footer className="mt-auto pt-8 text-white/70 text-sm">
            © {new Date().getFullYear()} Geometrika. All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
}
