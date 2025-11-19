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

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = await client.fetch(blogPostQuery, { slug });

	const formatDate = (dateString: string) => {
		const date = dayjs(dateString);
		return date.format("D MMMM YYYY");
	};

	return (
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
	);
}
