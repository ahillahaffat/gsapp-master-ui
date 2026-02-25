import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'homeClientSection',
    title: 'Client Section (Beranda)',
    type: 'document',
    fields: [
        defineField({ name: 'description', title: 'Deskripsi Klien', type: 'text' }),
        defineField({
            name: 'brands',
            title: 'Daftar Klien',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', title: 'Nama Klien', type: 'string' }),
                        defineField({ name: 'logo', title: 'Logo Klien', type: 'image', options: { hotspot: true } }),
                    ]
                }
            ]
        }),
    ],
});
