import HomepageSection from "./components/surfaces/HomepageSection";
import { getAllContentSections } from "../../sanity/lib/client";
import type { ContentSection } from "@/types/sanity/homepage";
import { Box, Container, Typography } from "@mui/material";

export default async function Home() {
	const sections: ContentSection[] = await getAllContentSections();

	return (
		<Container component={"main"}>
			<Box component={"header"} sx={{ display: "flex", flexDirection: "column", minHeight: "50svh", justifyContent: "center", maxWidth: "80%" }}>
				<Typography
					variant='h1'
					sx={{
						letterSpacing: "0.02em",
						lineHeight: 1,
						"& span": {
							background: "linear-gradient(90deg,#03a678 0%, rgba(237, 221, 83, 1) 100%);",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
						},
					}}>
					Hello, I'm <span>Rasmus Bremholm</span>
				</Typography>
				<Typography variant='h3' component={"h2"}>
					Fullstack Developer
				</Typography>
				<Typography sx={{ fontSize: "1.5rem" }}>Exploring areas where tech and artistry meet.</Typography>
			</Box>
			{sections &&
				sections.map((section) => <HomepageSection key={section._id} title={section.title} content={section.content} alignment={section.alignment} />)}
		</Container>
	);
}
