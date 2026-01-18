'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from './data';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative w-full">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center w-full gap-6 sm:gap-8 md:gap-0"
      >
        <div
          className={`w-full md:w-1/2 flex ${
            isEven ? 'justify-end md:pr-8 lg:pr-12 xl:pr-16' : 'justify-start md:pr-8 lg:pr-12 xl:pr-16'
          }`}
        >
          {isEven ? (
            <div className="w-full md:w-[500px] h-[200px] sm:h-[240px] md:h-[274px] rounded-lg md:rounded-[10px] overflow-hidden shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-full md:w-[500px] flex flex-col gap-3 sm:gap-4 text-left md:text-right">
              <ProjectTitle title={project.title} />
              <ProjectDescription description={project.description} />
            </div>
          )}
        </div>

        <div
          className={`w-full md:w-1/2 flex ${
            isEven ? 'justify-start md:pl-8 lg:pl-12 xl:pl-16' : 'justify-end md:pl-8 lg:pl-12 xl:pl-16'
          }`}
        >
          {isEven ? (
            <div className="w-full md:w-[500px] flex flex-col gap-3 sm:gap-4 text-left">
              <ProjectTitle title={project.title} />
              <ProjectDescription description={project.description} />
            </div>
          ) : (
            <div className="w-full md:w-[500px] h-[200px] sm:h-[240px] md:h-[274px] rounded-lg md:rounded-[10px] overflow-hidden shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

interface ProjectTitleProps {
  title: string;
}

function ProjectTitle({ title }: ProjectTitleProps) {
  return (
    <h3
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        fontSize: 'clamp(28px, 4vw, 48px)',
        color: '#032972',
      }}
    >
      {title}
    </h3>
  );
}

interface ProjectDescriptionProps {
  description: string;
}

function ProjectDescription({ description }: ProjectDescriptionProps) {
  return (
    <p
      style={{
        fontFamily: "'Nunito Sans', sans-serif",
        color: '#8CA2C0',
        lineHeight: '1.6',
      }}
    >
      {description}
    </p>
  );
}

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
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
        lineHeight: '47px',
        color: '#032972',
      }}
    >
      {title}
    </motion.h2>
  );
}

interface TimelineProps {
  projects: Project[];
}

export function Timeline({ projects }: TimelineProps) {
  return (
    <div className="relative mb-32">
      <div className="hidden md:block absolute left-1/2 top-0 bottom-[-80px] w-[3px] bg-[#032972] -translate-x-1/2" />

      <div className="space-y-16 md:space-y-24 relative">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

interface ShowcaseCardProps {
  image: string;
  text: string;
}

export function ShowcaseCard({ image, text }: ShowcaseCardProps) {
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
          <img
            src={image}
            alt="Project Showcase"
            className="absolute inset-0 w-full h-full object-cover"
          />
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
