import { defineType, defineArrayMember } from 'sanity';

/**
 * Block content type for rich text editing
 * Supports headings, lists, links, and images
 */
export default defineType({
    name: 'blockContent',
    title: 'Block Content',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'block',
            title: 'Block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
            ],
            lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Numbered', value: 'number' },
            ],
            marks: {
                decorators: [
                    { title: 'Bold', value: 'strong' },
                    { title: 'Italic', value: 'em' },
                    { title: 'Underline', value: 'underline' },
                    { title: 'Strike', value: 'strike-through' },
                    { title: 'Code', value: 'code' },
                ],
                annotations: [
                    {
                        name: 'link',
                        title: 'Link',
                        type: 'object',
                        fields: [
                            {
                                name: 'href',
                                title: 'URL',
                                type: 'url',
                            },
                        ],
                    },
                ],
            },
        }),
        defineArrayMember({
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Teks Alternatif',
                },
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                },
            ],
        }),
    ],
});
