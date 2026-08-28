import { Container, Box, Typography } from "@mui/material";
import { notFound } from "next/navigation";
import { fetchProjectBySlug } from "@/sanity/lib/client";
import formatDate from "@/app/lib/formatDate";
import { PortableText } from "next-sanity";
import { renderComponents } from "@/sanity/lib/renderComponents";
import { extractHeadings } from "@/app/lib/extractHeadings";
import TableofContent from "../components/TableofContent";
import KeepReading from "../components/KeepReading";

type Props = {
	params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
	const { slug } = await params;
	const project = await fetchProjectBySlug(slug);
	const headings = await extractHeadings(project?.content);

	if (!project) {
		notFound();
	}

	return (
		<Container
			maxWidth='lg'
			sx={{ py: 8, display: "grid", gap: "clamp(3rem, 5vw, 5rem)", alignItems: "start", gridTemplateColumns: { xs: "1fr", md: "1fr 240px" } }}>
			<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
				<Typography variant='overline'>
					{project.technologies[0]} {formatDate(project.publishedAt)}
				</Typography>
				<Typography variant='h1'>{project.title}</Typography>
				<Typography
					variant='body1'
					sx={{
						fontSize: "20px",
						fontWeight: 300,
						maxWidth: "680px",
						borderBottom: "1px solid",
						borderColor: "divider",
						paddingBottom: 4,
						textWrap: "pretty",
					}}>
					{project.description}
				</Typography>
				<Box>
					<PortableText value={project.content} components={renderComponents} />
				</Box>
			</Box>
			<TableofContent headings={headings} />
			<KeepReading slug={slug} />
		</Container>
	);
}
