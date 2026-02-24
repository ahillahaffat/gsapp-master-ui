import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'teamMember',
    title: 'Tim / Struktur Organisasi',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nama',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'position',
            title: 'Posisi / Jabatan',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'photo',
            title: 'Foto',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'level',
            title: 'Level Urutan (Misal 1 untuk hirarki teratas)',
            description: 'Digunakan untuk mengurutkan posisi dalam struktur organisasi',
            type: 'number',
        }),
        defineField({
            name: 'division',
            title: 'Divisi',
            type: 'string',
        }),
        defineField({
            name: 'bio',
            title: 'Bio Singkat',
            type: 'text',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'position',
            media: 'photo',
        },
    },
});
