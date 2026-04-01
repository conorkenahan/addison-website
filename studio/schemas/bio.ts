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
      name: "contact",
      title: "Contact",
      type: "array",
      of: [{ type: "string" }],
      description: "Use this for email, website, or social handles.",
    },
    {
      name: "headshot",
      title: "Headshot",
      type: "image",
    },
  ],
};

export default bio;
