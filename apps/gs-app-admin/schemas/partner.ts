import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'partner',
    title: 'Mitra / Klien',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nama Mitra',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'website',
            title: 'Website URL',
            type: 'url',
        }),
        defineField({
            name: 'description',
            title: 'Deskripsi Kerja Sama (Opsional)',
            type: 'text',
            rows: 3,
        }),
    ],
});
