import { defineField, defineType } from "sanity";

export default defineType({
	name: "projectPost",
	title: "Project Post",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Project Post Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "featuredImage",
			title: "Featured Image",
			type: "image",
			options: { hotspot: true },
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "content",
			title: "Project Post Content",
			type: "array",
			of: [
				{
					type: "block",
				},
				{ type: "codeBlock" },
				{ type: "imageBlock" },
			],
		}),
		defineField({
			name: "technologies",
			title: "Technologies Used",
			type: "array",
			of: [{ type: "string" }],
			options: {
				layout: "tags",
			},
		}),
		defineField({
			name: "liveUrl",
			title: "Live Project URL",
			type: "url",
		}),
		defineField({
			name: "githubUrl",
			title: "GitHub URL",
			type: "url",
		}),
		defineField({
			name: "seo",
			type: "seo",
			title: "SEO Settings",
		}),
	],
});
