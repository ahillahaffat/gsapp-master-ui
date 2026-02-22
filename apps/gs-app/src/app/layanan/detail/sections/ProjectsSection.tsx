'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
}

export interface ProjectsSectionData {
    title: string;
    projects: Project[];
}

export const projectsSectionData: ProjectsSectionData = {
    title: 'Beberapa Projek Kami\nDalam Sektor Geospastial',
    projects: [
        {
            id: 1,
            title: 'YOUR DESCRIBE',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend magna vitae pharetra finibus. Integer hendrerit vehicula magna, quis ultrices sapien efficitur vel. Curabitur ornare pellentesque dolor, ac sagittis enim. Vivamus eget leo vel nibh sollicitudin faucibus fringilla cursus nibh. Maecenas ut arcu congue, tempus quam in, tincidunt mauris. Ut ornare orci cursus tincidunt dignissim. Maecenas ullamcorper justo in porta mollis. Duis sit amet tincidunt sapien. Sed varius quam ligula, interdum scelerisque ipsum sodales id. Nam consectetur nisi ac finibus commodo. Nullam quis accumsan justo, sed iaculis tellus. Integer purus neque, porttitor ut nulla ac, semper malesuada tellus.',
            image: '/images/geo1.jpg',
        },
        {
            id: 2,
            title: 'YOUR DESCRIBE',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend magna vitae pharetra finibus. Integer hendrerit vehicula magna, quis ultrices sapien efficitur vel. Curabitur ornare pellentesque dolor, ac sagittis enim. Vivamus eget leo vel nibh sollicitudin faucibus fringilla cursus nibh. Maecenas ut arcu congue, tempus quam in, tincidunt mauris. Ut ornare orci cursus tincidunt dignissim. Maecenas ullamcorper justo in porta mollis. Duis sit amet tincidunt sapien. Sed varius quam ligula, interdum scelerisque ipsum sodales id. Nam consectetur nisi ac finibus commodo. Nullam quis accumsan justo, sed iaculis tellus. Integer purus neque, porttitor ut nulla ac, semper malesuada tellus.',
            image: '/images/geo2.jpg',
        },
        {
            id: 3,
            title: 'YOUR DESCRIBE',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend magna vitae pharetra finibus. Integer hendrerit vehicula magna, quis ultrices sapien efficitur vel. Curabitur ornare pellentesque dolor, ac sagittis enim. Vivamus eget leo vel nibh sollicitudin faucibus fringilla cursus nibh. Maecenas ut arcu congue, tempus quam in, tincidunt mauris. Ut ornare orci cursus tincidunt dignissim. Maecenas ullamcorper justo in porta mollis. Duis sit amet tincidunt sapien. Sed varius quam ligula, interdum scelerisque ipsum sodales id. Nam consectetur nisi ac finibus commodo. Nullam quis accumsan justo, sed iaculis tellus. Integer purus neque, porttitor ut nulla ac, semper malesuada tellus.',
            image: '/images/geo1.jpg',
        },
    ],
};

export default function ProjectsSection() {
    const data = projectsSectionData;
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
        <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden font-dm">
            <div className="max-w-[2217px] mx-auto px-4 sm:px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6"
                >
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold whitespace-pre-line leading-tight"
                        style={{ color: '#032972' }}
                    >
                        {data.title}
                    </h2>
                </motion.div>

                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-[72px] overflow-x-auto pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 md:px-16 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {data.projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative flex-shrink-0 bg-[#0460D9] rounded-lg md:rounded-xl lg:rounded-[20px] snap-center flex flex-col overflow-hidden w-[280px] sm:w-[350px] md:w-[500px] lg:w-[600px] xl:w-[691px] min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[871px]"
                            style={{ height: 'auto' }}
                        >
                            <div className="w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px] xl:h-[477px] relative bg-gray-200">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-col px-4 sm:px-5 md:px-6 lg:px-[24px] mt-6 sm:mt-8 md:mt-10 lg:mt-[40px] xl:mt-[58px] pb-6 sm:pb-8 md:pb-10">
                                <h3 className="font-dm font-normal text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-tight sm:leading-snug md:leading-[33px] text-white mb-4 sm:mb-6 md:mb-8">
                                    {project.title}
                                </h3>
                                <p
                                    className="font-dm font-normal text-sm sm:text-base md:text-[16px] leading-relaxed sm:leading-[22px] md:leading-[26px] text-justify text-white"
                                    style={{ maxWidth: '100%' }}
                                >
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-end gap-3 sm:gap-4 mt-6 sm:mt-8 px-4 sm:px-6 md:px-16 max-w-[1400px] mx-auto">
                    <button
                        onClick={scrollPrev}
                        className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full bg-[#032972] text-white font-dm text-xs sm:text-sm hover:bg-blue-900 transition-colors"
                    >
                        &lt; Previous
                    </button>
                    <button
                        onClick={scrollNext}
                        className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full bg-[#032972] text-white font-dm text-xs sm:text-sm hover:bg-blue-900 transition-colors"
                    >
                        Next &gt;
                    </button>
                </div>
            </div>
        </section>
    );
}
