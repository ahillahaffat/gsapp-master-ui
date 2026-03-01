'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { ProjectsSectionData } from '../types';

interface ProjectsSectionWrapperProps {
  data: ProjectsSectionData;
}

export default function ProjectsSectionWrapper({
  data,
}: ProjectsSectionWrapperProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -763, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 763, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden font-dm">
      <div className="w-full max-w-full mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-16 px-6"
        >
          <h2
            className="text-3xl md:text-5xl font-bold whitespace-pre-line leading-tight"
            style={{ color: '#032972' }}
          >
            {data.title}
          </h2>
        </motion.div>

        <div
          ref={scrollContainerRef}
          className="flex gap-[72px] overflow-x-auto pb-12 px-6 md:px-16 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {data.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex-shrink-0 bg-[#0460D9] rounded-[20px] snap-center flex flex-col overflow-hidden"
              style={{
                width: 'min(100%, 691px)',
                height: 'auto',
                minHeight: '871px',
              }}
            >
              <div className="w-full h-[300px] md:h-[477px] relative bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col px-6 md:px-[24px] mt-[40px] md:mt-[58px] pb-10">
                <h3 className="font-dm font-normal text-[36px] leading-[33px] text-white mb-8">
                  {project.title}
                </h3>
                <p
                  className="font-dm font-normal text-[16px] leading-[26px] text-justify text-white"
                  style={{ maxWidth: '647px' }}
                >
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-end gap-4 mt-8 px-6 md:px-16 max-w-[1400px] mx-auto">
          <button
            onClick={scrollPrev}
            className="px-8 py-3 rounded-full bg-[#032972] text-white font-dm text-sm hover:bg-blue-900 transition-colors"
          >
            &lt; Previous
          </button>
          <button
            onClick={scrollNext}
            className="px-8 py-3 rounded-full bg-[#032972] text-white font-dm text-sm hover:bg-blue-900 transition-colors"
          >
            Next &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
