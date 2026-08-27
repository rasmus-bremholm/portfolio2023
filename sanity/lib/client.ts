import { createClient } from "next-sanity";
import {
	blogPostQuery,
	blogPostsQuery,
	featuredProjectQuery,
	homepageSectionsQuery,
	projectPostQuery,
	projectsQuery,
	selectedWorkQuery,
	relatedProjectsQuery,
} from "./queries";
import type { ContentSection } from "@/types/sanity/homepage";
import type { BlogPost, BlogPostPreview } from "@/types/sanity/blogpage";
import type { Project, ProjectPreview } from "@/types/sanity/projectpage";

export const client = createClient({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_DATASET,
	apiVersion: "2023-05-03",
	useCdn: process.env.NODE_ENV === "production",
});

export function fetchHomepageSections(): Promise<ContentSection[]> {
	return client.fetch(homepageSectionsQuery);
}

export function fetchSelectedWork(): Promise<ProjectPreview[]> {
	return client.fetch(selectedWorkQuery);
}

export function fetchFeaturedProject(): Promise<ProjectPreview | null> {
	return client.fetch(featuredProjectQuery);
}

export function fetchProjects(): Promise<ProjectPreview[]> {
	return client.fetch(projectsQuery);
}

export function fetchProjectBySlug(slug: string): Promise<Project | null> {
	return client.fetch(projectPostQuery, { slug });
}

export function fetchBlogPosts(): Promise<BlogPostPreview[]> {
	return client.fetch(blogPostsQuery);
}

export function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
	return client.fetch(blogPostQuery, { slug });
}

function shuffle<T>(array: T[]): T[] {
	const result = [...array];
	for (let i = result.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[result[i], result[j]] = [result[j], result[i]];
	}
	return result;
}

export async function fetchRelatedProjects(currentSlug: string, count = 3): Promise<ProjectPreview[]> {
	const projects = await client.fetch<ProjectPreview[]>(relatedProjectsQuery, { slug: currentSlug });
	return shuffle(projects).slice(0, count);
}

export default client;
