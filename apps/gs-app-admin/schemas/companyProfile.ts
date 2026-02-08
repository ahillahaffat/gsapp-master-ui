import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'companyProfile',
    title: 'Profil Perusahaan',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nama Perusahaan',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
        }),
        defineField({
            name: 'vision',
            title: 'Visi',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'mission',
            title: 'Misi',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'keyword', title: 'Kata Kunci', type: 'string' }),
                        defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'values',
            title: 'Nilai Utama (Values)',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', title: 'Judul', type: 'string' }),
                        defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
                        defineField({ name: 'icon', title: 'Icon (Optional)', type: 'image' }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'contactInfo',
            title: 'Info Kontak',
            type: 'object',
            fields: [
                defineField({ name: 'address', title: 'Alamat', type: 'text' }),
                defineField({ name: 'email', title: 'Email', type: 'string' }),
                defineField({ name: 'phone', title: 'Telepon/WhatsApp', type: 'string' }),
                defineField({ name: 'mapsEmbedUrl', title: 'Google Maps Embed URL', type: 'url' }),
            ],
        }),
    ],
});
