import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'layananGeomatikaSection',
    title: 'Geomatika Section (Layanan)',
    type: 'document',
    fields: [
        defineField({ name: 'description', title: 'Deskripsi Singkat', type: 'text' }),
        defineField({ name: 'image', title: 'Foto Representative', type: 'image', options: { hotspot: true } }),
        defineField({
            name: 'detail',
            title: 'Detail Layanan',
            description: 'Penjelasan lengkap untuk halaman detail layanan Geomatika',
            type: 'array',
            of: [{ type: 'block' }]
        }),
    ],
});
