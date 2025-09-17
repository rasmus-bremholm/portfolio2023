import { createClient } from "next-sanity";

export const client = createClient({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_DATASET,
	apiVersion: "2023-05-03",
	useCdn: false, // Set to true in production for better performance
});

export default client;
