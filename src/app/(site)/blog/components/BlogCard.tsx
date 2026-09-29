import type { BlogPostPreview } from "@/types/sanity/blogpage";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import CoverImage from "@/app/components/coverImage/CoverImage";

export default function BlogCard({ post }: { post: BlogPostPreview }) {
	return (
		<Link href={`/blog/${post.slug.current}`}>
			<Box sx={{ display: "flex", gap: 1, flexDirection: "column", height: "100%" }}>
				<CoverImage image={post.featuredImage} height="180px" sizes="(max-width: 700px) 100vw, 400px" />
				<Typography variant='overline' sx={{ color: "text.tertiary" }}>
					{new Date(`${post.publishedAt}`).toLocaleDateString("sv-SE", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</Typography>
				<Typography variant='h3'>{post.title}</Typography>
				<Typography variant='body1'>{post.excerpt}</Typography>
				<Typography
					component='ul'
					variant='body2'
					sx={{ display: "flex", alignItems: "flex-end", gap: 1, listStyle: "none", p: 0, mt: "auto", flexWrap: "wrap" }}>
					{post.category && (
						<Typography component='li' variant='body2' sx={{ fontWeight: 500, textTransform: "capitalize" }}>
							{post.category}
						</Typography>
					)}
					{post.readTime && (
						<Typography component='li' variant='body2' sx={{ fontWeight: 500 }}>
							{post.readTime} min read
						</Typography>
					)}
				</Typography>
			</Box>
		</Link>
	);
}
