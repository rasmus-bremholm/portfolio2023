import { client } from "@/sanity/lib/client";
import { featuredProjectQuery, projectsQuery } from "@/sanity/lib/queries";
import type { ProjectPreview } from "@/types/sanity/projectpage";
import { Box, Container, Typography } from "@mui/material";
import type { Metadata } from "next";
import ProjectsHero from "./components/ProjectsHero";
import ProjectCard from "./components/ProjectCard";

export const metadata: Metadata = {
	title: "Projects",
	description: "Things I have built.",
};

export default async function ProjectsPage() {
	const projects = await client.fetch<ProjectPreview[] | null>(projectsQuery);

	return (
		<Container maxWidth='lg' sx={{ py: 8 }}>
			<ProjectsHero projectCount={projects?.length} />
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",

					borderTop: "1px solid",
					borderLeft: "1px solid",
					border: "1px solid",
					borderColor: "divider",
				}}>
				{projects?.map((project) => (
					<Box
						key={project._id}
						sx={{
							borderRight: "1px solid",
							p: "24px",
							borderBottom: "1px solid",
							borderColor: "divider",
							transition: "all 0.2s ease",
							"&:hover": {
								bgcolor: "#eaece9",
							},
						}}>
						<ProjectCard project={project} />
					</Box>
				))}
			</Box>
		</Container>
	);
}
