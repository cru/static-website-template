import { buildConfig } from 'payload/config'
import { payloadCloud } from '@payloadcms/plugin-cloud'
import path from 'path'

import Users from './collections/Users'
import People from './collections/People'
import Media from './collections/Media'
import Announcements from './collections/Announcements'
import Stories from './collections/Stories'

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, People, Media, Announcements, Stories],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
})
