import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'homeRecentProjectSection',
    title: 'Recent Project Section (Beranda)',
    type: 'document',
    fields: [
        defineField({ name: 'showcaseText', title: 'Teks Showcase', type: 'text' }),
        defineField({
            name: 'maxItems',
            title: 'Jumlah Maksimal Ditampilkan',
            description: 'Jumlah proyek terbaru yang akan ditampilkan secara otomatis.',
            type: 'number',
            initialValue: 3,
            validation: (Rule) => Rule.min(1).max(10),
        }),
    ],
});
