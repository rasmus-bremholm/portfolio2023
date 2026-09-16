import { NextRequest } from "next/server";
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "../shared";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const title = searchParams.get("title") || "Blog";
		const meta = searchParams.get("meta") || "";

		return await renderOgImage({ label: "Blog", title, subline: meta });
	} catch (e) {
		console.error(e);
		return new Response("Failed to generate image", { status: 500 });
	}
}
