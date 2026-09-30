import Image from "next/image";
import { Box } from "@mui/material";
import type { ProjectPreview } from "@/types/sanity/projectpage";

// Striped background doubles as the fallback when no image exists
export default function CoverImage({ image, height, sizes }: { image?: ProjectPreview["featuredImage"]; height: string; sizes: string }) {
	const lqip = image?.asset?.metadata?.lqip;

	return (
		<Box
			sx={{
				position: "relative",
				height,
				overflow: "hidden",
				background: "repeating-linear-gradient(90deg,#e2e5e3 0 7px,#eaece9 7px 14px)",
				"& img": { transition: "transform 0.5s ease" },
				// Zoom on hovering the image itself or the card link around it
				"&:hover img, a:hover & img": { transform: "scale(1.04)" },
				"@media (prefers-reduced-motion: reduce)": { "& img": { transition: "none" } },
			}}>
			{image?.asset?.url && (
				<Image
					src={image.asset.url}
					alt={image.alt ?? ""}
					fill
					sizes={sizes}
					style={{ objectFit: "cover" }}
					{...(lqip && { placeholder: "blur" as const, blurDataURL: lqip })}
				/>
			)}
		</Box>
	);
}
