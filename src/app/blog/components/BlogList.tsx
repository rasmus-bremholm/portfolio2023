"use client";
import { BlogPostPreview } from "@/types/sanity/blogpage";
import { Box, Card, Typography, Chip } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import dayjs from "dayjs";

interface BlogListProps {
	posts: BlogPostPreview[];
}

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delay: 0.8,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

const formatDate = (dateString: string) => {
	const date = dayjs(dateString);
	const currentYear = dayjs().year();
	const postYear = date.year();

	if (currentYear === postYear) {
		return date.format("D MMM");
	}

	return date.format("D MMM YYYY");
};

export default function BlogList({ posts }: BlogListProps) {
	return (
		<Box component={motion.div} variants={container} initial='hidden' animate='show'>
			{posts.map((post) => (
				<Link href={`/blog/${post.slug.current}`} style={{ textDecoration: "none" }} key={post._id}>
					<Card
						component={motion.div}
						variants={item}
						sx={{
							mb: 3,
							px: 5,
							py: 5,
							border: "1px solid transparent",
							transition: "border-color 0.2s",
							"&:hover": {
								borderColor: "primary.main",
							},
						}}>
						<Box sx={{ display: "flex", justifyContent: "space-between" }}>
							<Typography variant='body2' sx={{ mb: 1, color: "text.secondary" }}>
								{formatDate(post.publishedAt)}
							</Typography>
							<Typography
								variant='caption'
								sx={{
									color: "primary.main",
									textTransform: "uppercase",
									fontSize: "0.75rem",
									fontWeight: 600,
									letterSpacing: "0.5px",
								}}>
								{post.category}
							</Typography>
						</Box>

						<Typography variant='h4' sx={{ color: "text.primary", fontSize: { xs: 48, sm: 56, md: 60 } }}>
							{post.title}
						</Typography>

						<Typography sx={{ color: "text.secondary", mb: 3 }}>{post.excerpt}</Typography>

						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								gap: 2,
							}}>
							<Box
								sx={{
									display: "flex",
									gap: 1,
									flexWrap: "wrap",
								}}>
								{post.tags.map((tag) => (
									<Chip
										key={tag}
										label={tag.charAt(0).toUpperCase() + tag.slice(1)}
										variant='outlined'
										color='primary'
										size='small'
										sx={{ px: 1 }}
									/>
								))}
							</Box>

							<Typography
								variant='body2'
								sx={{
									color: "text.secondary",
									flexShrink: 0,
									whiteSpace: "nowrap",
								}}>
								{post.readTime} min read
							</Typography>
						</Box>
					</Card>
				</Link>
			))}
		</Box>
	);
}
