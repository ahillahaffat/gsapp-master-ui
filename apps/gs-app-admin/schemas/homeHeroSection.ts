import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'homeHeroSection',
    title: 'Hero Section (Beranda)',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Judul', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Sub Judul', type: 'string' }),
        defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
        defineField({ name: 'backgroundImage', title: 'Gambar Latar', type: 'image', options: { hotspot: true } }),
    ],
});
