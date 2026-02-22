import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'companyInfo',
    title: 'Informasi Perusahaan',
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
    ],
});
