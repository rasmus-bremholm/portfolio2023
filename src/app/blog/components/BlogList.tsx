"use client";
import { BlogPostPreview } from "@/types/sanity/blogpage";
import { Box, Card, Typography, Chip, IconButton } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import ShareIcon from "@mui/icons-material/Share";

interface BlogListProps {
	posts: BlogPostPreview[];
}

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
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
				<Card key={post._id} component={motion.div} variants={item} sx={{ mb: 3, px: 5, py: 5 }}>
					<Box id='published'>
						<Typography variant='body2' sx={{ mb: 1 }}>
							{formatDate(post.publishedAt)}
						</Typography>
					</Box>
					<Link href={`/blog/${post.slug.current}`}>
						<Typography variant='h4' sx={{ color: "text.primary", textDecoration: "none" }}>
							{post.title}
						</Typography>
					</Link>
					<Typography sx={{ color: "text.secondary", textDecoration: "none", mb: 1 }}>{post.excerpt}</Typography>
					{post.tags.map((tag) => (
						<Chip key={tag} label={tag} variant='outlined' color='primary' />
					))}
					<Box id='controls' sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 1 }}>
						<Typography variant='body2'>{post.readTime} min read</Typography>
						<IconButton size='small'>
							<ShareIcon fontSize='inherit' />
						</IconButton>
					</Box>
				</Card>
			))}
		</Box>
	);
}
