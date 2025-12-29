import { defineType } from "sanity";

export default defineType({
	name: "youtube",
	title: "YouTube Video",
	type: "object",
	fields: [
		{
			name: "url",
			type: "url",
			title: "YouTube URL",
			validation: (Rule: any) =>
				Rule.required()
					.uri({
						scheme: ["http", "https"],
					})
					.custom((url: string) => {
						if (!url) return true;
						const isYoutube = url.includes("youtube.com") || url.includes("youtu.be");
						return isYoutube || "Must be a YouTube URL";
					}),
		},
		{
			name: "caption",
			type: "string",
			title: "Caption (optional)",
		},
	],
	preview: {
		select: {
			url: "url",
		},
		prepare({ url }) {
			const videoId = url?.includes("youtu.be") ? url.split("youtu.be/")[1]?.split("?")[0] : url?.split("v=")[1]?.split("&")[0];

			return {
				title: "YouTube Video",
				subtitle: videoId ? `ID: ${videoId}` : "Invalid URL",
				media: () => "▶️",
			};
		},
	},
});
