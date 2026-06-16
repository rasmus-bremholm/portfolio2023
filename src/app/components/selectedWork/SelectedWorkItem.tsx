"use client";
import { Box, Typography } from "@mui/material";
import type { ProjectPreview } from "@/types/sanity/projectpage";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

interface SelectedWorkItemProps {
	item: ProjectPreview;
	index: number;
}

export default function SelectedWorkItem({ item, index }: SelectedWorkItemProps) {
	return (
		<Link href={`/projects/${item.slug.current}`}>
			<Box
				sx={{
					py: 4,
					display: "flex",
					alignItems: "center",
					gridColumn: "span 8",
					"&:hover .item-indent": { transform: "translateX(20px)" },
					"&:hover .item-accent": { color: "primary.main" },
					borderBottom: "1px solid",
					borderColor: "divider",
				}}>
				<Box className='item-indent' sx={{ display: "flex", alignItems: "center", gap: 8, mr: "auto", transition: "transform 0.25s ease" }}>
					<Typography sx={{ fontSize: "0.7rem" }} variant='overline'>
						00{index}
					</Typography>
					<Typography className='item-accent' variant='h3' sx={{ transition: "color 0.25s ease" }}>
						{item.title}
					</Typography>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center", gap: 8 }}>
					<Typography>{item.publishedAt.slice(0, 4)}</Typography>
					<ArrowForwardIcon className='item-accent' sx={{ transition: "color 0.25s ease" }} />
				</Box>
			</Box>
		</Link>
	);
}
