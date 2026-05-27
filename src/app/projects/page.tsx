import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import type { ProjectPreview } from "@/types/sanity/projectpage";
import { Box, Container, Typography, Chip, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects",
	description: "Things I have built.",
};

export default async function ProjectsPage() {
	const projects: ProjectPreview[] = await client.fetch(projectsQuery);

	return (
		<Container maxWidth='lg' sx={{ py: 8 }}>
			<Typography variant='h1' sx={{ mb: 6 }}>
				Projects
			</Typography>

			{projects.length === 0 && (
				<Typography color='text.secondary'>No projects yet.</Typography>
			)}

			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
					gap: 4,
				}}>
				{projects.map((project) => (
					<Link
						key={project._id}
						href={`/projects/${project.slug.current}`}
						style={{ textDecoration: "none", color: "inherit" }}>
						<Box>
							{project.featuredImage?.asset?.url && (
								<Box sx={{ position: "relative", aspectRatio: "16/9", mb: 2, borderRadius: 1, overflow: "hidden" }}>
									<Image
										src={project.featuredImage.asset.url}
										alt={project.featuredImage.alt || project.title}
										fill
										style={{ objectFit: "cover" }}
										placeholder={project.featuredImage.asset.metadata?.lqip ? "blur" : "empty"}
										blurDataURL={project.featuredImage.asset.metadata?.lqip}
										sizes='(max-width:600px) 100vw, (max-width:1200px) 50vw, 33vw'
									/>
								</Box>
							)}

							<Typography variant='h5' gutterBottom>
								{project.title}
							</Typography>

							<Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
								{project.description}
							</Typography>

							{project.technologies.length > 0 && (
								<Stack direction='row' sx={{ flexWrap: "wrap", gap: 0.5 }}>
									{project.technologies.map((tech) => (
										<Chip key={tech} label={tech} size='small' />
									))}
								</Stack>
							)}
						</Box>
					</Link>
				))}
			</Box>
		</Container>
	);
}
