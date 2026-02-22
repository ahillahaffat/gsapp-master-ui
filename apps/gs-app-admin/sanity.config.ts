import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

const projectId = 'zgxbdccl';
const dataset = 'production';

const companyProfileTypes = [
  'companyInfo',
  'companyVision',
  'companyMission',
  'companyValues',
  'companyContact',
];

export default defineConfig({
  name: 'default',
  title: 'Geometrika Admin',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Profil Perusahaan')
              .child(
                S.list()
                  .title('Profil Perusahaan')
                  .items([
                    S.listItem()
                      .title('Informasi Perusahaan')
                      .child(
                        S.document()
                          .schemaType('companyInfo')
                          .documentId('companyInfo'),
                      ),
                    S.listItem()
                      .title('Visi')
                      .child(
                        S.document()
                          .schemaType('companyVision')
                          .documentId('companyVision'),
                      ),
                    S.listItem()
                      .title('Misi')
                      .child(
                        S.document()
                          .schemaType('companyMission')
                          .documentId('companyMission'),
                      ),
                    S.listItem()
                      .title('Nilai Utama')
                      .child(
                        S.document()
                          .schemaType('companyValues')
                          .documentId('companyValues'),
                      ),
                    S.listItem()
                      .title('Kontak')
                      .child(
                        S.document()
                          .schemaType('companyContact')
                          .documentId('companyContact'),
                      ),
                  ]),
              ),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !companyProfileTypes.includes(
                  listItem.getId() ?? '',
                ),
            ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
