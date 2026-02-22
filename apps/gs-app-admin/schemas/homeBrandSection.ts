import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'homeBrandSection',
    title: 'Brand Section (Beranda)',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Judul', type: 'string' }),
        defineField({
            name: 'brands',
            title: 'Daftar Brand/Klien',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', title: 'Nama Brand', type: 'string' }),
                        defineField({ name: 'logo', title: 'Logo Brand', type: 'image', options: { hotspot: true } }),
                    ]
                }
            ]
        })
    ],
});
