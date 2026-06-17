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
			<Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end" }}>
				<Typography variant='h1' sx={{ mb: 6 }}>
					WORK
					<Typography component='span' variant='h1' sx={{ color: "primary.main" }}>
						.
					</Typography>
				</Typography>
			</Box>
		</Container>
	);
}
