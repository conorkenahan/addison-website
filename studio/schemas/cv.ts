const cv = {
  name: "cv",
  title: "CV",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Document title",
      type: "string",
      initialValue: "CV",
    },
    {
      name: "pdf",
      title: "PDF file",
      type: "file",
      options: { accept: ".pdf" },
    },
    {
      name: "sections",
      title: "CV Sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "section",
          fields: [
            {
              name: "heading",
              title: "Section Heading",
              type: "string",
              description: 'e.g. "Education", "Solo Exhibitions", "Publications"',
            },
            {
              name: "entries",
              title: "Entries",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "entry",
                  fields: [
                    {
                      name: "year",
                      title: "Year",
                      type: "string",
                      description: 'e.g. "2024" or "2020–2023"',
                    },
                    {
                      name: "description",
                      title: "Description",
                      type: "text",
                      rows: 2,
                    },
                  ],
                  preview: {
                    select: { title: "year", subtitle: "description" },
                  },
                },
              ],
            },
          ],
          preview: {
            select: { title: "heading" },
          },
        },
      ],
    },
  ],
};

export default cv;
