import { getAllContentSections } from "@/sanity/lib/client";
import type { ContentSection } from "@/types/sanity/homepage";
import { PortableText } from "@portabletext/react";
import { renderComponents } from "@/sanity/lib/renderComponents";
import { Box, Container, Typography, Button, Divider } from "@mui/material";
import Hero from "./components/hero/Hero";

export default async function HomePage() {
	const sections: ContentSection[] = await getAllContentSections();

	return (
		<Container maxWidth='lg' sx={{ py: 8 }}>
			<Hero />
			<Divider sx={{ my: 8 }} />

			{sections.map((section) => (
				<Box
					key={section._id}
					sx={{
						mb: 8,
						display: "flex",
						flexDirection: {
							xs: "column",
							md: section.alignment === "right" ? "row-reverse" : "row",
						},
						gap: 4,
						alignItems: "flex-start",
					}}>
					<Box sx={{ flex: 1 }}>
						<Typography variant='h2' gutterBottom>
							{section.title}
						</Typography>

						<PortableText value={section.content} components={renderComponents} />

						{section.ctaText && section.ctaLink && (
							<Button href={section.ctaLink} variant='contained' sx={{ mt: 2 }}>
								{section.ctaText}
							</Button>
						)}
					</Box>
				</Box>
			))}
		</Container>
	);
}
