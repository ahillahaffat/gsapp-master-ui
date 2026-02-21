'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

interface MeetTheTeamProps {
  members?: TeamMember[];
  title?: string;
  subtitle?: string;
}

const defaultMembers: TeamMember[] = [
  { id: 1, name: 'John Doe',   role: 'Chief Executive Officer',     image: '/images/parker.jpg' },
  { id: 2, name: 'John Doe',   role: 'Chief Technology Officer',    image: '/images/parker.jpg' },
  { id: 3, name: 'John Doe',   role: 'Head of Geospatial',          image: '/images/parker.jpg' },
  { id: 4, name: 'John Doe',   role: 'Lead Survey Engineer',        image: '/images/parker.jpg' },
  { id: 5, name: 'John Doe',   role: 'BIM Specialist',              image: '/images/parker.jpg' },
  { id: 6, name: 'John Doe',   role: 'Photogrammetry Expert',       image: '/images/parker.jpg' },
];

function GoldLine({ className = '' }: { className?: string }) {
  return (
    <div
      className={`bg-gradient-to-r from-transparent via-[#032972] to-transparent h-[1px] ${className}`}
    />
  );
}

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative flex flex-col"
    >
      {/* Index number */}
      <div
        className="absolute -top-3 left-0 z-10 font-mono text-[11px] tracking-[0.2em]"
        style={{ color: '#032972', fontFamily: "'Cormorant Garamond', serif" }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#032972] z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#032972] z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#032972] z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#032972] z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] via-[#0d1b3e]/10 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500 z-[1]" />

        <motion.div
          className="absolute inset-0 z-[2] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: 'linear-gradient(135deg, rgba(3,41,114,0.06) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="mt-4 px-1">
        <GoldLine className="mb-4 opacity-40" />

        <p
          className="text-[10px] tracking-[0.3em] uppercase mb-2"
          style={{ color: '#032972', fontFamily: "'Cormorant Garamond', serif" }}
        >
          {member.role}
        </p>

        <h3
          className="leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', urbanist",
            fontWeight: 600,
            fontSize: 'clamp(18px, 2vw, 24px)',
            color: '#0d1b3e',
            letterSpacing: '0.02em',
          }}
        >
          {member.name}
        </h3>
      </div>
    </motion.div>
  );
}

export default function MeetTheTeam({
  members = defaultMembers,
  title = 'Meet The People',
  subtitle = 'The minds behind every precise measurement, every accurate map, and every successful project.',
}: MeetTheTeamProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '128px',
        }}
      />
      <GoldLine />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28 lg:py-36">

        <div ref={headerRef} className="mb-20 sm:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.4em] uppercase mb-6"
            style={{ color: '#032972', fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our People
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: 'clamp(40px, 7vw, 96px)',
              lineHeight: '1.0',
              color: '#0d1b3e',
              letterSpacing: '-0.01em',
            }}
          >
            {title}
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="origin-left h-[1px] w-24 mb-8"
            style={{ backgroundColor: '#032972' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-md text-sm leading-relaxed"
            style={{
              color: '#6B7A99',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '16px',
              fontStyle: 'italic',
            }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 sm:gap-x-10 sm:gap-y-20">
          {members.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>

      <GoldLine />
    </section>
  );
}