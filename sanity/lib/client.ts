import { createClient } from "next-sanity";
import { homepageSectionsQuery } from "./queries";
import type { ContentSection } from "@/types/sanity/homepage";

export const client = createClient({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_DATASET,
	apiVersion: "2023-05-03",
	//useCdn: false, // Set to true in production for better performance
	useCdn: process.env.NODE_ENV === "production",
});

export async function getAllContentSections(): Promise<ContentSection[]> {
	return client.fetch(homepageSectionsQuery);
}

export default client;
