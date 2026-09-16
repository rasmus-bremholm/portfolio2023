import type { Metadata } from "next";
import { Container, Box, Typography } from "@mui/material";
import { notFound } from "next/navigation";
import { fetchProjectBySlug } from "@/sanity/lib/client";
import formatDate from "@/app/lib/formatDate";
import { PortableText } from "next-sanity";
import { renderComponents } from "@/sanity/lib/renderComponents";
import { extractHeadings } from "@/app/lib/extractHeadings";
import TableofContent from "../components/TableofContent";
import KeepReading from "../components/KeepReading";
import JsonLd from "@/components/JsonLd";
import { projectJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata, projectOgImageUrl } from "@/lib/seo/metadata";
import { DEFAULT_OG_IMAGE } from "@/lib/seo/site";

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const project = await fetchProjectBySlug(slug);

	if (!project) {
		return { title: "Project Not Found" };
	}

	const image =
		project.seo?.image?.asset.url ||
		(project.featuredImage ? projectOgImageUrl(project.title, project.technologies) : DEFAULT_OG_IMAGE);

	return buildMetadata({
		title: project.seo?.title || project.title,
		description: project.seo?.description || project.description || `View ${project.title} project by Rasmus Bremholm`,
		path: `/projects/${slug}`,
		image,
		type: "article",
		publishedTime: project.publishedAt,
		noIndex: project.seo?.noIndex,
	});
}

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
			sx={{
				position: "relative",
				py: 8,
				display: "grid",
				gap: "clamp(3rem, 5vw, 5rem)",
				alignItems: "start",
				gridTemplateColumns: { xs: "1fr", md: "1fr 240px" },
			}}>
			<JsonLd data={projectJsonLd(project)} />
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
			<Box sx={{ position: "sticky", top: 100 }}>
				<TableofContent headings={headings} />
			</Box>

			<KeepReading slug={slug} />
		</Container>
	);
}
