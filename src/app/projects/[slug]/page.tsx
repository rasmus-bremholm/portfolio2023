import { Container, Box, Typography } from "@mui/material";
import { notFound } from "next/navigation";
import { fetchProjectBySlug, fetchRelatedProjects } from "@/sanity/lib/client";
import formatDate from "@/app/lib/formatDate";
import { PortableText } from "next-sanity";
import { renderComponents } from "@/sanity/lib/renderComponents";
import { ProjectPreview } from "@/types/sanity/projectpage";
import Link from "next/link";

type Props = {
	params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
	const { slug } = await params;
	const project = await fetchProjectBySlug(slug);
	const relatedProjects = await fetchRelatedProjects(slug, 3);

	if (!project) {
		notFound();
	}

	return (
		<Container
			maxWidth='lg'
			sx={{ py: 8, display: "grid", gap: "clamp(3rem, 5vw, 5rem)", alignItems: "start", gridTemplateColumns: { xs: "1fr", md: "1fr 240px" } }}>
			<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
				<Typography variant='overline'>
					{project.technologies[0]} {formatDate(project.publishedAt)}
				</Typography>
				<Typography variant='h1'>{project.title}</Typography>
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
					{project.description}
				</Typography>
				<Box>
					<PortableText value={project.content} components={renderComponents} />
				</Box>
				<Box sx={{ py: "20px", borderTop: "1px solid", borderColor: "divider" }}>
					<Typography variant='h3'>Keep reading</Typography>
					<Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 3 }}>
						{relatedProjects.map((relProject) => (
							<Link
								key={relProject._id}
								href={`/projects/${relProject.slug.current}`}
								style={{ textDecoration: "none", color: "inherit", display: "block" }}>
								<Box
									sx={{
										border: "1px solid",
										display: "flex",
										flexDirection: "column",
										borderColor: "divider",
										p: 3,
										"&:hover .related-title": { color: "primary.main" },
									}}>
									<Typography variant='overline' sx={{ color: "text.secondary", display: "block", mb: 1 }}>
										{formatDate(relProject.publishedAt)}
									</Typography>
									<Typography variant='h2' component='h4' className='related-title' sx={{ transition: "color 0.2s ease" }}>
										{relProject.title}
									</Typography>
								</Box>
							</Link>
						))}
					</Box>
				</Box>
			</Box>
			{/* TOC GOES HERE */}
			<Box>TOC Here</Box>
		</Container>
	);
}
