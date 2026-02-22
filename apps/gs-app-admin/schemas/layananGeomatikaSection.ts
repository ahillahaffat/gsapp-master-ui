import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'layananGeomatikaSection',
    title: 'Geomatika Section (Layanan)',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Kategori / Judul', type: 'string' }),
        defineField({ name: 'description', title: 'Deskripsi Singkat', type: 'text' }),
        defineField({ name: 'image', title: 'Foto Representative', type: 'image', options: { hotspot: true } }),
        defineField({
            name: 'features',
            title: 'Daftar Layanan/Fitur Geomatika',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', title: 'Nama Layanan', type: 'string' }),
                        defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
                        defineField({ name: 'image', title: 'Gambar', type: 'image', options: { hotspot: true } }),
                    ]
                }
            ]
        })
    ],
});
