import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
	name: "default",
	title: "Portfolio 2023",
	projectId: "e11pfexb",
	dataset: "production",
	plugins: [
		structureTool({
			structure: (S) =>
				S.list()
					.title("Content")
					.items([
						S.listItem().title("Site Settings").child(S.document().schemaType("siteSettings").documentId("siteSettings")),

						...S.documentTypeListItems().filter((item) => item.getId() !== "siteSettings"),
					]),
		}),
		visionTool(),
	],
	schema: {
		types: schemaTypes,
	},
});
