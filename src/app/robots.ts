import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/studio/",
		},
		sitemap: "https://www.rasmusbremholm.com/sitemap.xml",
	};
}
