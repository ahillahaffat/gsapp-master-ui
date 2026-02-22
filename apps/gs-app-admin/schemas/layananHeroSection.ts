import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'layananHeroSection',
    title: 'Hero Section (Layanan)',
    type: 'document',
    fields: [
        defineField({ name: 'titleLine1', title: 'Judul Baris 1', type: 'string' }),
        defineField({ name: 'titleLine2', title: 'Judul Baris 2', type: 'string' }),
        defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
        defineField({ name: 'backgroundImage', title: 'Gambar Latar', type: 'image', options: { hotspot: true } }),
    ],
});
