import type { ProjectPreview } from "@/types/sanity/projectpage";
import { Box, Typography } from "@mui/material";

export default function ProjectCard({ project }: { project: ProjectPreview }) {
	return (
		<Box>
			<Box sx={{ bgcolor: "repeating-linear-gradient(90deg,#e2e5e3 0 7px,#eaece9 7px 14px)", height: "180px", display: "flex" }} />
			<Typography variant='overline'>{new Date(project.publishedAt).toLocaleDateString()}</Typography>
			<Typography variant='h3'>{project.title}</Typography>
			<Typography variant='body1'>{project.description}</Typography>
			<Typography variant='body2'>
				{project.technologies.map((t, index) => (
					<span key={index}> {t} </span>
				))}
			</Typography>
		</Box>
	);
}
