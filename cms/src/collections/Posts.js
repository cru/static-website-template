import slug from '../fields/slug'
import Content from '../blocks/Content'
import { Media } from '../blocks/Media'
import MediaContent from '../blocks/MediaContent'
import MediaSlider from '../blocks/MediaSlider'

const Posts = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'publishDate', 'tags', 'status'],
    group: 'Content',
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) {
        return true
      }

      // query publishDate to control when posts are visible to guests
      return {
        and: [
          {
            publishDate: {
              less_than: new Date().toJSON(),
            },
            _status: {
              equals: 'published',
            },
          },
        ],
      }
    },
  },
  // versioning with drafts enabled tells Payload to save documents to a separate collection in the database and allow publishing
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    // {
    //   name: 'category',
    //   type: 'relationship',
    //   relationTo: 'categories',
    //   // limit the options using the below query which uses the "archive" field set in the categories collection
    //   filterOptions: {
    //     archived: { equals: false },
    //   },
    //   // allow selection of one or more categories
    //   hasMany: true,
    // },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [Content, Media, MediaContent, MediaSlider],
    },
    slug(),
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      defaultValue: ({ user }) => user.id,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishDate',
      type: 'date',
      admin: {
        position: 'sidebar',
        description: 'Posts will not be public until this date',
      },
      defaultValue: () => new Date(),
    },
  ],
}

export default Posts
