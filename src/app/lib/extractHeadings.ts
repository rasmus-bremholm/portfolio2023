import type { PortableTextBlock, PortableTextSpan } from "@portabletext/types";
import { slugify } from "./slugify";

export type Heading = {
	id: string;
	text: string;
	level: "h2" | "h3";
};

export function extractHeadings(content: PortableTextBlock[] = []): Heading[] {
	return content
		.filter((block) => block._type === "block" && (block.style === "h2" || block.style === "h3"))
		.map((block) => {
			const text =
				block.children
					?.filter((child): child is PortableTextSpan => child._type === "span")
					.map((span) => span.text)
					.join("") ?? "";
			return {
				id: slugify(text),
				text,
				level: block.style as "h2" | "h3",
			};
		});
}
