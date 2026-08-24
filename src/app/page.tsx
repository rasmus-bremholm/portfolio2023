import { Container } from "@mui/material";
import Hero from "./components/hero/Hero";
import StatusBar from "./components/status/StatusBar";
import SelectedWork from "./components/selectedWork/SelectedWork";
import ProjectList from "./components/projectList/ProjectList";

export default async function HomePage() {
	return (
		<>
			<Container maxWidth='lg' sx={{ py: 8 }}>
				<Hero />
			</Container>
			<StatusBar />
			<SelectedWork />
			<ProjectList />
		</>
	);
}
