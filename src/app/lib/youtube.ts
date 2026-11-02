// Handles watch?v=, youtu.be/, /shorts/, /embed/, /live/ and ignores extra params (?si=, &t=)
export function extractYoutubeId(url: string): string | null {
	let parsed: URL;
	try {
		parsed = new URL(url);
	} catch {
		return null;
	}
	const host = parsed.hostname.replace(/^(www\.|m\.)/, "");
	const segments = parsed.pathname.split("/").filter(Boolean);

	let id: string | null | undefined;
	if (host === "youtu.be") {
		id = segments[0];
	} else if (host === "youtube.com" || host === "youtube-nocookie.com") {
		id = ["shorts", "embed", "live"].includes(segments[0]) ? segments[1] : parsed.searchParams.get("v");
	}
	return id && /^[\w-]{11}$/.test(id) ? id : null;
}
