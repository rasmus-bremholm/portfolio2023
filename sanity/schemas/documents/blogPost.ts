import { defineField, defineType } from "sanity";

export default defineType({
	name: "blogPost",
	title: "Blog Post",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Blog Post Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "content",
			title: "Blog Post Content",
			type: "array",
			of: [
				{
					type: "block",
				},
				{ type: "codeBlock" },
				{ type: "imageBlock" },
			],
		}),
	],
});
