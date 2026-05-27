import { client } from "@/sanity/lib/client";
import { blogPostsQuery } from "@/sanity/lib/queries";
import type { BlogPostPreview } from "@/types/sanity/blogpage";
import { Box, Container, Typography, Chip, Stack } from "@mui/material";
import Link from "next/link";
import dayjs from "dayjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog",
	description: "Thoughts on development, teaching, and tech.",
};

export default async function BlogPage() {
	const posts: BlogPostPreview[] = await client.fetch(blogPostsQuery);

	return (
		<Container maxWidth='md' sx={{ py: 8 }}>
			<Typography variant='h1' sx={{ mb: 6 }}>
				Blog
			</Typography>

			{posts.length === 0 && (
				<Typography color='text.secondary'>No posts yet.</Typography>
			)}

			<Stack gap={6}>
				{posts.map((post) => (
					<Box
						key={post._id}
						component={Link}
						href={`/blog/${post.slug.current}`}
						sx={{ textDecoration: "none", color: "inherit" }}>
						<Typography variant='caption' color='text.secondary'>
							{dayjs(post.publishedAt).format("MMM D, YYYY")}
							{post.readTime ? ` · ${post.readTime} min read` : ""}
							{post.category ? ` · ${post.category}` : ""}
						</Typography>

						<Typography variant='h4' sx={{ mt: 0.5, mb: 1 }}>
							{post.title}
						</Typography>

						{post.excerpt && (
							<Typography variant='body2' color='text.secondary' sx={{ mb: 1.5 }}>
								{post.excerpt}
							</Typography>
						)}

						{post.tags?.length > 0 && (
							<Stack direction='row' flexWrap='wrap' gap={0.5}>
								{post.tags.map((tag) => (
									<Chip key={tag} label={tag} size='small' variant='outlined' />
								))}
							</Stack>
						)}
					</Box>
				))}
			</Stack>
		</Container>
	);
}
