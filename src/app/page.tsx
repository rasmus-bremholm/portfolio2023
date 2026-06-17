import { fetchHomepageSections, fetchSelectedWork } from "@/sanity/lib/client";
import { Container, Divider } from "@mui/material";
import Hero from "./components/hero/Hero";
import SelectedWork from "./components/selectedWork/SelectedWork";

export default async function HomePage() {
	const [sections, selectedWork] = await Promise.all([fetchHomepageSections(), fetchSelectedWork()]);

	return (
		<Container maxWidth='lg' sx={{ py: 8 }}>
			<Hero />
			<Divider sx={{ my: 8 }} />
			<SelectedWork items={selectedWork} />
		</Container>
	);
}
