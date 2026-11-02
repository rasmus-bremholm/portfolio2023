"use client";

import { useEffect } from "react";
import "lite-youtube-embed/src/lite-yt-embed.css";

declare module "react" {
	namespace JSX {
		interface IntrinsicElements {
			"lite-youtube": React.HTMLAttributes<HTMLElement> & { videoid: string; playlabel?: string; params?: string };
		}
	}
}

// Facade: shows the thumbnail and only loads the YouTube iframe on click
export default function YouTubeEmbed({ id, title }: { id: string; title: string }) {
	useEffect(() => {
		// @ts-expect-error -- untyped package; imported only to register <lite-youtube>
		import("lite-youtube-embed");
	}, []);

	// Package CSS caps width at 720px; the old iframe was full column width
	return <lite-youtube videoid={id} playlabel={`Play: ${title}`} style={{ maxWidth: "none" }} />;
}
