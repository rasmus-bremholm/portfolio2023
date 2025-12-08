import { defineField, defineType } from "sanity";

export default defineType({
	name: "homepageSection",
	title: "Homepage Section",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Section Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "content",
			title: "Section Content",
			type: "array",
			of: [
				{
					type: "block",
					styles: [{ title: "Normal", value: "normal" }],
					lists: [],
					marks: {
						decorators: [
							{ title: "Bold", value: "strong" },
							{ title: "Italic", value: "em" },
						],
						annotations: [
							{
								name: "link",
								type: "object",
								title: "Link",
								fields: [
									{
										name: "href",
										type: "url",
										title: "URL",
									},
								],
							},
						],
					},
				},
			],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Section ID",
			type: "slug",
			options: {
				source: "title",
				maxLength: 30,
			},
			description: "Used for scroll-to-section navigation",
		}),
		defineField({
			name: "ctaText",
			title: "CTA Button Text",
			type: "string",
			description: "Leave empty to hide the CTA button",
		}),
		defineField({
			name: "ctaLink",
			title: "CTA Button Link",
			type: "string",
			description: "Where the CTA button should link to",
			hidden: ({ parent }) => !parent?.ctaText,
		}),
		defineField({
			name: "alignment",
			title: "Content Alignment",
			type: "string",
			options: {
				list: [
					{ title: "Left", value: "left" },
					{ title: "Right", value: "right" },
				],
				layout: "radio",
			},
			initialValue: "left",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "order",
			title: "Display Order",
			type: "number",
			validation: (Rule) => Rule.required().min(1),
		}),
	],
	preview: {
		select: {
			title: "title",
			alignment: "alignment",
			order: "order",
		},
		prepare(selection) {
			const { title, alignment, order } = selection;
			return {
				title: title,
				subtitle: `${alignment} aligned • Order: ${order}`,
			};
		},
	},
});
