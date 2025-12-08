import { defineField, defineType } from "sanity";

export default defineType({
	name: "imageBlock",
	title: "Image",
	type: "image",
	options: {
		hotspot: true,
	},
	fields: [
		{
			name: "alt",
			type: "string",
			title: "Alt Text",
			description: "Important for SEO and accessibility",
		},
		{
			name: "caption",
			type: "string",
			title: "Caption",
		},
	],
});
