import type { PortableTextBlock } from "@portabletext/types";

export interface BlogPost {
	_id: string;
	title: string;
	slug: { current: string };
	excerpt: string;
	publishedAt: string;
	category: string;
	tags: string[];
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
	content: PortableTextBlock[];
	readTime?: number;
}

export interface BlogPostPreview {
	_id: string;
	title: string;
	slug: { current: string };
	excerpt: string;
	publishedAt: string;
	category: string;
	tags: string[];
	readTime?: number;
}
