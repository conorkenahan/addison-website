import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";

export default defineConfig({
  name: "default",
  title: "Addison Bale Website",

  projectId: "c8xyyk4x",
  dataset: "production",

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev,
      {
        id: "artwork-in-show",
        title: "Artwork in Show",
        schemaType: "artwork",
        parameters: [{ name: "showId", title: "Show", type: "string" }],
        value: ({ showId }: { showId: string }) => ({
          show: { _type: "reference", _ref: showId },
        }),
      },
    ],
  },
});
