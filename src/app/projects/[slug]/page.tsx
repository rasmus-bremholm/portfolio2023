import { client } from "@/sanity/lib/client";
import { projectPostQuery, projectsQuery } from "@/sanity/lib/queries";
import { renderComponents } from "@/sanity/lib/renderComponents";
import type { Project } from "@/types/sanity/projectpage";
import { PortableText } from "@portabletext/react";
import { Box, Container, Typography, Chip, Stack, Button } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const projects = await client.fetch(projectsQuery);
	return projects.map((project: { slug: { current: string } }) => ({
		slug: project.slug.current,
	}));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const project: Project | null = await client.fetch(projectPostQuery, { slug });
	if (!project) return { title: "Project not found" };
	return {
		title: project.title,
		description: project.description,
	};
}

export default async function ProjectPage({ params }: PageProps) {
	const { slug } = await params;
	const project: Project | null = await client.fetch(projectPostQuery, { slug });

	if (!project) notFound();

	return (
		<Container maxWidth='md' sx={{ py: 8 }}>
			<Button href='/projects' sx={{ mb: 4 }}>
				← Back to projects
			</Button>

			{project.featuredImage?.asset?.url && (
				<Box
					sx={{
						position: "relative",
						aspectRatio: "16/9",
						mb: 4,
						borderRadius: 2,
						overflow: "hidden",
					}}>
					<Image
						src={project.featuredImage.asset.url}
						alt={project.featuredImage.alt || project.title}
						fill
						priority
						style={{ objectFit: "cover" }}
						placeholder={project.featuredImage.asset.metadata?.lqip ? "blur" : "empty"}
						blurDataURL={project.featuredImage.asset.metadata?.lqip}
						sizes='(max-width:900px) 100vw, 900px'
					/>
				</Box>
			)}

			<Typography variant='h1' sx={{ mb: 2 }}>
				{project.title}
			</Typography>

			<Typography variant='body1' color='text.secondary' sx={{ mb: 3 }}>
				{project.description}
			</Typography>

			{project.technologies.length > 0 && (
				<Stack direction='row' sx={{ flexWrap: 'wrap', gap: 1, mb: 4 }}>
					{project.technologies.map((tech) => (
						<Chip key={tech} label={tech} />
					))}
				</Stack>
			)}

			<Stack direction='row' sx={{ gap: 2, mb: 6 }}>
				{project.liveUrl && (
					<Button
						variant='contained'
						component='a'
						href={project.liveUrl}
						target='_blank'
						rel='noopener noreferrer'>
						Live demo
					</Button>
				)}
				{project.githubUrl && (
					<Button
						variant='outlined'
						component='a'
						href={project.githubUrl}
						target='_blank'
						rel='noopener noreferrer'>
						GitHub
					</Button>
				)}
			</Stack>

			{project.content && (
				<Box>
					<PortableText value={project.content} components={renderComponents} />
				</Box>
			)}
		</Container>
	);
}
