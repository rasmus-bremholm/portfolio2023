import type { Project } from "@/types/sanity/projectpage";
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
		name: project.title,
		description: project.description,
		url: `${SITE_URL}/projects/${project.slug.current}`,
		datePublished: project.publishedAt,
		keywords: project.technologies?.join(", "),
		image: project.featuredImage?.asset.url,
		author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
	};
}
