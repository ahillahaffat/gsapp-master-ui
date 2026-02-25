import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'homeSolutionSection',
    title: 'Solution Section (Beranda)',
    type: 'document',
    fields: [
        defineField({
            name: 'solutions',
            title: 'Daftar Solusi',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', title: 'Judul Solusi', type: 'string' }),
                        defineField({ name: 'description', title: 'Deskripsi Solusi', type: 'text' }),
                        defineField({ name: 'image', title: 'Gambar Solusi', type: 'image', options: { hotspot: true } }),
                    ]
                }
            ]
        })
    ],
});
