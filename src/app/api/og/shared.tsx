import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// satori (used by ImageResponse) only supports ttf/otf/woff, not the woff2 Google
// Fonts serves by default — an old-Chrome UA gets a ttf back from the css2 endpoint.
async function loadGoogleFont(family: string, weight: number) {
	const css = await fetch(`https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`, {
		headers: {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36",
		},
	}).then((res) => res.text());

	const fontUrl = css.match(/src: url\(([^)]+)\)/)?.[1];
	if (!fontUrl) throw new Error(`Could not load font: ${family}`);
	return fetch(fontUrl).then((res) => res.arrayBuffer());
}

export async function renderOgImage({ label, title, subline }: { label: string; title: string; subline?: string }) {
	const [newsreader, ibmPlexMono] = await Promise.all([loadGoogleFont("Newsreader", 500), loadGoogleFont("IBM+Plex+Mono", 500)]);

	return new ImageResponse(
		(
			<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#F1F2F0" }}>
				<div style={{ display: "flex", height: "120px", background: "repeating-linear-gradient(90deg,#e2e5e3 0 7px,#eaece9 7px 14px)" }} />
				<div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "64px 80px", justifyContent: "center" }}>
					<div
						style={{
							display: "flex",
							fontFamily: "IBM Plex Mono",
							fontSize: "22px",
							letterSpacing: "0.08em",
							textTransform: "uppercase",
							color: "#5E6363",
							marginBottom: "24px",
						}}>
						{label}
					</div>
					<div
						style={{
							display: "flex",
							fontFamily: "Newsreader",
							fontSize: "68px",
							lineHeight: 1.1,
							letterSpacing: "-0.02em",
							color: "#23282A",
							maxWidth: "1000px",
						}}>
						{title}
					</div>
					{subline && (
						<div style={{ display: "flex", fontFamily: "IBM Plex Mono", fontSize: "22px", color: "#4C5455", marginTop: "32px" }}>
							{subline}
						</div>
					)}
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						padding: "32px 80px",
						borderTop: "1px solid #d5d8d5",
						fontFamily: "IBM Plex Mono",
						fontSize: "20px",
						letterSpacing: "0.04em",
						textTransform: "uppercase",
						color: "#23282A",
					}}>
					Rasmus Bremholm
				</div>
			</div>
		),
		{
			...OG_SIZE,
			fonts: [
				{ name: "Newsreader", data: newsreader, style: "normal", weight: 500 },
				{ name: "IBM Plex Mono", data: ibmPlexMono, style: "normal", weight: 500 },
			],
		}
	);
}
