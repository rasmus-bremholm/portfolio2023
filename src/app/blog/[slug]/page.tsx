import { client } from "@/sanity/lib/client";
import { blogPostQuery, blogPostsQuery } from "@/sanity/lib/queries";
import { renderComponents } from "@/sanity/lib/renderComponents";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { Box, Container, Typography, Chip, Stack, Button } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";
import dayjs from "dayjs";
import type { Metadata } from "next";

// Extends the base BlogPost type to include the full image shape the query returns
interface BlogPostFull {
	_id: string;
	title: string;
	slug: { current: string };
	excerpt?: string;
	publishedAt: string;
	category: string;
	tags: string[];
	content: PortableTextBlock[];
	readTime?: number;
	featuredImage?: {
		asset: {
			_id: string;
			url: string;
			metadata?: {
				lqip?: string;
				dimensions?: { width: number; height: number };
			};
		};
		alt?: string;
	};
}

interface PageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const posts = await client.fetch(blogPostsQuery);
	return posts.map((post: { slug: { current: string } }) => ({
		slug: post.slug.current,
	}));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const post: BlogPostFull | null = await client.fetch(blogPostQuery, { slug });
	if (!post) return { title: "Post not found" };
	return {
		title: post.title,
		description: post.excerpt,
	};
}

export default async function BlogPostPage({ params }: PageProps) {
	const { slug } = await params;
	const post: BlogPostFull | null = await client.fetch(blogPostQuery, { slug });

	if (!post) notFound();

	return (
		<Container maxWidth='md' sx={{ py: 8 }}>
			<Button href='/blog' sx={{ mb: 4 }}>
				← Back to blog
			</Button>

			<Typography variant='caption' color='text.secondary' sx={{ display: 'block', mb: 1 }}>
				{dayjs(post.publishedAt).format("MMM D, YYYY")}
				{post.readTime ? ` · ${post.readTime} min read` : ""}
				{post.category ? ` · ${post.category}` : ""}
			</Typography>

			<Typography variant='h1' sx={{ mb: 2 }}>
				{post.title}
			</Typography>

			{post.tags?.length > 0 && (
				<Stack direction='row' sx={{ flexWrap: 'wrap', gap: 0.5, mb: 4 }}>
					{post.tags.map((tag) => (
						<Chip key={tag} label={tag} size='small' variant='outlined' />
					))}
				</Stack>
			)}

			{post.featuredImage?.asset?.url && (
				<Box
					sx={{
						position: "relative",
						aspectRatio: "16/9",
						mb: 6,
						borderRadius: 2,
						overflow: "hidden",
					}}>
					<Image
						src={post.featuredImage.asset.url}
						alt={post.featuredImage.alt || post.title}
						fill
						priority
						style={{ objectFit: "cover" }}
						placeholder={post.featuredImage.asset.metadata?.lqip ? "blur" : "empty"}
						blurDataURL={post.featuredImage.asset.metadata?.lqip}
						sizes='(max-width:900px) 100vw, 900px'
					/>
				</Box>
			)}

			<Box>
				<PortableText value={post.content} components={renderComponents} />
			</Box>
		</Container>
	);
}
