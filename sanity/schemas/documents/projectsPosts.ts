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
			name: "description",
			title: "Short Description",
			type: "text",
			rows: 2,
			description: "Brief description for project cards and SEO",
			validation: (Rule) => Rule.required().max(160),
		}),
		defineField({
			name: "featured",
			title: "Featured Project",
			type: "boolean",
			description: "Show this project prominently",
			initialValue: false,
		}),
		defineField({
			name: "featuredImage",
			title: "Featured Image",
			type: "image",
			options: {
				hotspot: true,
				metadata: ["blurhash", "lqip"], // Add this
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alt Text",
					validation: (Rule) => Rule.required(),
				},
			],
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
		defineField({
			name: "customOrder",
			title: "Display Order",
			type: "number",
			description: "Lower numbers appear first. Leave empty to sort by publish date.",
			validation: (Rule) => Rule.min(0),
		}),
		defineField({
			name: "publishedAt",
			title: "Published Date",
			type: "datetime",
			validation: (Rule) => Rule.required(),
		}),
	],
});
