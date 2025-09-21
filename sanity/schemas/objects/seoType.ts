import { object } from "framer-motion/client";
import { defineField, defineType } from "sanity";

export const seoType = defineType({
	name: "seo",
	title: "SEO",
	type: "object",
	fields: [
		defineField({
			name: "title",
			type: "string",
			description: "Overrides the main title for SEO",
		}),
		defineField({
			name: "description",
			type: "text",
			description: "Meta Description",
		}),
		defineField({
			name: "image",
			type: "image",
			description: "Social Share Image",
			options: { hotspot: true },
		}),
		defineField({
			name: "noIndex",
			type: "boolean",
			title: "Hide from search engines?",
			description: "Prevent this page from appearing in search results",
		}),
	],
});
