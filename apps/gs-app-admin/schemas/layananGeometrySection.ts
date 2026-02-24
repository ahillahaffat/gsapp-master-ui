import { defineField, defineType } from 'sanity';

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
                    ]
                }
            ]
        })
    ],
});
