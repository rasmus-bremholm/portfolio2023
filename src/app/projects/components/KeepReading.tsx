import { fetchRelatedProjects } from "@/sanity/lib/client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import formatDate from "@/app/lib/formatDate";

export default async function KeepReading({ slug }: { slug: string }) {
	const relatedProjects = await fetchRelatedProjects(slug, 3);
	return (
		<Box sx={{ py: "20px", borderTop: "1px solid", borderColor: "divider", gridColumn: "1 / -1" }}>
			<Typography variant='h3' sx={{ py: "26px" }}>
				Keep reading
			</Typography>
			<Box sx={{ display: "grid", gridColumn: "1 / -1", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" } }}>
				{relatedProjects.map((relProject) => (
					<Link
						key={relProject._id}
						href={`/projects/${relProject.slug.current}`}
						style={{ textDecoration: "none", color: "inherit", display: "block" }}>
						<Box
							sx={{
								border: "1px solid",
								display: "flex",
								flexDirection: "column",
								borderColor: "divider",
								p: 3,
								"&:hover .related-title": { color: "primary.main" },
							}}>
							<Typography variant='overline' sx={{ color: "text.secondary", display: "block", mb: 1 }}>
								{formatDate(relProject.publishedAt)}
							</Typography>
							<Typography variant='h3' component='h4' className='related-title' sx={{ transition: "color 0.2s ease" }}>
								{relProject.title}
							</Typography>
						</Box>
					</Link>
				))}
			</Box>
		</Box>
	);
}
