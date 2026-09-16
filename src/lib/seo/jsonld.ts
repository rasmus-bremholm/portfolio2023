import type { Project } from "@/types/sanity/projectpage";
import type { BlogPost } from "@/types/sanity/blogpage";
import { SITE_URL, SITE_NAME, JOB_TITLE, EMPLOYER, ADDRESS_LOCALITY, ADDRESS_COUNTRY, SAME_AS } from "./site";

export function personJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: SITE_NAME,
		url: SITE_URL,
		jobTitle: JOB_TITLE,
		worksFor: { "@type": "Organization", name: EMPLOYER },
		address: { "@type": "PostalAddress", addressLocality: ADDRESS_LOCALITY, addressCountry: ADDRESS_COUNTRY },
		sameAs: SAME_AS,
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
