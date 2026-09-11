import { fetchBlogPosts } from "@/sanity/lib/client";
import type { BlogPostPreview } from "@/types/sanity/blogpage";
import { Box, Container } from "@mui/material";
import type { Metadata } from "next";
import BlogHero from "./components/BlogHero";
import BlogCard from "./components/BlogCard";

export const metadata: Metadata = {
	title: "Blog",
	description: "Writing on web development, education, and building things.",
};

export default async function BlogPage() {
	const posts: BlogPostPreview[] = await fetchBlogPosts();

	return (
		<Container maxWidth='lg' sx={{ py: 8 }}>
			<BlogHero postCount={posts?.length} />
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",

					borderTop: "1px solid",
					borderLeft: "1px solid",
					borderColor: "divider",
					mt: "26px",
				}}>
				{posts?.map((post) => (
					<Box
						key={post._id}
						sx={{
							borderRight: "1px solid",
							p: "24px",
							borderBottom: "1px solid",
							borderColor: "divider",
							transition: "all 0.2s ease",
							"&:hover": {
								bgcolor: "#eaece9",
							},
						}}>
						<BlogCard post={post} />
					</Box>
				))}
			</Box>
		</Container>
	);
}
