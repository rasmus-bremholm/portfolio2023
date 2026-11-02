import { defineType } from "sanity";
import { extractYoutubeId } from "../../../src/app/lib/youtube";

// Only the post-level companion video (blogPost.video) needs VideoObject metadata
const hiddenOutsideVideo = ({ path }: { path: (string | number | object)[] }) => path[0] !== "video";

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
						return extractYoutubeId(url) ? true : "Must be a YouTube video URL";
					}),
		},
		{
			name: "caption",
			type: "string",
			title: "Caption (optional)",
		},
		{
			name: "uploadDate",
			type: "date",
			title: "Upload date",
			description: "When the video was published on YouTube. Falls back to the post date.",
			hidden: hiddenOutsideVideo,
		},
		{
			name: "durationSeconds",
			type: "number",
			title: "Duration (seconds)",
			validation: (Rule: any) => Rule.integer().positive(),
			hidden: hiddenOutsideVideo,
		},
	],
	preview: {
		select: {
			url: "url",
		},
		prepare({ url }) {
			const videoId = url ? extractYoutubeId(url) : null;

			return {
				title: "YouTube Video",
				subtitle: videoId ? `ID: ${videoId}` : "Invalid URL",
				media: () => "▶️",
			};
		},
	},
});
