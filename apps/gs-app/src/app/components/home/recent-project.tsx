'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

interface SectionTitleProps {
  title: string;
}

interface TimelineProps {
  projects: ProjectItem[];
}

interface ShowcaseCardProps {
  image: string;
  text: string;
}

interface RecentProjectSectionProps {
  title?: string;
  showcaseText?: string;
  showcaseImage?: string;
  projects?: ProjectItem[];
}

const fallbackProjects: ProjectItem[] = [
  {
    id: '1',
    title: 'Geomatika', // Fallback menggunakan kategori layaknya di Sanity
    description:
      'Berfokus pada pengolahan data spasial, memastikan bahwa semua langkah perencanaan dan eksekusi proyek dimulai dengan informasi yang akurat dan terperinci.',
    image: '/images/geo2.jpg',
  },
  {
    id: '2',
    title: 'Geomatika',
    description:
      'Berfokus pada pengolahan data spasial, memastikan bahwa semua langkah perencanaan dan eksekusi proyek dimulai dengan informasi yang akurat dan terperinci.',
    image: '/images/geo1.jpg',
  },
  {
    id: '3',
    title: 'Geomatika',
    description:
      'Berfokus pada pengolahan data spasial, memastikan bahwa semua langkah perencanaan dan eksekusi proyek dimulai dengan informasi yang akurat dan terperinci.',
    image: '/images/geo2.jpg',
  },
];

function DesktopTimelineLine({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="hidden md:block absolute left-1/2 top-0 bottom-[-80px] -translate-x-1/2 w-[3px] bg-[#D1D9E6]">
      <motion.div
        className="absolute top-0 left-0 w-full bg-[#032972] origin-top"
        style={{ scaleY, height: '100%' }}
      />
    </div>
  );
}

function MobileTimelineLine({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="md:hidden absolute top-0 bottom-0 bg-[#D1D9E6]" style={{ left: '19px', width: '2px' }}>
      <motion.div
        className="absolute top-0 left-0 w-full bg-[#032972] origin-top"
        style={{ scaleY, height: '100%' }}
      />
    </div>
  );
}

function TimelineCircle({ isInView, size = 'md' }: { isInView: boolean; size?: 'sm' | 'md' }) {
  const outer = size === 'sm' ? 'w-[40px] h-[40px]' : 'w-[44px] h-[44px]';
  const inner = size === 'sm' ? 'w-[14px] h-[14px]' : 'w-[16px] h-[16px]';
  const pulse = size === 'sm' ? 'w-[56px] h-[56px]' : 'w-[60px] h-[60px]';

  return (
    <div className="relative flex items-center justify-center flex-shrink-0">
      <motion.div
        animate={{
          borderColor: isInView ? '#032972' : '#D1D9E6',
          scale: isInView ? 1.1 : 1,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={`${outer} rounded-full border-2 flex items-center justify-center bg-white z-10`}
      >
        <motion.div
          animate={{
            backgroundColor: isInView ? '#032972' : '#D1D9E6',
            scale: isInView ? 1 : 0.7,
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className={`${inner} rounded-full`}
        />
      </motion.div>

      {isInView && (
        <motion.div
          className={`absolute ${pulse} rounded-full border border-[#032972]`}
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
        />
      )}
    </div>
  );
}

function DesktopTimelineCircle({ isInView }: { isInView: boolean }) {
  return (
    <div
      className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10"
      style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
    >
      <TimelineCircle isInView={isInView} size="md" />
    </div>
  );
}

function MobileProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-20% 0px -20% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
      style={{ paddingLeft: '56px' }}
    >
      <div className="absolute top-0 z-10" style={{ left: '0px' }}>
        <TimelineCircle isInView={isInView} size="sm" />
      </div>

      <div className="pb-2">
        <div className="rounded-xl overflow-hidden shadow-sm mb-3 h-[180px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <motion.h3
          animate={{ color: isInView ? '#032972' : '#8CA2C0' }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(20px, 5vw, 26px)',
          }}
          className="mb-2"
        >
          {project.title}
        </motion.h3>
        <p
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            color: '#8CA2C0',
            lineHeight: '1.6',
            fontSize: '14px',
          }}
        >
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

function DesktopProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, margin: '-20% 0px -20% 0px' });

  return (
    <div ref={cardRef} className="relative w-full">
      <DesktopTimelineCircle isInView={isInView} />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex flex-row items-center w-full"
      >
        {/* Left half */}
        <div className={`w-1/2 flex ${isEven ? 'justify-end pr-12 lg:pr-16' : 'justify-start pr-12 lg:pr-16'}`}>
          {isEven ? (
            <motion.div
              animate={{ boxShadow: isInView ? '0 8px 40px 0 rgba(3,41,114,0.18)' : '0 2px 8px 0 rgba(0,0,0,0.08)' }}
              transition={{ duration: 0.5 }}
              className="w-[500px] h-[274px] rounded-[10px] overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </motion.div>
          ) : (
            <div className="w-[500px] flex flex-col gap-4 text-right">
              <motion.h3
                animate={{ color: isInView ? '#032972' : '#8CA2C0' }}
                transition={{ duration: 0.5 }}
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)' }}
              >
                {project.title}
              </motion.h3>
              <p style={{ fontFamily: "'Nunito Sans', sans-serif", color: '#8CA2C0', lineHeight: '1.6' }}>
                {project.description}
              </p>
            </div>
          )}
        </div>

        {/* Right half */}
        <div className={`w-1/2 flex ${isEven ? 'justify-start pl-12 lg:pl-16' : 'justify-end pl-12 lg:pl-16'}`}>
          {isEven ? (
            <div className="w-[500px] flex flex-col gap-4 text-left">
              <motion.h3
                animate={{ color: isInView ? '#032972' : '#8CA2C0' }}
                transition={{ duration: 0.5 }}
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)' }}
              >
                {project.title}
              </motion.h3>
              <p style={{ fontFamily: "'Nunito Sans', sans-serif", color: '#8CA2C0', lineHeight: '1.6' }}>
                {project.description}
              </p>
            </div>
          ) : (
            <motion.div
              animate={{ boxShadow: isInView ? '0 8px 40px 0 rgba(3,41,114,0.18)' : '0 2px 8px 0 rgba(0,0,0,0.08)' }}
              transition={{ duration: 0.5 }}
              className="w-[500px] h-[274px] rounded-[10px] overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="text-center mb-16 md:mb-24"
      style={{
        fontFamily: "'Nunito Sans', sans-serif",
        fontWeight: 800,
        fontSize: 'clamp(32px, 5vw, 64px)',
        lineHeight: '1.2',
        color: '#032972',
      }}
    >
      {title}
    </motion.h2>
  );
}

function Timeline({ projects }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null!);

  return (
    <div ref={containerRef} className="relative mb-32">
      <DesktopTimelineLine containerRef={containerRef} />
      <MobileTimelineLine containerRef={containerRef} />
      <div className="md:hidden flex flex-col gap-10">
        {projects.map((project, index) => (
          <MobileProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      <div className="hidden md:flex flex-col space-y-24 relative">
        {projects.map((project, index) => (
          <DesktopProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

function ShowcaseCard({ image, text }: ShowcaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 mb-16 sm:mb-20 md:mb-32 lg:mb-48"
    >
      <div className="relative w-full mx-auto">
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden rounded-lg md:rounded-xl lg:rounded-[20px] z-0">
          <img src={image} alt="Project Showcase" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-2 sm:right-4 md:right-8 lg:right-12 translate-y-1/2 z-10 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[600px] lg:max-w-[707px]">
          <div className="bg-[#032972] shadow-2xl rounded-lg md:rounded-[10px] p-4 sm:p-6 md:p-8 lg:py-[35px] lg:px-[70px]">
            <p
              className="text-white text-justify"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: 'clamp(14px, 2vw, 18px)',
                lineHeight: 'clamp(20px, 2.5vw, 25px)',
              }}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function RecentProjectSection({
  title = 'Recent Project',
  showcaseText,
  showcaseImage,
  projects = [],
}: RecentProjectSectionProps) {
  const displayProjects: ProjectItem[] = projects.length > 0 ? projects : fallbackProjects;

  const displayShowcaseText = showcaseText ||
    'Geometrika Studio menghadirkan ekosistem layanan terpadu berbasis Building Information Modeling (BIM) untuk menghasilkan data dan informasi akurat, sehingga setiap desain, perencanaan, dan pengambilan keputusan sepanjang siklus pekerjaan dapat dilakukan secara lebih cepat, tepat, dan efisien.';

  const displayShowcaseImage = showcaseImage || '/images/hero.jpg';

  return (
    <section className="relative w-full bg-white py-24 px-4 md:px-[87px] overflow-hidden">
      <div className="max-w-[1337px] mx-auto">
        <SectionTitle title={title} />
        <Timeline projects={displayProjects} />
        <ShowcaseCard image={displayShowcaseImage} text={displayShowcaseText} />
      </div>
    </section>
  );
}