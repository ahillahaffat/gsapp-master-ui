'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export interface HeroDetailData {
    title: string;
    description: string;
    backgroundImage: string;
}

export const heroDetailData: HeroDetailData = {
    title: 'Geospatial',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    backgroundImage: '/images/hero.jpg',
};

export default function HeroDetailSection() {
    const data = heroDetailData;

    return (
        <section className="relative w-full bg-white overflow-hidden">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
                <Image
                    src={data.backgroundImage}
                    alt={data.title}
                    fill
                    priority
                    className="object-cover"
                />
            </div>
            <div className="relative -mt-[120px] sm:-mt-[150px] md:-mt-[180px] lg:-mt-[200px] z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-[811px] min-h-[200px] sm:min-h-[240px] md:min-h-[270px] lg:min-h-[295px] p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg md:rounded-[10px] flex flex-col justify-between"
                    style={{ backgroundColor: '#032972' }}
                >
                    <div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
                            {data.title}
                        </h1>
                        <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                            {data.description}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
