import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

const projectId = 'zgxbdccl';
const dataset = 'production';

export default defineConfig({
  name: 'default',
  title: 'Geometrika Admin',

  projectId,
  dataset,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
