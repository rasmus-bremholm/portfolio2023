import { client } from "@/sanity/lib/client";
import { featuredProjectQuery, projectsQuery } from "@/sanity/lib/queries";
import type { ProjectPreview } from "@/types/sanity/projectpage";
import { Box, Container, Typography } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects",
	description: "Things I have built.",
};

export default async function ProjectsPage() {
	const featuredProject = await client.fetch<ProjectPreview | null>(featuredProjectQuery);
	const projects = await client.fetch<ProjectPreview | null>(projectsQuery);

	return <Container maxWidth='lg' sx={{ py: 8 }}></Container>;
}
