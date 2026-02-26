import { defineField, defineType } from 'sanity';

const disciplineObject = {
    type: 'object',
    name: 'discipline',
    fields: [
        defineField({ name: 'title', title: 'Judul', type: 'string' }),
        defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
};

const detailProjectsField = {
    name: 'detailProjects',
    title: 'Detail - Projects Section',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Judul Section', type: 'string' }),
        defineField({
            name: 'projects',
            title: 'Proyek',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', title: 'Judul', type: 'string' }),
                    defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
                    defineField({ name: 'image', title: 'Gambar', type: 'image', options: { hotspot: true } }),
                ],
            }],
        }),
    ],
};

const detailDisciplinesField = {
    name: 'detailDisciplines',
    title: 'Detail - Disciplines Section',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Judul Section', type: 'string' }),
        defineField({
            name: 'leftColumn',
            title: 'Kolom Kiri',
            type: 'array',
            of: [disciplineObject],
        }),
        defineField({
            name: 'rightColumn',
            title: 'Kolom Kanan',
            type: 'array',
            of: [disciplineObject],
        }),
    ],
};

const detailCollaborationsField = {
    name: 'detailCollaborations',
    title: 'Detail - Software Collaborations',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Judul Section', type: 'string' }),
        defineField({
            name: 'collaborations',
            title: 'Kolaborasi',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'name', title: 'Nama', type: 'string' }),
                    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
                ],
            }],
        }),
    ],
};

export default defineType({
    name: 'layananGeometrySection',
    title: 'Geometry Section (Layanan)',
    type: 'document',
    fields: [
        defineField({ name: 'description', title: 'Deskripsi Singkat', type: 'text' }),
        defineField({ name: 'image', title: 'Foto Representative', type: 'image', options: { hotspot: true } }),
        defineField({
            name: 'features',
            title: 'Daftar Layanan/Fitur Geometry',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', title: 'Nama Layanan', type: 'string' }),
                        defineField({ name: 'description', title: 'Deskripsi Singkat', type: 'text' }),
                        defineField({ name: 'image', title: 'Gambar', type: 'image', options: { hotspot: true } }),
                        defineField({
                            name: 'detail',
                            title: 'Detail Layanan',
                            description: 'Penjelasan lengkap untuk halaman detail layanan',
                            type: 'array',
                            of: [{ type: 'block' }]
                        }),
                        detailProjectsField,
                        detailDisciplinesField,
                        detailCollaborationsField,
                    ]
                }
            ]
        })
    ],
});
