import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from "./site";

type BuildMetadataArgs = {
	/** Omit to inherit the root layout's default <title> unchanged (avoids double-applying its "%s | Rasmus Bremholm" template). Still used for openGraph/twitter titles. */
	title?: string;
	description?: string;
	path: string;
	image?: string;
	type?: "website" | "article";
	publishedTime?: string;
	/** Sanity's `seo.noIndex` override — hides the page from search engines when true. */
	noIndex?: boolean;
};

export function buildMetadata({
	title,
	description = SITE_DESCRIPTION,
	path,
	image = DEFAULT_OG_IMAGE,
	type = "website",
	publishedTime,
	noIndex,
}: BuildMetadataArgs): Metadata {
	const url = `${SITE_URL}${path}`;
	const ogTitle = title ?? SITE_NAME;
	const images = [{ url: image, width: 1200, height: 630, alt: ogTitle }];

	return {
		...(title ? { title } : {}),
		description,
		...(noIndex ? { robots: { index: false, follow: false } } : {}),
		openGraph:
			type === "article"
				? { title: ogTitle, description, url, siteName: SITE_NAME, type: "article" as const, publishedTime, images }
				: { title: ogTitle, description, url, siteName: SITE_NAME, type: "website" as const, images },
		twitter: { card: "summary_large_image", title: ogTitle, description, images: [image] },
	};
}

export function projectOgImageUrl(title: string, technologies: string[] = []): string {
	const params = new URLSearchParams({ title, tech: technologies.slice(0, 3).join(", ") });
	return `/api/og/project?${params.toString()}`;
}
