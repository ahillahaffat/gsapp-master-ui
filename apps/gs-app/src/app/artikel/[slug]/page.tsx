import { client, urlFor } from '../../../lib/sanity.client';
import { articleBySlugQuery, ArticleDetail } from '../../../lib/sanity.queries';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 60;

interface PageProps {
    params: Promise<{ slug: string }>;
}

async function getArticle(slug: string): Promise<ArticleDetail | null> {
    return await client.fetch(articleBySlugQuery, { slug });
}

function formatDate(dateString?: string): string {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

// Portable Text components for rich text rendering
const portableTextComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) return null;
            return (
                <figure className="my-8">
                    <Image
                        src={urlFor(value).width(1200).url()}
                        alt={value.alt || 'Article image'}
                        width={1200}
                        height={675}
                        className="rounded-lg w-full"
                    />
                    {value.caption && (
                        <figcaption className="text-center text-gray-500 text-sm mt-2">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            );
        },
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="text-lg font-semibold mt-4 mb-2">{children}</h4>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-700">
                {children}
            </blockquote>
        ),
    },
    marks: {
        link: ({ children, value }: any) => (
            <a
                href={value?.href}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ),
        code: ({ children }: any) => (
            <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
                {children}
            </code>
        ),
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="list-disc list-inside my-4 space-y-2">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="list-decimal list-inside my-4 space-y-2">{children}</ol>
        ),
    },
};

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const article = await getArticle(slug);

    if (!article) {
        return { title: 'Artikel tidak ditemukan' };
    }

    return {
        title: `${article.title} | Geometrika`,
        description: article.excerpt,
    };
}

export default async function ArticleDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const article = await getArticle(slug);

    if (!article) {
        notFound();
    }

    return (
        <article className="py-16 bg-white min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back link */}
                <Link
                    href="/artikel"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Kembali ke Artikel
                </Link>

                {/* Header */}
                <header className="max-w-4xl mx-auto text-center mb-12">
                    {/* Categories */}
                    {article.categories && article.categories.length > 0 && (
                        <div className="flex justify-center gap-2 mb-4">
                            {article.categories.map((cat, idx) => (
                                <span
                                    key={idx}
                                    className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>
                    )}

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {article.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex items-center justify-center gap-4 text-gray-600">
                        {article.author && typeof article.author === 'object' && (
                            <div className="flex items-center gap-2">
                                {article.author.image && (
                                    <Image
                                        src={urlFor(article.author.image).width(40).height(40).url()}
                                        alt={article.author.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                )}
                                <span className="font-medium">{article.author.name}</span>
                            </div>
                        )}
                        {article.publishedAt && (
                            <span className="text-gray-500">
                                {formatDate(article.publishedAt)}
                            </span>
                        )}
                    </div>
                </header>

                {/* Main Image */}
                {article.mainImage && (
                    <div className="relative max-w-4xl mx-auto mb-12 aspect-video rounded-xl overflow-hidden">
                        <Image
                            src={urlFor(article.mainImage).width(1200).height(675).url()}
                            alt={article.mainImage.alt || article.title}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                )}

                {/* Body Content */}
                <div className="max-w-3xl mx-auto prose prose-lg prose-gray">
                    {article.body && (
                        <PortableText value={article.body} components={portableTextComponents} />
                    )}
                </div>

                {/* Author Bio */}
                {article.author && typeof article.author === 'object' && article.author.bio && (
                    <div className="max-w-3xl mx-auto mt-12 p-6 bg-gray-50 rounded-xl">
                        <div className="flex items-start gap-4">
                            {article.author.image && (
                                <Image
                                    src={urlFor(article.author.image).width(80).height(80).url()}
                                    alt={article.author.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full"
                                />
                            )}
                            <div>
                                <h3 className="font-semibold text-lg">{article.author.name}</h3>
                                <p className="text-gray-600 mt-1">{article.author.bio}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}
