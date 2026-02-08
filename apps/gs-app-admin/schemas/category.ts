import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'category',
    title: 'Kategori',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Judul',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Deskripsi',
            type: 'text',
            rows: 2,
        }),
    ],
});
