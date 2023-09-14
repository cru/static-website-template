import { CollectionConfig } from 'payload/types'
import ParagraphBlock from '../blocks/Paragraph'

const Announcements: CollectionConfig = {
  slug: 'announcements',
  admin: {
    defaultColumns: ['title', 'author', 'slug', 'status'],
    useAsTitle: 'title',
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'header',
      type: 'text',
      required: true,
    },
    {
      name: 'shortHeader',
      type: 'text',
      required: true,
    },
    {
      name: 'banner',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [ParagraphBlock],
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'publishedDate',
      type: 'date',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      hooks: {
        beforeValidate: [
          (args) => {
            return args.value?.toLowerCase().replaceAll(' ', '-')
          },
        ],
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'draft',
          label: 'Draft',
        },
        {
          value: 'published',
          label: 'Published',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}

export default Announcements
