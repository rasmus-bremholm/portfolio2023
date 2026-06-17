import { Box } from "@mui/material";
import Image from "next/image";
import type { ProjectPreview } from "@/types/sanity/projectpage";

interface ProjectFeaturedCardProps {
	project: ProjectPreview;
}

export default function ProjectFeaturedCard({ project }: ProjectFeaturedCardProps) {
	const { featuredImage, title } = project;
	return (
		<Box sx={{ display: "grid", gridTemplateColumns: "5fr 4fr", border: "1px solid", borderColor: "divider" }}>
			<Box id='media' sx={{ borderRight: "1px solid", borderColor: "divider", position: "relative", minHeight: 400 }}>
				{featuredImage ? (
					<Image src={featuredImage.asset.url} alt={featuredImage.alt ?? title} fill style={{ objectFit: "cover" }} />
				) : (
					<Box sx={{ width: "100%", height: "100%", bgcolor: "action.hover" }} />
				)}
			</Box>
			<Box id='content'>Content</Box>
		</Box>
	);
}
