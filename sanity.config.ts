import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { projectSchema } from './sanity/schemas/project'
import { studioSchema } from './sanity/schemas/studio'

export default defineConfig({
  name: 'france-interiorismo',
  title: 'France Interiorismo',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            S.listItem()
              .title('Proyectos')
              .child(S.documentTypeList('project').title('Proyectos')),
            S.listItem()
              .title('Estudio / Sobre mí')
              .child(S.documentTypeList('studio').title('Estudio')),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [projectSchema, studioSchema],
  },
})
