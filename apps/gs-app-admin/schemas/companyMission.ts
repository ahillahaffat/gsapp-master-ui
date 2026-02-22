import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'companyMission',
    title: 'Misi Perusahaan',
    type: 'document',
    fields: [
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
    ],
});
