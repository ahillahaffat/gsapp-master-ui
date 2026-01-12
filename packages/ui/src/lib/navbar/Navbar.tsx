'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface AppNavbarProps {
  onMenuClick?: (menu: string) => void;
}

const menuItems = [
  'Beranda',
  'Layanan',
  'Berita dan Artikel',
  'Struktur Organisasi',
  'Legalitas',
  'Kolaborasi',
];

export default function AppNavbar({ onMenuClick }: AppNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY >= heroHeight);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (item: string) => {
    onMenuClick?.(item);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#032972] rounded-b-[10px] shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="flex flex-col items-center justify-center px-4 md:px-[148px] py-6 md:py-[24px] pb-[21px] gap-[10px] h-[101px] max-w-[1512px] mx-auto">
          <div className="flex flex-row items-center justify-between lg:justify-center lg:gap-[227px] w-full max-w-[1259px] h-[56px]">
            <div className="flex-none order-0 flex-grow-0">
              <a
                href="/"
                className="flex items-center"
                aria-label="Geometrika home"
              >
                <Image
                  src="/images/logo-white.png"
                  alt="Geometrika"
                  width={126}
                  height={56}
                  priority
                  className="object-contain"
                />
              </a>
            </div>

            <div className="hidden lg:flex flex-row items-center gap-[45px] flex-none order-1 flex-grow-0">
              {menuItems.map((item, index) => {
                const isBeranda = item === 'Beranda';
                return (
                  <a
                    key={item}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(item);
                    }}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    className={`text-[18px] leading-[22px] text-white font-light ${
                      isBeranda ? 'underline' : 'no-underline'
                    } hover:opacity-80 transition-opacity`}
                  >
                    {item}
                  </a>
                );
              })}
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
            <a href="/" className="flex items-center">
              <Image
                src="/images/logo-white.png"
                alt="Geometrika"
                width={126}
                height={56}
                className="object-contain"
              />
            </a>
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
              const isBeranda = item === 'Beranda';
              return (
                <a
                  key={item}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    handleMenuClick(item);
                  }}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  className={`w-full text-white text-xl font-light flex items-center py-5 border-b border-white/20 ${
                    isBeranda ? 'underline' : ''
                  }`}
                >
                  {item}
                </a>
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
