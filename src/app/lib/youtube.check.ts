// Run: node --experimental-strip-types src/app/lib/youtube.check.ts
import assert from "node:assert/strict";
import { extractYoutubeId } from "./youtube.ts";

const id = "dQw4w9WgXcQ";
for (const url of [
	`https://www.youtube.com/watch?v=${id}`,
	`https://youtube.com/watch?feature=share&v=${id}&t=42s`,
	`https://m.youtube.com/watch?v=${id}`,
	`https://youtu.be/${id}?si=abc123`,
	`https://www.youtube.com/shorts/${id}`,
	`https://www.youtube.com/embed/${id}?start=10`,
	`https://www.youtube-nocookie.com/embed/${id}`,
	`https://www.youtube.com/live/${id}?si=xyz`,
]) {
	assert.equal(extractYoutubeId(url), id, url);
}
for (const url of ["", "not a url", "https://vimeo.com/123", "https://www.youtube.com/@channel", "https://www.youtube.com/watch?v=short", "https://evilyoutube.com/watch?v=" + id]) {
	assert.equal(extractYoutubeId(url), null, url);
}
console.log("youtube.check ok");
