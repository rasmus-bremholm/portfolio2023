import { PortableTextBlock } from "next-sanity";

export interface ContentSection {
	_id: string;
	title: string;
	alignment: "left" | "right";
	content: PortableTextBlock[];
	cta: string;
	order: number;
	ctaLink: string;
	ctaText: string;
}
