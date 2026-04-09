const bio = {
  name: "bio",
  title: "Bio",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "profile",
      title: "Profile",
      type: "text",
      description: "Short bio statement.",
    },
    {
      name: "headshot",
      title: "Headshot",
      type: "image",
    },
    {
      name: "contact",
      title: "Contact",
      type: "array",
      of: [
        {
          type: "object",
          name: "contactItem",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              description: 'e.g. "Instagram", "Email"',
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              description: 'e.g. "https://instagram.com/addison_bale" or "mailto:you@email.com"',
              validation: (Rule: any) =>
                Rule.uri({ scheme: ["http", "https", "mailto"] }),
            },
          ],
          preview: {
            select: { title: "label", subtitle: "url" },
          },
        },
      ],
    },
  ],
};

export default bio;
