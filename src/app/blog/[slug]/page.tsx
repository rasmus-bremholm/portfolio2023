import { client } from "@/sanity/lib/client";
import { blogPostQuery } from "@/sanity/lib";
import { Typography, Box, Container } from "@mui/material";
import { PortableText } from "next-sanity";
import { renderComponents } from "@/sanity/lib/renderComponents";
import { urlFor } from "@/sanity/lib/sanityImageUrl";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import Image from "next/image";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const sanitySlug = { slug: slug };
	const post = await client.fetch(blogPostQuery, sanitySlug);
	console.log(post);

	return (
		<Container maxWidth='md'>
			<Box>
				{post.featuredImage && (
					<Image
						src={urlFor(post.featuredImage).width(800).height(400).dpr(2).url()}
						height={800}
						width={400}
						alt={post.featuredImage.alt}
						placeholder='blur'
						blurDataURL={urlFor(post.featuredImage).width(24).height(24).blur(10).url()}></Image>
				)}
			</Box>
			<Box>
				<Typography variant='h1'>{post.title}</Typography>
				<PortableText value={post.content} components={renderComponents} />
			</Box>
		</Container>
	);
}
