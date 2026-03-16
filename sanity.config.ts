import { defineConfig } from 'sanity'
import { projectSchema } from './sanity/schemas/project'
import { studioSchema } from './sanity/schemas/studio'

export default defineConfig({
  name: 'france-interiorismo',
  title: 'France Interiorismo',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/studio',
  schema: {
    types: [projectSchema, studioSchema],
  },
})
