import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

const bebasNeueUrl = "https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXooxW5rygbi49c.woff2";

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const title = searchParams.get("title") || "Blog Post";
		const category = searchParams.get("category") || "";

		const fontData = await fetch(bebasNeueUrl).then((res) => res.arrayBuffer());

		return new ImageResponse(
			(
				<div
					style={{
						background: "#0a0a0a",
						width: "100%",
						height: "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						justifyContent: "center",
						padding: "80px",
						fontFamily: "Bebas Neue",
					}}>
					{category && (
						<div
							style={{
								fontSize: "32px",
								color: "#03a678",
								textTransform: "uppercase",
								marginBottom: "20px",
								letterSpacing: "2px",
							}}>
							{category}
						</div>
					)}
					<div
						style={{
							fontSize: "72px",
							color: "#ffffff",
							lineHeight: 1.1,
							maxWidth: "900px",
							marginBottom: "40px",
						}}>
						{title}
					</div>
					<div
						style={{
							fontSize: "32px",
							color: "#03a678",
							display: "flex",
							alignItems: "center",
						}}>
						<span style={{ marginRight: "10px", color: "#03a678" }}>RASMUS</span>
						<span style={{ color: "#ffffff" }}>BREMHOLM</span>
					</div>
				</div>
			),
			{
				width: 1200,
				height: 630,
				fonts: [
					{
						name: "Bebas Neue",
						data: fontData,
						style: "normal",
					},
				],
			}
		);
	} catch (e) {
		console.error(e);
		return new Response("Failed to generate image", { status: 500 });
	}
}
