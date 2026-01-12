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
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
        <div className="w-[30px] h-[30px] bg-white border-[3px] border-[#032972] rounded-full flex items-center justify-center">
          <div className="w-[8px] h-[8px] bg-[#032972] rounded-full" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center w-full gap-8 md:gap-0"
      >
        <div
          className={`w-full md:w-1/2 flex ${
            isEven ? 'justify-end md:pr-16' : 'justify-start md:pr-16'
          }`}
        >
          {isEven ? (
            <div className="w-full md:w-[500px] h-[274px] rounded-[10px] overflow-hidden shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-full md:w-[500px] flex flex-col gap-4 text-left md:text-right">
              <ProjectTitle title={project.title} />
              <ProjectDescription description={project.description} />
            </div>
          )}
        </div>

        <div
          className={`w-full md:w-1/2 flex ${
            isEven ? 'justify-start md:pl-16' : 'justify-end md:pl-16'
          }`}
        >
          {isEven ? (
            <div className="w-full md:w-[500px] flex flex-col gap-4 text-left">
              <ProjectTitle title={project.title} />
              <ProjectDescription description={project.description} />
            </div>
          ) : (
            <div className="w-full md:w-[500px] h-[274px] rounded-[10px] overflow-hidden shadow-md">
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
      <div className="hidden md:block absolute left-1/2 top-0 bottom-[-80px] w-[3px] bg-[#032972] -translate-x-1/2">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[30px] h-[30px] bg-white border-[3px] border-[#032972] rounded-full flex items-center justify-center z-10">
          <div className="w-[8px] h-[8px] bg-[#032972] rounded-full" />
        </div>
      </div>

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
      className="mt-32 mb-32 md:mb-48"
    >
      <div className="relative w-full mx-auto">
        <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-[20px] z-0">
          <img
            src={image}
            alt="Project Showcase"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-4 md:right-12 translate-y-1/2 z-10 w-full max-w-[95%] md:max-w-[707px]">
          <div className="bg-[#032972] shadow-2xl rounded-[10px] p-8 md:py-[35px] md:px-[70px]">
            <p
              className="text-white text-justify"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: '18px',
                lineHeight: '25px',
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
