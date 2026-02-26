'use client';

import React from 'react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TypedObject {
    _type: string;
    [key: string]: unknown;
}

interface DynamicDetailProps {
    title: string;
    image?: string;
    detail?: TypedObject[];
}

export default function DynamicDetailRenderer({ title, image, detail }: DynamicDetailProps) {
    return (
        <article className="min-h-screen bg-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#032972] mb-8 leading-tight">
                        {title}
                    </h1>

                    {image && (
                        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-12">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                </motion.div>

                {/* Content Body */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-lg md:prose-xl max-w-none text-gray-800"
                >
                    {detail && detail.length > 0 ? (
                        <PortableText
                            value={detail}
                            components={{
                                block: {
                                    normal: ({ children }) => <p className="mb-6 leading-relaxed text-justify">{children}</p>,
                                    h1: ({ children }) => <h1 className="text-4xl font-bold text-[#032972] mt-12 mb-6">{children}</h1>,
                                    h2: ({ children }) => <h2 className="text-3xl font-bold text-[#032972] mt-10 mb-5">{children}</h2>,
                                    h3: ({ children }) => <h3 className="text-2xl font-bold text-[#032972] mt-8 mb-4">{children}</h3>,
                                    blockquote: ({ children }) => (
                                        <blockquote className="border-l-4 border-[#0460D9] pl-6 italic text-gray-600 my-8">
                                            {children}
                                        </blockquote>
                                    ),
                                },
                                list: {
                                    bullet: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
                                    number: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
                                },
                                marks: {
                                    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
                                    em: ({ children }) => <em className="italic">{children}</em>,
                                    link: ({ children, value }) => (
                                        <a href={value.href} className="text-[#0460D9] hover:underline" target="_blank" rel="noopener noreferrer">
                                            {children}
                                        </a>
                                    ),
                                },
                            }}
                        />
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
                            <p className="text-gray-500 text-lg">Detail konten untuk layanan ini belum tersedia.</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </article>
    );
}
