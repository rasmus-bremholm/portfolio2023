import { defineType } from "sanity";

export default defineType({
	name: "blockquote",
	title: "Block Quote",
	type: "object",
	fields: [
		{
			name: "quote",
			type: "text",
			title: "Quote",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "author",
			type: "string",
			title: "Author",
		},
		{
			name: "source",
			type: "string",
			title: "Source (optional",
			description: "Book article website.",
		},
	],
	preview: {
		select: {
			quote: "quote",
			author: "author",
		},
		prepare({ quote, author }) {
			return {
				title: quote,
				subtitle: author ? `- ${author}` : "",
			};
		},
	},
});
