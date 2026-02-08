import { client, urlFor } from '../../lib/sanity.client';
import { allArticlesQuery, Article } from '../../lib/sanity.queries';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 60; // Revalidate every 60 seconds

async function getArticles(): Promise<Article[]> {
    return await client.fetch(allArticlesQuery);
}

function formatDate(dateString?: string): string {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default async function ArtikelPage() {
    const articles = await getArticles();

    return (
        <section className="py-16 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Artikel
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Baca artikel terbaru seputar geomatika, geometry, dan layanan kami
                    </p>
                </div>

                {/* Articles Grid */}
                {articles.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">Belum ada artikel saat ini.</p>
                        <p className="text-gray-400 mt-2">Kunjungi lagi nanti untuk artikel terbaru.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article) => (
                            <Link
                                key={article._id}
                                href={`/artikel/${article.slug.current}`}
                                className="group"
                            >
                                <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        {article.mainImage ? (
                                            <Image
                                                src={urlFor(article.mainImage).width(600).height(400).url()}
                                                alt={article.mainImage.alt || article.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600" />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Categories */}
                                        {article.categories && article.categories.length > 0 && (
                                            <div className="flex gap-2 mb-3">
                                                {article.categories.map((cat, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full"
                                                    >
                                                        {cat}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Title */}
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {article.title}
                                        </h2>

                                        {/* Excerpt */}
                                        {article.excerpt && (
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                                {article.excerpt}
                                            </p>
                                        )}

                                        {/* Meta */}
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            {article.author && <span>{article.author}</span>}
                                            <span>{formatDate(article.publishedAt)}</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
