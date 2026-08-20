import { fetchHomepageSections, fetchSelectedWork } from "@/sanity/lib/client";
import { Container, Divider } from "@mui/material";
import Hero from "./components/hero/Hero";

export default async function HomePage() {
	const [sections, selectedWork] = await Promise.all([fetchHomepageSections(), fetchSelectedWork()]);

	return (
		<Container maxWidth='lg' sx={{ py: 8 }}>
			<Hero />
		</Container>
	);
}
