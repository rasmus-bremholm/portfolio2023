import { client } from "@/sanity/lib/client";
import { projectPostQuery } from "@/sanity/lib";
import { Typography, Box, Container, Button, Chip } from "@mui/material";
import { PortableText } from "@portabletext/react"; // Use this consistently
import { renderComponents } from "@/sanity/lib/renderComponents";
import { urlFor } from "@/sanity/lib/sanityImageUrl";
import Image from "next/image";
import dayjs from "dayjs";
import BackButton from "../../blog/components/BackButton";
import ShareButton from "../../blog/components/ShareButton";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Project } from "@/types/sanity/projectpage";

export default async function ProjectPost({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post: Project = await client.fetch(projectPostQuery, { slug });

	const formatDate = (dateString: string) => {
		const date = dayjs(dateString);
		return date.format("D MMMM YYYY");
	};

	return (
		<Container maxWidth='md' sx={{ py: 8 }}>
			<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
				<BackButton href='/projects' label='Projects' ariaLabel='Return to project list' />
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
						{...(post.featuredImage.asset?.metadata?.lqip && {
							blurDataURL: post.featuredImage.asset.metadata.lqip,
							placeholder: "blur",
						})}
					/>
				</Box>
			)}
			<Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "flex-end", color: "text.secondary" }}>
				<Box sx={{ display: "flex", flexGrow: 1, gap: 4, my: 1 }}>
					{post.liveUrl && (
						<Button
							variant='contained'
							href={post.liveUrl}
							target='_blank'
							rel='noopener noreferrer'
							aria-label={`Live demo of ${post.title}`}
							startIcon={<LaunchIcon />}>
							Live Demo
						</Button>
					)}
					{post.githubUrl && (
						<Button
							variant='outlined'
							href={post.githubUrl}
							target='_blank'
							rel='noopener noreferrer'
							aria-label={`Github Repo of ${post.title}`}
							startIcon={<GitHubIcon />}>
							Github Repo
						</Button>
					)}
				</Box>
				<Typography variant='caption'>{formatDate(post.publishedAt)}</Typography>
			</Box>

			<Box>
				<Typography variant='h1'>{post.title}</Typography>
				<Box sx={{ display: "flex", gap: 1, textTransform: "capitalize", mb: 4 }}>
					{post.technologies.map((tech: string) => (
						<Chip variant='outlined' key={tech} label={tech} />
					))}
				</Box>
				<PortableText value={post.content} components={renderComponents} />
			</Box>
			<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
				<BackButton href='/projects' label='Projects' ariaLabel='Return to project list' />
			</Box>
		</Container>
	);
}
