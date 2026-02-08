import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'service',
    title: 'Layanan',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Nama Layanan',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Kategori Layanan',
            type: 'string',
            options: {
                list: [
                    { title: 'Geomatika', value: 'geomatika' },
                    { title: 'Geometry', value: 'geometry' },
                    { title: 'BIM', value: 'bim' },
                    { title: 'Lainnya', value: 'other' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'mainImage',
            title: 'Gambar Utama',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'shortDescription',
            title: 'Deskripsi Singkat (untuk Card)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'description',
            title: 'Deskripsi Lengkap',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image' }],
        }),
    ],
});
