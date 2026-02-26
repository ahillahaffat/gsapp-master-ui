import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'homeRecentProjectSection',
    title: 'Recent Project Section (Beranda)',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Judul Section', type: 'string', initialValue: 'Recent Project' }),
        defineField({ name: 'showcaseText', title: 'Teks Showcase', type: 'text' }),
        defineField({ name: 'showcaseImage', title: 'Gambar Showcase', type: 'image', options: { hotspot: true } }),
        defineField({
            name: 'projects',
            title: 'Daftar Proyek',
            description: 'Proyek yang ditampilkan di section Recent Project. Diatur sesuka user.',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', title: 'Judul Proyek', type: 'string' }),
                    defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
                    defineField({ name: 'image', title: 'Gambar', type: 'image', options: { hotspot: true } }),
                ],
            }],
        }),
    ],
});
