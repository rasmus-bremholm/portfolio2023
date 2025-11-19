import { Container, Box } from "@mui/material";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib";
import ProjectsList from "./components/ProjectsList";
import ProjectPageHeader from "../components/surfaces/header/ProjectPageHeader";

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
