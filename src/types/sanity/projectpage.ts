import type { PortableTextBlock } from "@portabletext/types";

export interface ProjectPreview {
	_id: string;
	title: string;
	slug: { current: string };
	description: string;
	technologies: string[];
	liveUrl?: string;
	githubUrl?: string;
	publishedAt: string;
	customOrder?: number;
	featured?: boolean;
	featuredImage?: {
		asset: {
			_id: string;
			url: string;
			metadata?: {
				lqip?: string;
				dimensions?: { width: number; height: number };
			};
		};
		alt?: string;
	};
}

export interface ProjectPost extends ProjectPreview {
	content: PortableTextBlock[];
}
