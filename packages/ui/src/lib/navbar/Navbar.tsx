'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AppNavbarProps {
  onMenuClick?: (menu: string) => void;
}

const menuItems = [
  { label: 'Beranda', path: '/' },
  { label: 'Layanan', path: '/layanan' },
  { label: 'Berita dan Artikel', path: '#' },
  { label: 'Struktur Organisasi', path: '/struktur-organisasi' },
  { label: 'Legalitas', path: '#' },
  { label: 'Kolaborasi', path: '#' },
];

export default function AppNavbar({ onMenuClick }: AppNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pathname, setPathname] = useState<string>('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let currentPathname = window.location.pathname;
    setPathname(currentPathname);
    
    const updatePathname = () => {
      const newPathname = window.location.pathname;
      if (newPathname !== currentPathname) {
        currentPathname = newPathname;
        setPathname(newPathname);
      }
    };
    
    window.addEventListener('popstate', updatePathname);
    
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href]') as HTMLAnchorElement;
      if (link && link.href && !link.href.startsWith('#')) {
        setTimeout(updatePathname, 100);
      }
    };
    
    document.addEventListener('click', handleClick);
    
    const intervalId = setInterval(updatePathname, 500);
    
    return () => {
      window.removeEventListener('popstate', updatePathname);
      document.removeEventListener('click', handleClick);
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setIsScrolled(false);

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const heroHeight = window.innerHeight * 0.8;
      setIsScrolled(scrollY > heroHeight);
    };

    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const handleMenuClick = (item: { label: string; path: string }) => {
    if (item.path === '#') {
      onMenuClick?.(item.label);
    }
    // Navigation is handled by Link components, no need for router.push
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
            : 'bg-transparent'
        }`}
      >
        <div className="flex flex-col items-center justify-center px-4 md:px-[148px] py-6 md:py-[24px] pb-[21px] gap-[10px] h-[101px] max-w-[1512px] mx-auto">
          <div className="flex flex-row items-center justify-between lg:justify-center lg:gap-[227px] w-full max-w-[1259px] h-[56px]">
            <div className="flex-none order-0 flex-grow-0">
              <Link
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
              </Link>
            </div>

            <div className="hidden lg:flex flex-row items-center gap-[45px] flex-none order-1 flex-grow-0">
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
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      className={`text-[18px] leading-[22px] text-white font-light ${
                        isActive ? 'underline font-semibold' : 'no-underline'
                      } hover:opacity-80 transition-opacity`}
                    >
                      {item.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    href={item.path}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    className={`text-[18px] leading-[22px] text-white font-light ${
                      isActive ? 'underline font-semibold' : 'no-underline'
                    } hover:opacity-80 transition-opacity`}
                  >
                    {item.label}
                  </Link>
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
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    className={`w-full text-white text-xl font-light flex items-center py-5 border-b border-white/20 ${
                      isActive ? 'underline font-semibold' : ''
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
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  className={`w-full text-white text-xl font-light flex items-center py-5 border-b border-white/20 ${
                    isActive ? 'underline font-semibold' : ''
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
