import type { Metadata } from "next";
import { Container, Box } from "@mui/material";
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
		url: "https://www.rasmusbremholm.com/projects",
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
				<ProjectsList posts={posts} />
			</Box>
		</Container>
	);
}
