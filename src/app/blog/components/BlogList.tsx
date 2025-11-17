"use client";
import { BlogPostPreview } from "@/types/sanity/blogpage";
import { Box, Card, Typography } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function BlogList({ posts }: BlogListProps) {
	return (
		<Box component={motion.div} variants={container} initial='hidden' animate='show'>
			{posts.map((post) => (
				<Card key={post._id} component={motion.div} variants={item} sx={{ mb: 3, p: 3 }}>
					<Link href={`/blog/${post.slug.current}`}>
						<Typography variant='h4'>{post.title}</Typography>
						<Typography>{post.excerpt}</Typography>
					</Link>
				</Card>
			))}
		</Box>
	);
}
