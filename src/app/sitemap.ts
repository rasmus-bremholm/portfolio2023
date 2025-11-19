import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = "https://www.rasmusbremholm.com";

	// Static pages
	const staticPages: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
	];

	try {
		// Fetch blog posts
		const blogPosts = await client.fetch<Array<{ slug: { current: string }; _updatedAt: string }>>(
			groq`*[_type == "blogPost" && defined(slug.current)] {
        "slug": slug,
        _updatedAt
      }`
		);

		const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
			url: `${baseUrl}/blog/${post.slug.current}`,
			lastModified: new Date(post._updatedAt),
			changeFrequency: "monthly",
			priority: 0.7,
		}));

		// Fetch projects
		const projects = await client.fetch<Array<{ slug: { current: string }; _updatedAt: string }>>(
			groq`*[_type == "projectPost" && defined(slug.current)] {
        "slug": slug,
        _updatedAt
      }`
		);

		const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
			url: `${baseUrl}/projects/${project.slug.current}`,
			lastModified: new Date(project._updatedAt),
			changeFrequency: "monthly",
			priority: 0.8,
		}));

		return [...staticPages, ...blogPages, ...projectPages];
	} catch (error) {
		console.error("Error generating sitemap:", error);
		// Fallback to static pages if Sanity fetch fails
		return staticPages;
	}
}
