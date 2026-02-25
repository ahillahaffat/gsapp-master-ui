import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'homePartnerSection',
    title: 'Partner Section (Beranda)',
    type: 'document',
    fields: [
        defineField({ name: 'description', title: 'Deskripsi Partner', type: 'text' }),
        defineField({
            name: 'partners',
            title: 'Daftar Partner',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', title: 'Nama Partner', type: 'string' }),
                        defineField({ name: 'logo', title: 'Logo Partner', type: 'image', options: { hotspot: true } }),
                    ]
                }
            ]
        }),
    ],
});
