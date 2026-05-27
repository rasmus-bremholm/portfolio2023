import { createImageUrlBuilder } from "@sanity/image-url";
import { createClient } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";

const imageClient = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	apiVersion: "2023-05-03",
	useCdn: true,
});

const builder = createImageUrlBuilder(imageClient);

export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}
