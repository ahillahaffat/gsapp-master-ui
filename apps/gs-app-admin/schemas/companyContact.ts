import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'companyContact',
    title: 'Kontak Perusahaan',
    type: 'document',
    fields: [
        defineField({
            name: 'address',
            title: 'Alamat',
            type: 'text',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Telepon/WhatsApp',
            type: 'string',
        }),
        defineField({
            name: 'mapsEmbedUrl',
            title: 'Google Maps Embed URL',
            type: 'url',
        }),
    ],
});
