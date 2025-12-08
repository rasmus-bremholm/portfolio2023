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
			name: "publishedAt",
			title: "Published Date",
			type: "datetime",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "featuredImage",
			title: "Featured Image",
			type: "image",
			options: { hotspot: true, metadata: ['blurhash', 'lqip'] },
			description: "Used in blog post lists and as fallback for SEO image",
		}),
		defineField({
			name: "excerpt",
			title: "Excerpt",
			type: "text",
			rows: 3,
			description: "Short summary for blog lists and SEO description fallback",
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
		defineField({
			name: "category",
			title: "Category",
			type: "string",
			options: {
				list: [
					{ title: "Tutorial", value: "tutorial" },
					{ title: "Opinion", value: "opinion" },
					{ title: "News", value: "news" },
				],
			},
		}),
		defineField({
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{ type: "string" }],
			options: {
				layout: "tags",
			},
		}),
		defineField({
			name: "seo",
			type: "seo",
			title: "SEO Settings",
		}),
	],
});
