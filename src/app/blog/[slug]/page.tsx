import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { blogPostQuery } from "@/sanity/lib";
import { Typography, Box, Container } from "@mui/material";
import { PortableText } from "@portabletext/react"; // Use this consistently
import { renderComponents } from "@/sanity/lib/renderComponents";
import { urlFor } from "@/sanity/lib/sanityImageUrl";
import Image from "next/image";
import dayjs from "dayjs";
import BackButton from "../components/BackButton";
import ShareButton from "../components/ShareButton";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const post = await client.fetch(blogPostQuery, { slug });

	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	const ogImageUrl = post.featuredImage
		? `/api/og/blog?title=${encodeURIComponent(post.title)}&category=${encodeURIComponent(post.category)}`
		: "/og-image.jpg";

	return {
		title: post.title,
		description: post.excerpt || `Read ${post.title} on Rasmus Bremholm's blog`,
		openGraph: {
			title: post.title,
			description: post.excerpt,
			url: `/blog/${slug}`,
			siteName: "Rasmus Bremholm",
			type: "article",
			publishedTime: post.publishedAt,
			authors: ["Rasmus Bremholm"],
			images: [
				{
					url: ogImageUrl,
					width: 1200,
					height: 630,
					alt: post.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.excerpt,
			images: [ogImageUrl],
		},
	};
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = await client.fetch(blogPostQuery, { slug });

	const formatDate = (dateString: string) => {
		const date = dayjs(dateString);
		return date.format("D MMMM YYYY");
	};

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: post.excerpt,
		datePublished: post.publishedAt,
		author: {
			"@type": "Person",
			name: "Rasmus Bremholm",
			url: "https://www.rasmusbremholm.com",
		},
		publisher: {
			"@type": "Person",
			name: "Rasmus Bremholm",
		},
		url: `https://www.rasmusbremholm.com/blog/${slug}`,
		keywords: post.category,
	};

	return (
		<>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<Container maxWidth='md' sx={{ py: 8 }}>
			<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
				<BackButton href='/blog' label='Blog' ariaLabel='Return to blog list' />
				<ShareButton />
			</Box>

			{post.featuredImage && (
				<Box sx={{ mb: 1, position: "relative", width: "100%", aspectRatio: "16/9" }}>
					<Image
						src={urlFor(post.featuredImage).width(1200).url()}
						alt={post.featuredImage.alt || post.title}
						fill
						style={{ objectFit: "cover" }}
						sizes='(max-width: 900px) 100vw, 900px'
						blurDataURL={post.featuredImage.asset.metadata.lqip}
						placeholder='blur'
					/>
				</Box>
			)}
			<Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "flex-end", color: "text.secondary" }}>
				<Box sx={{ display: "flex", flexGrow: 1 }}>
					<Typography variant='caption' sx={{ textTransform: "uppercase", color: "primary.main", fontWeight: 600 }}>
						{post.category}
					</Typography>
				</Box>
				<Typography variant='caption'>{formatDate(post.publishedAt)}</Typography>
				<Typography variant='caption'>{post.readTime} min read</Typography>
			</Box>

			<Box>
				<Typography variant='h1' sx={{ mb: 4 }}>
					{post.title}
				</Typography>
				<PortableText value={post.content} components={renderComponents} />
			</Box>
			<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
				<BackButton href='/blog' label='Blog' ariaLabel='Return to blog list' />
			</Box>
		</Container>
		</>
	);
}
