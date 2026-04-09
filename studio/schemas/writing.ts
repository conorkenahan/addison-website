const writing = {
  name: "writing",
  title: "Writing",
  type: "document",
  fields: [
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
      description: "Display this piece prominently at the top of the Writing page.",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      description: 'e.g. "Essay", "Poem", "Review"',
    },
    {
      name: "publication",
      title: "Where Published",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "string",
      description: 'e.g. "March 2024" or "Fall 2023"',
    },
    {
      name: "year",
      title: "Year",
      type: "number",
      description: "Used for ordering.",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      description: "If published online, paste the URL here.",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
      description: "Full text — only used for the featured piece display.",
    },
  ],
  preview: {
    select: { title: "title", subtitle: "publication" },
  },
};

export default writing;
