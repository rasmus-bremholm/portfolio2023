import { getAllContentSections } from "@/sanity/lib/client";
import type { ContentSection } from "@/types/sanity/homepage";
import { PortableText } from "@portabletext/react";
import { renderComponents } from "@/sanity/lib/renderComponents";
import { Box, Container, Typography, Button } from "@mui/material";

export default async function HomePage() {
	const sections: ContentSection[] = await getAllContentSections();

	return (
		<Container maxWidth='lg' sx={{ py: 8 }}>
			<Box sx={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: "var(--grid-gap)", alignItems: "center", mb: 8 }}>
				<Box sx={{ display: "flex", flexDirection: "column", gridColumn: "span 2" }}>
					<Typography variant='overline' sx={{ color: "text.secondary" }}>
						Role
					</Typography>
					<Typography variant='overline'>Fullstack Developer</Typography>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "column", gridColumn: "span 2" }}>
					<Typography variant='overline' sx={{ color: "text.secondary" }}>
						Status
					</Typography>
					<Typography variant='overline' sx={{ color: "primary.main" }}>
						● Avalible Q3 2026
					</Typography>
				</Box>
			</Box>

			{sections.length === 0 && (
				<Typography variant='body1' color='text.secondary'>
					No homepage sections yet — add some in the Sanity Studio.
				</Typography>
			)}

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
