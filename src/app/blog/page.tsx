import type { Metadata } from "next";
import { Container, Box } from "@mui/material";
import BlogPageHeader from "../components/surfaces/header/BlogPageHeader";
import { client } from "@/sanity/lib/client";
import { blogPostsQuery } from "@/sanity/lib";
import BlogList from "./components/BlogList";

export const metadata: Metadata = {
	title: "Blog",
	description: "Articles about web development, Next.js, React, and software engineering.",
	openGraph: {
		title: "Blog | Rasmus Bremholm",
		description: "Articles about web development, Next.js, React, and software engineering.",
		url: "https://www.rasmusbremholm.com/blog",
		type: "website",
	},
};

export default async function Blog() {
	const posts = await client.fetch(blogPostsQuery);

	return (
		<Container component='main' maxWidth='md'>
			<Box>
				<BlogPageHeader />
			</Box>
			<Box>
				<BlogList posts={posts} />
			</Box>
		</Container>
	);
}
