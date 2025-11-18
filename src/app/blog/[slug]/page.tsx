import { client } from "@/sanity/lib/client";
import { blogPostQuery } from "@/sanity/lib";
import { Typography, Box, Container } from "@mui/material";
import { PortableText } from "@portabletext/react"; // Use this consistently
import { renderComponents } from "@/sanity/lib/renderComponents";
import { urlFor } from "@/sanity/lib/sanityImageUrl";
import Image from "next/image";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = await client.fetch(blogPostQuery, { slug });

	return (
		<Container maxWidth='md' sx={{ py: 8 }}>
			{post.featuredImage && (
				<Box sx={{ mb: 4, position: "relative", width: "100%", aspectRatio: "16/9" }}>
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

			<Box>
				<Typography variant='h1' sx={{ mb: 4 }}>
					{post.title}
				</Typography>
				<PortableText value={post.content} components={renderComponents} />
			</Box>
		</Container>
	);
}
