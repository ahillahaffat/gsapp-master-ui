import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'project',
    title: 'Portofolio Proyek',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Nama Proyek',
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
            title: 'Kategori Proyek',
            type: 'string',
            options: {
                list: [
                    { title: 'Pemetaan', value: 'pemetaan' },
                    { title: 'Konstruksi', value: 'konstruksi' },
                    { title: 'BIM Modeling', value: 'bim' },
                    { title: 'Lainnya', value: 'other' },
                ],
            },
        }),
        defineField({
            name: 'client',
            title: 'Klien (Opsional)',
            type: 'string',
        }),
        defineField({
            name: 'completionDate',
            title: 'Tanggal Selesai',
            type: 'date',
        }),
        defineField({
            name: 'mainImage',
            title: 'Gambar Utama (Cover)',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'gallery',
            title: 'Galeri Foto/Render',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        defineField({
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'description',
            title: 'Deskripsi Proyek',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image' }],
        }),
    ],
});
