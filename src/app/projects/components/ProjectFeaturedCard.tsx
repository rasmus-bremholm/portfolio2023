import { Box, Typography, Divider, Button, Stack } from "@mui/material";
import Image from "next/image";
import type { ProjectPreview } from "@/types/sanity/projectpage";

interface ProjectFeaturedCardProps {
	project: ProjectPreview;
}

export default function ProjectFeaturedCard({ project }: ProjectFeaturedCardProps) {
	const { featuredImage, title } = project;

	const buttons = [
		{ label: "Live Demo", href: project.liveUrl, variant: "contained" as const },
		{ label: "GitHub", href: project.githubUrl, variant: "outlined" as const },
		{ label: "Case Study", href: `/projects/${project.slug.current}`, variant: "outlined" as const },
	];
	return (
		<Box sx={{ display: "grid", gridTemplateColumns: { s: "1fr", md: "5fr 4fr" }, border: "1px solid", borderColor: "divider" }}>
			<Box
				id='media'
				sx={{
					borderRight: "1px solid",
					borderColor: "divider",
					position: "relative",
					minHeight: 400,
				}}>
				<Box
					sx={{
						position: "absolute",
						top: 32,
						left: 32,
						zIndex: 1,
						border: "1px solid",
						borderColor: "primary.main",
						px: 2,
						py: 0.5,
						bgcolor: "rgba(10,10,10,0.85)",
						backdropFilter: "blur(3px)",
					}}>
					<Typography variant='overline' sx={{ color: "primary.main" }}>
						{"// Featured"}
					</Typography>
				</Box>
				{featuredImage && <Image src={featuredImage.asset.url} alt={featuredImage.alt ?? title} fill style={{ objectFit: "cover" }} />}
			</Box>
			<Box id='content' sx={{ p: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
				<Box>
					<Box>
						<Typography variant='overline' sx={{ color: "text.secondary" }}>
							{"// Featured · 001"}
						</Typography>
					</Box>
					<Typography variant='h2'>{project.title}</Typography>

					<Typography variant='body1'>{project.description}</Typography>
					<Divider sx={{ my: 2 }} />
					<Stack direction='row' spacing={2} divider={<span>·</span>} sx={{ display: "flex", flexGrow: 1 }}>
						{project.technologies.map((tech, index) => (
							<Typography variant='overline' key={index}>
								{tech}
							</Typography>
						))}
					</Stack>
					<Divider sx={{ my: 2 }} />
				</Box>
				<Box sx={{ my: 2, display: "flex" }}>
					{buttons.map((btn) => (
						<Button key={btn.label} href={btn.href} variant={btn.variant} sx={{ flex: 1, borderRadius: 0, py: 1.5 }}>
							<Typography variant='overline'>{btn.label}</Typography>
						</Button>
					))}
				</Box>
			</Box>
		</Box>
	);
}
