import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

const projectId = 'zgxbdccl';
const dataset = 'production';

// Desk structure definition for singletons
const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set([
  "homeHeroSection",
  "homeAboutSection",
  "homeSolutionSection",
  "homeRecentProjectSection",
  "homeBrandSection",
  "layananHeroSection",
  "layananGeomatikaSection",
  "layananGeometrySection"
])

export default defineConfig({
  name: 'default',
  title: 'Geometrika Admin',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Pengaturan Halaman")
          .items([
            // --- HALAMAN BERANDA ---
            S.listItem()
              .title("Halaman Beranda")
              .id("homePageFolder")
              .child(
                S.list()
                  .title("Section Halaman Beranda")
                  .items([
                    S.listItem()
                      .title("Hero Section")
                      .id("homeHeroSection")
                      .child(S.document().schemaType("homeHeroSection").documentId("homeHeroSection")),
                    S.listItem()
                      .title("About Section")
                      .id("homeAboutSection")
                      .child(S.document().schemaType("homeAboutSection").documentId("homeAboutSection")),
                    S.listItem()
                      .title("Solution Section")
                      .id("homeSolutionSection")
                      .child(S.document().schemaType("homeSolutionSection").documentId("homeSolutionSection")),
                    S.listItem()
                      .title("Recent Project Section")
                      .id("homeRecentProjectSection")
                      .child(S.document().schemaType("homeRecentProjectSection").documentId("homeRecentProjectSection")),
                    S.listItem()
                      .title("Brand Section")
                      .id("homeBrandSection")
                      .child(S.document().schemaType("homeBrandSection").documentId("homeBrandSection")),
                  ])
              ),

            // --- HALAMAN LAYANAN ---
            S.listItem()
              .title("Halaman Layanan")
              .id("layananPageFolder")
              .child(
                S.list()
                  .title("Section Halaman Layanan")
                  .items([
                    S.listItem()
                      .title("Hero Section")
                      .id("layananHeroSection")
                      .child(S.document().schemaType("layananHeroSection").documentId("layananHeroSection")),
                    S.listItem()
                      .title("Geomatika Section")
                      .id("layananGeomatikaSection")
                      .child(S.document().schemaType("layananGeomatikaSection").documentId("layananGeomatikaSection")),
                    S.listItem()
                      .title("Geometry Section")
                      .id("layananGeometrySection")
                      .child(S.document().schemaType("layananGeometrySection").documentId("layananGeometrySection")),
                  ])
              ),

            // --- KOLEKSI DATA ---
            S.divider(),
            S.listItem()
              .title("Portofolio Proyek")
              .schemaType("portfolioProject")
              .child(S.documentTypeList("portfolioProject").title("Portofolio Proyek")),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
