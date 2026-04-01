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
      options: {
        accept: ".pdf",
      },
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
      description: "Short description to display alongside the download link.",
    },
  ],
};

export default cv;
