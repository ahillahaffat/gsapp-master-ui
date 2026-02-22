import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'companyVision',
    title: 'Visi Perusahaan',
    type: 'document',
    fields: [
        defineField({
            name: 'vision',
            title: 'Visi',
            type: 'text',
            rows: 4,
        }),
    ],
});
