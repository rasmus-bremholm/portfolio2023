import type { Metadata } from "next";
import { Container, Box, Typography } from "@mui/material";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib";
import ProjectsList from "./components/ProjectsList";
import ProjectPageHeader from "../components/surfaces/header/ProjectPageHeader";

export const metadata: Metadata = {
	title: "Projects",
	description: "Portfolio of projects built with Next.js, React, TypeScript, and modern web technologies.",
	openGraph: {
		title: "Projects | Rasmus Bremholm",
		description: "Portfolio of projects built with Next.js, React, TypeScript, and modern web technologies.",
		url: "/projects",
		siteName: "Rasmus Bremholm",
		type: "website",
	},
};

export default async function Projects() {
	const posts = await client.fetch(projectsQuery);

	return (
		<Container component='main' maxWidth='md'>
			<Box>
				<ProjectPageHeader />
			</Box>
			<Box>
				{posts && posts.length > 0 ?
					<ProjectsList posts={posts} />
				:	<Box sx={{ py: 8, textAlign: "center" }}>
						<Typography>No projects available yet.</Typography>
					</Box>
				}
			</Box>
		</Container>
	);
}
