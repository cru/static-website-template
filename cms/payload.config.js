import { buildConfig } from 'payload/config'

import Announcements from './src/collections/Announcements'
import Media from './src/collections/Media'
import Partners from './src/collections/Partners'
import People from './src/collections/People'
import Posts from './src/collections/Posts'
import Users from './src/collections/Users'

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [Announcements, Posts, People, Partners, Media, Users],
})
