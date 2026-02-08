import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'teamMember',
    title: 'Tim (Struktur Organisasi)',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nama Lengkap',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'position',
            title: 'Jabatan / Posisi',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'photo',
            title: 'Foto Profil',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'division',
            title: 'Divisi',
            type: 'string',
            options: {
                list: [
                    { title: 'Manajemen Eksekutif', value: 'executive' },
                    { title: 'Teknis / Engineering', value: 'technical' },
                    { title: 'Administrasi & Keuangan', value: 'admin' },
                    { title: 'Lainnya', value: 'other' },
                ],
            },
        }),
        defineField({
            name: 'level',
            title: 'Level Hierarki (Urutan)',
            type: 'number',
            description: '1 untuk level tertinggi (Direktur), dst.',
            initialValue: 5,
        }),
        defineField({
            name: 'bio',
            title: 'Bio Singkat',
            type: 'text',
            rows: 3,
        }),
    ],
    orderings: [
        {
            title: 'Hierarchy Level',
            name: 'hierarchyAsc',
            by: [{ field: 'level', direction: 'asc' }],
        },
    ],
});
