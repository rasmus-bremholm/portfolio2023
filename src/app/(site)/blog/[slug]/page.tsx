import type { Metadata } from "next";
import { Container, Box, Typography } from "@mui/material";
import { notFound } from "next/navigation";
import { fetchBlogPostBySlug } from "@/sanity/lib/client";
import formatDate from "@/app/lib/formatDate";
import { PortableText } from "next-sanity";
import { renderComponents } from "@/sanity/lib/renderComponents";
import { extractHeadings } from "@/app/lib/extractHeadings";
import TableofContent from "@/app/(site)/projects/components/TableofContent";
import JsonLd from "@/components/JsonLd";
import { blogPostJsonLd, videoJsonLd } from "@/lib/seo/jsonld";
import { extractYoutubeId } from "@/app/lib/youtube";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { buildMetadata, blogOgImageUrl } from "@/lib/seo/metadata";
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
		image:
			post.seo?.image?.asset.url ||
			(post.featuredImage ? blogOgImageUrl(post.title, post.category, post.readTime) : DEFAULT_OG_IMAGE),
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

	const videoId = post.video?.url && extractYoutubeId(post.video.url);
	const video = videoJsonLd(post);

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
			{video && <JsonLd data={video} />}
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
				{videoId && (
					<figure style={{ margin: "1rem 0" }}>
						<YouTubeEmbed id={videoId} title={post.title} />
						{post.video?.caption && (
							<Typography variant='overline' component='figcaption' sx={{ mt: 1, display: "block", color: "text.secondary" }}>
								{post.video.caption}
							</Typography>
						)}
					</figure>
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
