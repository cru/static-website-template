const Announcements = {
  slug: "announcements",
  admin: {
    defaultColumns: ["title", "author", "status"],
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "shortHeader",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: false,
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
    },
    {
      name: "publishedDate",
      type: "date",
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          value: "draft",
          label: "Draft",
        },
        {
          value: "published",
          label: "Published",
        },
      ],
      defaultValue: "draft",
      admin: {
        position: "sidebar",
      },
    },
  ],
  timestamps: true,
};

export default Announcements;
