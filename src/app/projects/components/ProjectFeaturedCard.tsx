import { Box, Typography } from "@mui/material";
import Image from "next/image";
import type { ProjectPreview } from "@/types/sanity/projectpage";

interface ProjectFeaturedCardProps {
	project: ProjectPreview;
}

export default function ProjectFeaturedCard({ project }: ProjectFeaturedCardProps) {
	const { featuredImage, title } = project;
	return (
		<Box sx={{ display: "grid", gridTemplateColumns: "5fr 4fr", border: "1px solid", borderColor: "divider" }}>
			<Box
				id='media'
				sx={{
					borderRight: "1px solid",
					borderColor: "divider",
					position: "relative",
					minHeight: 400,
				}}>
				<Box sx={{ position: "absolute", top: 12, left: 12, zIndex: 1, border: "1px solid", borderColor: "primary.main", px: 2, py: 0.5 }}>
					<Typography variant='overline' sx={{ color: "primary.main" }}>
						{"// Featured"}
					</Typography>
				</Box>
				{featuredImage && (
					<Image src={featuredImage.asset.url} alt={featuredImage.alt ?? title} fill style={{ objectFit: "cover" }} />
				)}
			</Box>
			<Box id='content'>Content</Box>
		</Box>
	);
}
