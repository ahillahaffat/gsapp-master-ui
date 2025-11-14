'use client';

import { useState, useEffect } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@heroui/react';
import Image from 'next/image';

const GeometrikaLogo = ({ isScrolled }: { isScrolled: boolean }) => (
  <Link
    href="/"
    className="flex items-center h-16"
    aria-label="Geometrika home"
  >
    <Image
      src={isScrolled ? '/images/logo-white.png' : '/images/logo.png'}
      alt="geometrika"
      width={126}
      height={56}
      priority
      className="object-contain"
    />
  </Link>
);

export default function AppNavbar({
  onMenuClick,
}: {
  onMenuClick?: (menu: string) => void;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menuItems = ['Solutions', 'Products', 'About Us', 'Contact'];

  return (
    <>
      <Navbar
        className={`fixed top-0 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--color-primary)] shadow-lg backdrop-blur-md'
            : 'bg-transparent'
        }`}
        maxWidth="xl"
        isBlurred={isScrolled}
      >
        <NavbarBrand>
          <GeometrikaLogo isScrolled={isScrolled} />
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className={`p-0 bg-transparent font-medium transition ${
                    isScrolled ? 'text-white' : 'text-gray-700'
                  }`}
                  variant="light"
                >
                  Solutions
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu aria-label="solutions" className="w-[340px] mt-4">
              <DropdownItem
                key="integration"
                description="Seamless integration across all platforms"
              >
                Integration Services
              </DropdownItem>
              <DropdownItem
                key="analytics"
                description="Real-time analytics and insights"
              >
                Analytics Dashboard
              </DropdownItem>
              <DropdownItem
                key="enterprise"
                description="Enterprise-grade solutions"
              >
                Enterprise Solutions
              </DropdownItem>
              <DropdownItem
                key="security"
                description="Top-tier security and compliance"
              >
                Security & Compliance
              </DropdownItem>
              <DropdownItem key="support" description="24/7 dedicated support">
                Premium Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          {['Products', 'About Us', 'Contact'].map((item) => (
            <NavbarItem key={item}>
              <Link
                className={`font-medium transition ${
                  isScrolled
                    ? 'text-white hover:text-gray-200'
                    : 'text-gray-700 hover:text-[#003366]'
                }`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onMenuClick?.(item);
                }}
              >
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent className="sm:hidden" justify="end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 transition ${
              isScrolled ? 'text-white' : 'text-gray-700'
            }`}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </NavbarContent>
      </Navbar>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
      className={`fixed inset-0 h-screen w-full bg-[var(--color-primary)] z-50
      transform transition-transform duration-300 ease-in-out sm:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      >
        <div className="flex flex-col h-full p-6">
        <div className="flex items-center justify-between mb-8">
          <GeometrikaLogo isScrolled={true} />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

          <nav className="flex flex-col gap-0 flex-1">
            {menuItems.map((item) => (
              <Link
                key={item}
                className="w-full text-white text-xl font-medium flex items-center justify-between py-5 border-b border-white/20"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  onMenuClick?.(item);
                }}
              >
                {item}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="white"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            ))}
          </nav>

          <footer className="mt-auto pt-8 text-white/70 text-sm">
            © {new Date().getFullYear()} Geometrika. All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
}
