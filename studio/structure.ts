import { type StructureBuilder } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const structure = (S: StructureBuilder, context: any) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("homepage").title("Homepage"),
      S.documentTypeListItem("bio").title("Bio"),
      orderableDocumentListDeskItem({ type: "show", title: "Artwork", S, context }),
      S.documentTypeListItem("writing").title("Writing"),
      S.documentTypeListItem("cv").title("CV"),
    ]);
