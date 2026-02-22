import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'homeAboutSection',
    title: 'About Section (Beranda)',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Judul', type: 'string' }),
        defineField({ name: 'description', title: 'Deskripsi Singkat', type: 'text' }),
        defineField({ name: 'vision', title: 'Visi', type: 'text' }),
        defineField({
            name: 'mission',
            title: 'Misi',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'keyword', title: 'Kata Kunci', type: 'string' }),
                        defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
                    ],
                },
            ],
        }),
    ],
});
