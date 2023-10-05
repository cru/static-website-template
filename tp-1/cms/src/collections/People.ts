import { CollectionConfig } from 'payload/types';

const People: CollectionConfig = {
    slug: 'people',
    admin: {
      defaultColumns: ['firstName', 'lastName', 'portrait', 'status'],
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
        name: 'description',
        type: 'text',
        required: false,
      },
      {
        name: 'portrait',
        type: 'relationship',
        relationTo: 'media',
        required: true,
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
  
  export default People