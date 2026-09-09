import type { Metadata } from "next";
import { Container, Box, Typography } from "@mui/material";
import { notFound } from "next/navigation";
import { fetchBlogPostBySlug } from "@/sanity/lib/client";
import formatDate from "@/app/lib/formatDate";
import { PortableText } from "next-sanity";
import { renderComponents } from "@/sanity/lib/renderComponents";
import { extractHeadings } from "@/app/lib/extractHeadings";
import TableofContent from "@/app/projects/components/TableofContent";
import JsonLd from "@/components/JsonLd";
import { blogPostJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { DEFAULT_OG_IMAGE } from "@/lib/seo/site";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = await fetchBlogPostBySlug(slug);

	if (!post) {
		return { title: "Post Not Found" };
	}

	return buildMetadata({
		title: post.seo?.title || post.title,
		description: post.seo?.description || post.excerpt || `Read ${post.title} on Rasmus Bremholm's blog`,
		path: `/blog/${slug}`,
		image: post.seo?.image?.asset.url || post.featuredImage?.asset.url || DEFAULT_OG_IMAGE,
		type: "article",
		publishedTime: post.publishedAt,
		noIndex: post.seo?.noIndex,
	});
}

export default async function BlogPostPage({ params }: PageProps) {
	const { slug } = await params;
	const post = await fetchBlogPostBySlug(slug);
	const headings = extractHeadings(post?.content);

	if (!post) {
		notFound();
	}

	return (
		<Container
			maxWidth='lg'
			sx={{
				position: "relative",
				py: 8,
				display: "grid",
				gap: "clamp(3rem, 5vw, 5rem)",
				alignItems: "start",
				gridTemplateColumns: { xs: "1fr", md: "1fr 240px" },
			}}>
			<JsonLd data={blogPostJsonLd(post)} />
			<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
				<Typography variant='overline'>
					{post.category} · {formatDate(post.publishedAt)}
				</Typography>
				<Typography variant='h1'>{post.title}</Typography>
				{post.excerpt && (
					<Typography
						variant='body1'
						sx={{
							fontSize: "20px",
							fontWeight: 300,
							maxWidth: "680px",
							borderBottom: "1px solid",
							borderColor: "divider",
							paddingBottom: 4,
							textWrap: "pretty",
						}}>
						{post.excerpt}
					</Typography>
				)}
				<Box>
					<PortableText value={post.content} components={renderComponents} />
				</Box>
			</Box>
			<Box sx={{ position: "sticky", top: 100 }}>
				<TableofContent headings={headings} />
			</Box>
		</Container>
	);
}
