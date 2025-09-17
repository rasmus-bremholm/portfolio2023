import { defineField, defineType } from "sanity";

export default defineType({
	name: "codeBlock",
	title: "Code Block",
	type: "object",
	fields: [
		{
			name: "language",
			type: "string",
			title: "Language",
			options: {
				list: [
					{ title: "JavaScript", value: "javascript" },
					{ title: "TypeScript", value: "typescript" },
					{ title: "CSS", value: "css" },
					{ title: "HTML", value: "html" },
					// Add more as needed
				],
			},
		},
		{
			name: "code",
			type: "text",
			title: "Code",
		},
		{
			name: "filename",
			type: "string",
			title: "Filename (optional)",
		},
	],
});
