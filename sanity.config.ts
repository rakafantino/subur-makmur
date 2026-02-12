import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './schema'

export default defineConfig({
  name: 'default',
  title: 'Subur Makmur Store',

  projectId: 'YOUR_PROJECT_ID',
  dataset: 'production',

  plugins: [structureTool()],

  schema,
})
