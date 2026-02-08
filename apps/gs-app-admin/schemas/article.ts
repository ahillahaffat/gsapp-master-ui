import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'article',
    title: 'Artikel',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Judul',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Penulis',
            type: 'reference',
            to: { type: 'author' },
        }),
        defineField({
            name: 'mainImage',
            title: 'Gambar Utama',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Teks Alternatif',
                },
            ],
        }),
        defineField({
            name: 'categories',
            title: 'Kategori',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Tanggal Publish',
            type: 'datetime',
        }),
        defineField({
            name: 'excerpt',
            title: 'Ringkasan',
            type: 'text',
            rows: 3,
            description: 'Ringkasan singkat untuk preview artikel',
        }),
        defineField({
            name: 'body',
            title: 'Konten',
            type: 'blockContent',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection;
            return { ...selection, subtitle: author && `oleh ${author}` };
        },
    },
});
