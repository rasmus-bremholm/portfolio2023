import AnimatedList from "./AnimatedList";
import { fetchProjects } from "@/sanity/lib/client";
import { Container } from "@mui/material";

export default async function ProjectList() {
	const projects = await fetchProjects(true);
	return (
		<Container maxWidth='lg'>
			<AnimatedList projects={projects} />
		</Container>
	);
}
