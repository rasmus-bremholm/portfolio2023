import { client } from "@/sanity/lib/client";
import { featuredProjectQuery, projectsQuery } from "@/sanity/lib/queries";
import type { ProjectPreview } from "@/types/sanity/projectpage";
import { Box, Container, Typography } from "@mui/material";
import type { Metadata } from "next";
import ProjectFeaturedCard from "./components/ProjectFeaturedCard";

export const metadata: Metadata = {
	title: "Projects",
	description: "Things I have built.",
};

export default async function ProjectsPage() {
	const featuredProject = await client.fetch<ProjectPreview | null>(featuredProjectQuery);
	const projects = await client.fetch<ProjectPreview | null>(projectsQuery);

	return (
		<Container maxWidth='lg' sx={{ py: 8 }}>
			<Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end" }}>
				<Typography variant='h1' sx={{ mb: 6 }}>
					WORK
					<Typography component='span' variant='h1' sx={{ color: "primary.main" }}>
						.
					</Typography>
				</Typography>
			</Box>
			{featuredProject && <ProjectFeaturedCard project={featuredProject} />}
		</Container>
	);
}
