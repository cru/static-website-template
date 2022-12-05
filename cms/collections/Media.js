const Media = {
  slug: "media",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  upload: true,
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
};

export default Media;
