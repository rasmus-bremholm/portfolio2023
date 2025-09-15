import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Portfolio 2023',
  projectId: 'e11pfexb',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [],
  },
})