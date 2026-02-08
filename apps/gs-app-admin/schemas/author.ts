import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'author',
    title: 'Penulis',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nama',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'image',
            title: 'Foto',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'text',
            rows: 4,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
});
