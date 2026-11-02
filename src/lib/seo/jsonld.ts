import type { Project } from "@/types/sanity/projectpage";
import type { BlogPost } from "@/types/sanity/blogpage";
import { extractYoutubeId } from "@/app/lib/youtube";
import { SITE_URL, SITE_NAME, JOB_TITLE, EMPLOYER, ADDRESS_LOCALITY, ADDRESS_COUNTRY, SAME_AS } from "./site";

export function personJsonLd(youtubeUrl?: string) {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: SITE_NAME,
		url: SITE_URL,
		jobTitle: JOB_TITLE,
		worksFor: { "@type": "Organization", name: EMPLOYER },
		address: { "@type": "PostalAddress", addressLocality: ADDRESS_LOCALITY, addressCountry: ADDRESS_COUNTRY },
		sameAs: youtubeUrl ? [...SAME_AS, youtubeUrl] : SAME_AS,
	};
}

export function projectJsonLd(project: Project) {
	return {
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		name: project.seo?.title || project.title,
		description: project.seo?.description || project.description,
		url: `${SITE_URL}/projects/${project.slug.current}`,
		datePublished: project.publishedAt,
		keywords: project.technologies?.join(", "),
		image: project.seo?.image?.asset.url || project.featuredImage?.asset.url,
		author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
	};
}

export function blogPostJsonLd(post: BlogPost) {
	return {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.seo?.title || post.title,
		description: post.seo?.description || post.excerpt,
		url: `${SITE_URL}/blog/${post.slug.current}`,
		datePublished: post.publishedAt,
		keywords: post.tags?.join(", "),
		image: post.seo?.image?.asset.url || post.featuredImage?.asset.url,
		author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
	};
}

export function videoJsonLd(post: BlogPost) {
	const id = post.video?.url && extractYoutubeId(post.video.url);
	if (!post.video || !id) return null;
	return {
		"@context": "https://schema.org",
		"@type": "VideoObject",
		name: post.title,
		description: post.excerpt || post.title,
		thumbnailUrl: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
		uploadDate: post.video.uploadDate || post.publishedAt,
		duration: post.video.durationSeconds ? `PT${post.video.durationSeconds}S` : undefined,
		embedUrl: `https://www.youtube.com/embed/${id}`,
		contentUrl: `https://www.youtube.com/watch?v=${id}`,
	};
}
