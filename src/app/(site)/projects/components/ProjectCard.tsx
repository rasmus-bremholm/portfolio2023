import type { ProjectPreview } from "@/types/sanity/projectpage";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function ProjectCard({ project }: { project: ProjectPreview }) {
	return (
		<Link href={`/projects/${project.slug.current}`}>
			<Box sx={{ display: "flex", gap: 1, flexDirection: "column", height: "100%" }}>
				<Box sx={{ background: "repeating-linear-gradient(90deg,#e2e5e3 0 7px,#eaece9 7px 14px)", height: "180px", display: "flex" }} />
				<Typography variant='overline' sx={{ color: "#8A9291" }}>
					{new Date(`${project.publishedAt}`).toLocaleDateString("sv-SE", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</Typography>
				<Typography variant='h3'>{project.title}</Typography>
				<Typography variant='body1'>{project.description}</Typography>
				<Typography
					component='ul'
					variant='body2'
					sx={{ display: "flex", alignItems: "flex-end", gap: 1, listStyle: "none", p: 0, mt: "auto", flexWrap: "wrap" }}>
					{project.technologies.map((t) => (
						<Typography key={t} component='li' variant='body2' sx={{ fontWeight: 500, textTransform: "capitalize" }}>
							{t}
						</Typography>
					))}
				</Typography>
			</Box>
		</Link>
	);
}
