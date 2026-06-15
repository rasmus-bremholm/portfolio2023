import { createClient } from "next-sanity";
import {
	blogPostQuery,
	blogPostsQuery,
	homepageSectionsQuery,
	projectPostQuery,
	projectsQuery,
	selectedWorkQuery,
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

export default client;
