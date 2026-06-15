"use client";
import { Box } from "@mui/material";
import type { ProjectPreview } from "@/types/sanity/projectpage";

interface Props {
	items: ProjectPreview[];
}

export default function SelectedWork({ items }: Props) {
	return (
		<Box>
			{items?.map((item, index) => (
				<Box key={item._id}>{index + 1}</Box>
			))}
		</Box>
	);
}
