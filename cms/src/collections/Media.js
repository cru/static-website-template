const Media = {
  slug: 'media',
  admin: {
    useAsTitle: 'name',
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  upload: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
}

export default Media
