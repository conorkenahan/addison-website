import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas/schema";

export default defineConfig({
  name: "addison-studio",
  title: "Addison Portfolio CMS",
  projectId: "your_project_id",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
