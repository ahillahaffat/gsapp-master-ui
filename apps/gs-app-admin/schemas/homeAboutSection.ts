import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'homeAboutSection',
    title: 'About Section (Beranda)',
    type: 'document',
    fields: [
        defineField({ name: 'description', title: 'Deskripsi Singkat', type: 'text' }),
        defineField({ name: 'image', title: 'Logo/Gambar Profil', type: 'image', options: { hotspot: true } }),
    ],
});
