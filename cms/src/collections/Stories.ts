import { CollectionConfig } from 'payload/types'
import ParagraphBlock from '../blocks/Paragraph'

const Stories: CollectionConfig = {
  slug: 'stories',
  admin: {
    defaultColumns: ['firstName', 'lastName', 'status'],
    useAsTitle: 'firstName',
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'years',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'content', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [
        // required
        ParagraphBlock,
      ],
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

export default Stories
