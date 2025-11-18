import { client } from "@/sanity/lib/client";
import { blogPostQuery } from "@/sanity/lib";
import { Typography, Box, Container } from "@mui/material";
import { PortableText } from "next-sanity";
import { renderComponents } from "@/sanity/lib/renderComponents";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const sanitySlug = { slug: slug };
	const post = await client.fetch(blogPostQuery, sanitySlug);
	console.log(post);

	return (
		<Container maxWidth='md'>
			<Box>
				<Typography variant='h1'>{post.title}</Typography>
			</Box>
			<Box>
				<Typography>
					<PortableText value={post.content} components={renderComponents} />
				</Typography>
			</Box>
		</Container>
	);
}
