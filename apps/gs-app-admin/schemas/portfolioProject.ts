import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'portfolioProject',
    title: 'Portofolio Proyek',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Nama Proyek',
            type: 'string',
        }),
        defineField({
            name: 'category',
            title: 'Kategori Layanan',
            type: 'string',
            options: {
                list: [
                    { title: 'Geomatika', value: 'Geomatika' },
                    { title: 'Geometry', value: 'Geometry' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Deskripsi Proyek',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Gambar Utama (Cover)',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Tanggal Proyek',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'image',
        },
    },
});
