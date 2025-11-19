import { Container, Box } from "@mui/material";
import BlogPageHeader from "../components/surfaces/header/BlogPageHeader";
import { client } from "@/sanity/lib/client";
import { blogPostsQuery } from "@/sanity/lib";
import BlogList from "./components/BlogList";

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
