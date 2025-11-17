import HomepageSection from "./components/surfaces/HomepageSection";
import { getAllContentSections } from "../../sanity/lib/client";
import type { ContentSection } from "@/types/sanity/homepage";
import { Box, Container, Typography } from "@mui/material";
import HomePageHeader from "./components/surfaces/header/HomePageHeader";

export default async function Home() {
	const sections: ContentSection[] = await getAllContentSections();

	return (
		<Container component={"main"}>
			<HomePageHeader />
			{sections &&
				sections.map((section) => (
					<HomepageSection key={section._id} title={section.title} content={section.content} alignment={section.alignment} order={section.order} />
				))}
		</Container>
	);
}
