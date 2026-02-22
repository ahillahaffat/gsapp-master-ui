import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'companyValues',
    title: 'Nilai Utama Perusahaan',
    type: 'document',
    fields: [
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
                    ],
                },
            ],
        }),
    ],
});
