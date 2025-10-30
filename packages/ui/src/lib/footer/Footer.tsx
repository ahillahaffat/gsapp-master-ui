"use client";

import Link from 'next/link';
import Image from 'next/image';

interface FooterLink {
  href: string;
  label: string;
}

interface AppFooterProps {
  aboutTitle?: string;
  aboutText?: string;
  ctaText?: string;
  ctaHref?: string;
  logoSrc?: string;
  logoAlt?: string;
  links?: FooterLink[];
  className?: string;
}

const defaultLinks: FooterLink[] = [
  { href: '/shipping', label: 'Shipping information' },
  { href: '/contact', label: 'Contact' },
  { href: '/careers', label: 'Careers' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/cookies', label: 'Cookies Settings' },
];

export const AppFooter = ({
  aboutTitle = 'ABOUT US',
  aboutText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
  ctaText = 'SHOP ALL PRODUCTS',
  ctaHref = '/products',
  logoSrc,
  logoAlt = 'Geometrika',
  links = defaultLinks,
  className = '',
}: AppFooterProps) => {
  return (
    // <footer className={`bg-[#032972] text-white rounded-t-[20px] py-16 px-6 ${className}`}>
      <footer className={`bg-[#032972] text-white py-16 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
        <h2 className="text-xl font-semibold uppercase tracking-wide">
          {aboutTitle}
        </h2>
        <p className="text-sm leading-relaxed opacity-90 max-w-xl">
          {aboutText}
        </p>
        <Link
          href={ctaHref}
          className="inline-block border-2 border-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-white hover:text-[#003366] transition-colors duration-300"
        >
          {ctaText}
        </Link>
        </div>

          <div className="flex justify-center lg:justify-end items-center">
            {logoSrc ? (
              <div className="relative w-64 h-32">
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  fill
                  className="object-contain object-right"
                  priority={false}
                />
              </div>
            ) : (
              <div className="text-right">
                  <h1 className="sr-only">Geometrika</h1>
                  <Image
                    src="/images/logo-white.png"
                    alt="Geometrika Logo"
                    width={250}
                    height={100}
                    className="inline-block"
                    priority
                  />
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm" aria-label="Footer navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:underline transition-all hover:opacity-80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
